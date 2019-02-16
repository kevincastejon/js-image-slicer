const ImageSlicer = require('../index');
ImageSlicer.slice('./test/imagesFolder', ['.png','.jpg'], 16, 16, './test/output', "FFFFFF")
.then((numberImagesWritten) => {
  console.log(numberImagesWritten.toString(),'images written');
}).catch((err) => {
  console.log(err);
});
