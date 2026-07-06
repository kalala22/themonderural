const fs = require('fs');
const path = require('path');

const srcDir = '/home/chretien-kalala/.gemini/antigravity/brain/69c0d172-56e9-4f1a-a7b7-abd135921ca3/';
const destDir = '/home/chretien-kalala/Documents/themonderural/public/assets/';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  'nature_gallery',
  'travaux_champs_gallery',
  'recolte_mais_gallery',
  'clinique_mobile_gallery'
];

fs.readdirSync(srcDir).forEach(file => {
  files.forEach(f => {
    if (file.startsWith(f) && file.endsWith('.png')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, f + '.png'));
      console.log(`Copied ${file} to ${f}.png`);
    }
  });
});
