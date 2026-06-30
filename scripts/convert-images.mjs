import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public', 'images');

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      const originalPath = path.join(directoryPath, file);
      const webpPath = path.join(directoryPath, file.replace('.png', '.webp'));
      
      try {
        await sharp(originalPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(webpPath);
          
        console.log(`Converted ${file} to WebP`);
        fs.unlinkSync(originalPath); // Delete the original PNG
        console.log(`Deleted original ${file}`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error);
      }
    }
  }
});
