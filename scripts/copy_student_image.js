const fs = require('fs');
const path = require('path');

const src = `C:\\Users\\SHAYABA\\.gemini\\antigravity-ide\\brain\\bc10aa3d-03e3-43c3-acc5-5b3310c49a84\\student_3d_laptop_1790595272014.png`;
const dest = path.join(__dirname, '..', 'public', 'student3d.png');

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied student3d.png!');
} catch (e) {
  console.error(e);
}
