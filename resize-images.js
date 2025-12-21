const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
    'safariportada.webp',
    'fuerteportada.webp',
    'salinasportada.webp',
    'circuitoportada.webp'
];

const imgDir = path.join(__dirname, 'img');

async function resizeImages() {
    for (const imgName of images) {
        const inputPath = path.join(imgDir, imgName);
        const outputPath = path.join(imgDir, imgName.replace('.webp', '-small.webp'));
        
        if (!fs.existsSync(inputPath)) {
            console.error(`File not found: ${inputPath}`);
            continue;
        }

        try {
            console.log(`Resizing: ${imgName}...`);
            await sharp(inputPath)
                .resize(650)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Success: ${imgName} -> ${path.basename(outputPath)}`);
        } catch (err) {
            console.error(`Error processing ${imgName}:`, err);
        }
    }
}

resizeImages();
