async function scrapeFrontend() {
    let page = 1;
    let hasMore = true;
    let allProducts = [];
    
    console.log("Starting full frontend HTML scrape...");
    
    while (hasMore && page <= 20) {
        let url = page === 1 ? 'https://www.smarthometoledo.com/shop/' : `https://www.smarthometoledo.com/shop/page/${page}/`;
        
        try {
            const res = await fetch(url, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            
            if (res.status === 404 || res.status !== 200) {
                hasMore = false;
                break;
            }
            
            const html = await res.text();
            
            // Extract product links
            let links = [...html.matchAll(/href="https:\/\/smarthometoledo.com\/product\/([^"]+)"/g)];
            let uniqueOnPage = [...new Set(links.map(m => m[1]))];
            
            if (uniqueOnPage.length === 0) {
                hasMore = false;
                break;
            }
            
            allProducts = allProducts.concat(uniqueOnPage);
            page++;
        } catch (e) {
            hasMore = false;
        }
    }
    
    const uniqueProducts = [...new Set(allProducts)];
    console.log(`\nFRONT-END SCRAPE COMPLETE:`);
    console.log(`Total product instances found across all pages: ${allProducts.length}`);
    console.log(`Total UNIQUE products: ${uniqueProducts.length}`);
    console.log(`Duplicates rendered on front-end: ${allProducts.length - uniqueProducts.length}`);
    
    // Quick API check again for total reference
    const apiRes = await fetch('https://www.smarthometoledo.com/wp-json/wc/store/products?per_page=1', {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const totalItems = apiRes.headers.get('x-wp-total');
    console.log(`API X-WP-Total header confirms: ${totalItems}`);
    
}
scrapeFrontend();
