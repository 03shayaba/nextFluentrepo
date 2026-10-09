const fs = require('fs');
const path = require('path');

function getDimensions(filePath) {
    try {
        const buffer = Buffer.alloc(30);
        const fd = fs.openSync(filePath, 'r');
        fs.readSync(fd, buffer, 0, 30, 0);
        fs.closeSync(fd);
        
        const isPNG = buffer.toString('ascii', 1, 4) === 'PNG';
        const isWEBP = buffer.toString('ascii', 8, 12) === 'WEBP';
        
        let width = 0;
        let height = 0;
        
        if (isPNG) {
            width = buffer.readUInt32BE(16);
            height = buffer.readUInt32BE(20);
            return `${width} x ${height}`;
        } else if (isWEBP) {
            // Very simplified WEBP VP8X/VP8L/VP8 parsing
            // Just returning unknown for now to avoid complex buffer parsing.
            // Better to use image-size
            return require('child_process').execSync(`npx image-size "${filePath}"`).toString().trim();
        }
        return 'Unknown';
    } catch (e) {
        return e.message;
    }
}

const files = ['ban1.webp', 'ban3.webp', 'ban5.png', 'ban6.png', 'ban1.png', 'ban3.png'];
files.forEach(f => {
    const p = path.join(__dirname, 'public', f);
    if (fs.existsSync(p)) {
        try {
            const out = require('child_process').execSync(`npx image-size "${p}"`).toString().trim();
            console.log(f + ': ' + out);
        } catch(e) {
            console.log(f + ': Error - ' + e.message);
        }
    }
});
