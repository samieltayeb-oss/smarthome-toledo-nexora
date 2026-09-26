const fs = require('fs');
const https = require('https');

async function fetchAllProducts() {
    let allProducts = [];
    let page = 1;
    let hasMore = true;
    
    console.log('Starting full catalog extraction...');
    
    while (hasMore && page <= 5) {
        console.log(`Fetching page ${page}...`);
        const url = `https://www.smarthometoledo.com/wp-json/wc/store/products?per_page=100&page=${page}`;
        
        try {
            const data = await new Promise((resolve, reject) => {
                https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
                    let body = '';
                    res.on('data', chunk => body += chunk);
                    res.on('end', () => resolve(JSON.parse(body)));
                }).on('error', reject);
            });
            
            if (data.code && data.code === 'rest_post_invalid_page_number') {
                hasMore = false;
                break;
            }
            
            if (data && data.length > 0) {
                allProducts = allProducts.concat(data);
                if (data.length < 100) hasMore = false;
                else page++;
            } else {
                hasMore = false;
            }
        } catch (e) {
            console.error('Error fetching page', page, e);
            hasMore = false;
        }
    }
    
    console.log(`Successfully extracted ${allProducts.length} products.`);
    
    const formatted = allProducts.map(p => {
        let price = 0;
        if (p.prices) {
            // wc/store often returns minor units, e.g., 1300 for $13.00
            price = p.prices.currency_minor_unit ? p.prices.price / Math.pow(10, p.prices.currency_minor_unit) : p.prices.price;
        }
        return {
            id: p.id,
            name: p.name,
            sku: p.sku || 'N/A',
            price: price,
            description: (p.short_description || p.description || '').replace(/<[^>]+>/g, '').trim(),
            image: (p.images && p.images.length > 0) ? p.images[0].src : '',
            category: (p.categories && p.categories.length > 0) ? p.categories[0].name : 'Uncategorized'
        };
    }).filter(p => p.name && p.image); // Only keep valid ones
    
    const tsContent = `export const PRODUCTS = ${JSON.stringify(formatted, null, 2)};`;
    fs.writeFileSync('app/shop/productsData.ts', tsContent);
    console.log(`Written ${formatted.length} valid products to app/shop/productsData.ts`);
}

fetchAllProducts();
