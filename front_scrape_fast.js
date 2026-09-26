async function run() {
    let allLinks = [];
    for(let i=1; i<=10; i++) {
        let url = i === 1 ? 'https://www.smarthometoledo.com/shop/' : `https://www.smarthometoledo.com/shop/page/${i}/`;
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 3000);
            let res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: controller.signal });
            clearTimeout(timeout);
            if(res.status !== 200) break;
            let html = await res.text();
            let links = [...html.matchAll(/href="https:\/\/smarthometoledo.com\/product\/([^"]+)"/g)].map(m => m[1]);
            let unique = [...new Set(links)];
            if(unique.length === 0) break;
            allLinks.push(...unique);
            console.log(`Page ${i}: Found ${unique.length} unique products.`);
        } catch(e) {
            console.log(`Page ${i} failed or timed out.`);
            break;
        }
    }
    let totalUnique = [...new Set(allLinks)];
    console.log(`\nFront-end scrape complete.`);
    console.log(`Total URLs found across pages: ${allLinks.length}`);
    console.log(`Unique URLs found: ${totalUnique.length}`);
}
run();
