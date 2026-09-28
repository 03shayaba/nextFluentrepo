const fs = require('fs');
const path = require('path');

const src = `C:\\Users\\SHAYABA\\.gemini\\antigravity-ide\\brain\\bc10aa3d-03e3-43c3-acc5-5b3310c49a84\\character_3d_no_circles_1790595702943.png`;
const dest = path.join(__dirname, '..', 'public', 'character_yellow.png');

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied character_yellow.png!');
} catch (e) {
  console.error(e);
}
