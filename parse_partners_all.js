const fs = require('fs');
const html = fs.readFileSync('partners_scrape.html', 'utf8');

const elementorTexts = html.match(/class="elementor-text-editor elementor-clearfix"([^>]*)>([\s\S]*?)<\/div>/gi);
if (elementorTexts) {
  elementorTexts.forEach(t => {
     let clean = t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
     clean = clean.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-");
     console.log(clean);
     console.log("---");
  });
}

const elementorHeadings = html.match(/class="elementor-heading-title elementor-size-default">([\s\S]*?)<\//gi);
if (elementorHeadings) {
  elementorHeadings.forEach(t => {
     let clean = t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
     clean = clean.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-");
     console.log("HEADING:", clean);
  });
}
