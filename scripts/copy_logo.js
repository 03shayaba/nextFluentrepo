const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\SHAYABA\\.gemini\\antigravity-ide\\brain\\7c97f0b2-5264-4e7b-90b9-d18f9acb7ccb\\logo_transparent_bg_1790925100241.png';
const dest = path.join(__dirname, '..', 'public', 'logo_transparent_bg.png');

fs.copyFileSync(src, dest);
console.log('Successfully copied logo to:', dest);
