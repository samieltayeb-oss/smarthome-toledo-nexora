const fs = require('fs');
const html = fs.readFileSync('partners_scrape.html', 'utf8');

let clean = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, '\n')
                 .replace(/&#8217;/g, "'")
                 .replace(/&#8211;/g, "-")
                 .replace(/&amp;/g, "&")
                 .split('\n')
                 .map(line => line.trim())
                 .filter(line => line.length > 20)
                 .join('\n');
fs.writeFileSync('partners_text.txt', clean);
