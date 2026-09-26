const fs = require('fs');

const html = fs.readFileSync('partners_scrape.html', 'utf8');

// Looking for img tags, especially those that look like logos.
// Often Elementor sites have them in a gallery or explicit divs.
const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/gi;
let match;
const images = [];

while ((match = imgRegex.exec(html)) !== null) {
  const fullTag = match[0];
  const src = match[1];
  
  // Try to find alt text
  const altMatch = fullTag.match(/alt="([^"]*)"/i);
  const alt = altMatch ? altMatch[1] : '';
  
  // Try to find class
  const classMatch = fullTag.match(/class="([^"]*)"/i);
  const className = classMatch ? classMatch[1] : '';
  
  // Filter out common UI elements, keep likely logos
  if (src.includes('wp-content/uploads') && 
      !src.includes('elementor/thumbs') && 
      !src.includes('logo0') && // ignore site logo
      !alt.toLowerCase().includes('slider')) {
    images.push({ src, alt, className });
  }
}

// Remove duplicates based on src
const uniqueImages = [];
const seen = new Set();
for (const img of images) {
  // normalize src (remove query params if any)
  const cleanSrc = img.src.split('?')[0];
  if (!seen.has(cleanSrc)) {
    seen.add(cleanSrc);
    uniqueImages.push({ ...img, src: cleanSrc });
  }
}

console.log(JSON.stringify(uniqueImages, null, 2));
