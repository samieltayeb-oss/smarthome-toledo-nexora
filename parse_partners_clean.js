const fs = require('fs');
const html = fs.readFileSync('partners_scrape.html', 'utf8');

const paragraphs = html.match(/<h[1-6][^>]*>.*?<\/h[1-6]>|<p[^>]*>.*?<\/p>/gi);

if (paragraphs) {
  paragraphs.forEach(p => {
    let clean = p.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    clean = clean.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-");
    if (clean.length > 5) {
      console.log(clean);
    }
  });
}
