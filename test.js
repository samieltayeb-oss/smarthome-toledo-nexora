async function run() {
    let html = await fetch('https://www.smarthometoledo.com/shop/', {headers:{'User-Agent':'Mozilla/5.0'}}).then(r=>r.text());
    let links = [...html.matchAll(/href="https:\/\/smarthometoledo.com\/product\/([^"]+)"/g)];
    let unique = [...new Set(links.map(m => m[1]))];
    console.log(`Found ${unique.length} unique products on page 1`);
}
run();
