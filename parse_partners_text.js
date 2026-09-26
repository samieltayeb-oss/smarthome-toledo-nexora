const fs = require('fs');
const html = fs.readFileSync('partners_scrape.html', 'utf8');

// A simple regex to strip tags and see what text is left
const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, ' ')
                 .replace(/\s+/g, ' ')
                 .trim();

console.log(text.substring(0, 2000));
