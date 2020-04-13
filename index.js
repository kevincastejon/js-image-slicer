const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

class ImageSlicer {
  static slice(folder = './', extensions = ['.png', '.jpg', '.jpeg'], tileWidth = 8, tileHeight = 8, outputPath = './output/', transparentColor = null) {
    return new Promise(((resolve, reject) => {
      if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);
      const dir = fs.readdirSync(folder).filter((elt) => (extensions.includes(path.extname(`${folder}/${elt}`))));
      let totalImagesToWrite = 0;
      let imagesWritten = 0;
      dir.forEach((elt) => {
        const ext = path.extname(`${folder}/${elt}`);
        const base = path.basename(`${folder}/${elt}`, ext);
        Jimp.read(`${folder}/${elt}`, (err, img) => {
          if (err) reject(err);
          const numTileWidth = Math.floor(img.bitmap.width / tileWidth);
          const numTileHeight = Math.floor(img.bitmap.height / tileHeight);
          let it = 0;
          for (let i = 0; i < numTileHeight; i += 1) {
            for (let j = 0; j < numTileWidth; j += 1) {
              totalImagesToWrite += 1;
              const imgClone = img.clone();
              if (transparentColor) {
                imgClone.scan(0, 0, imgClone.bitmap.width, imgClone.bitmap.height, (x, y, idx) => {
                  const thisColor = {
                    r: imgClone.bitmap.data[idx + 0],
                    g: imgClone.bitmap.data[idx + 1],
                    b: imgClone.bitmap.data[idx + 2],
                    a: imgClone.bitmap.data[idx + 3],
                  };
                  if (thisColor.r === transparentColor.r && thisColor.g === transparentColor.g && thisColor.b === transparentColor.b && thisColor.a === transparentColor.a) {
                    imgClone.bitmap.data[idx + 0] = 0;
                    imgClone.bitmap.data[idx + 1] = 0;
                    imgClone.bitmap.data[idx + 2] = 0;
                    imgClone.bitmap.data[idx + 3] = 0;
                  }
                });
              }
              if (numTileHeight === 1 && numTileWidth === 1) {
                imgClone.write(path.resolve(outputPath, base + ext), onImageWritten);
              } else {
                imgClone.crop(j * tileWidth, i * tileHeight, tileWidth, tileHeight);
                imgClone.write(path.resolve(outputPath, `${base}_${it}${ext}`), onImageWritten);
              }
              it += 1;
            }
          }
        });
      });
      function onImageWritten() {
        imagesWritten += 1;
        if (imagesWritten === totalImagesToWrite) {
          resolve(imagesWritten);
        }
      }
    }));
  }
}
module.exports = ImageSlicer;
