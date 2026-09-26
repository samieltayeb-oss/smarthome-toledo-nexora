const fs = require('fs');

async function scrape() {
  try {
    const res = await fetch("https://smarthometoledo.com/our-partners/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5"
      }
    });
    
    if (!res.ok) {
      console.error("Failed to fetch:", res.status, res.statusText);
      return;
    }
    
    const html = await res.text();
    fs.writeFileSync("partners_scrape.html", html);
    console.log("Saved to partners_scrape.html");
  } catch (err) {
    console.error(err);
  }
}

scrape();
