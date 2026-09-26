async function scrapeFrontend() {
    let page = 1;
    let hasMore = true;
    let allProducts = [];
    
    console.log("Starting frontend HTML scrape...");
    
    while (hasMore && page <= 20) {
        let url = page === 1 ? 'https://www.smarthometoledo.com/shop/' : `https://www.smarthometoledo.com/shop/page/${page}/`;
        console.log(`Fetching ${url}...`);
        
        try {
            const res = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': 'text/html'
                }
            });
            
            if (res.status === 404 || res.status !== 200) {
                console.log(`Hit end of pagination at page ${page} (Status: ${res.status})`);
                hasMore = false;
                break;
            }
            
            const html = await res.text();
            
            // Extract product titles from WooCommerce loop
            // Typically <h2 class="woocommerce-loop-product__title">Product Name</h2>
            const matches = [...html.matchAll(/<h2 class="woocommerce-loop-product__title">([^<]+)<\/h2>/g)];
            
            if (matches.length === 0) {
                console.log(`No products found on page ${page}. Ending.`);
                hasMore = false;
                break;
            }
            
            const pageProducts = matches.map(m => m[1].trim());
            console.log(`Found ${pageProducts.length} products on page ${page}.`);
            allProducts = allProducts.concat(pageProducts);
            
            page++;
        } catch (e) {
            console.error(e);
            hasMore = false;
        }
    }
    
    console.log("\n--- SCRAPE RESULTS ---");
    console.log(`Total products parsed from frontend HTML: ${allProducts.length}`);
    
    const uniqueProducts = [...new Set(allProducts)];
    console.log(`Total UNIQUE products: ${uniqueProducts.length}`);
    
    if (allProducts.length !== uniqueProducts.length) {
        console.log(`DUPLICATES FOUND: ${allProducts.length - uniqueProducts.length}`);
    } else {
        console.log("No exact string duplicates found in the main shop loop.");
    }
    
    // Also let's check the API endpoint headers just to cross-verify the server's stated total
    console.log("\n--- API HEADER CHECK ---");
    const apiRes = await fetch('https://www.smarthometoledo.com/wp-json/wc/store/products?per_page=1', {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const totalItems = apiRes.headers.get('x-wp-total');
    console.log(`Server X-WP-Total header reports exactly: ${totalItems} products in the database.`);
    
}
scrapeFrontend();
