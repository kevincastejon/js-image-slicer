const ImageSlicer = require('../index');

ImageSlicer.slice('./test/imagesFolder', ['.png', '.jpg'], 16, 16, './test/output', {
  r: 255, g: 255, b: 255, a: 255,
})
  .then((numberImagesWritten) => {
    console.log(numberImagesWritten.toString(), 'images written');
  }).catch((err) => {
    console.log(err);
  });
