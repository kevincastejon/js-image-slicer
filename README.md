# ImageSlicerJS - Slice images into multiple slices of the same dimensions

## How to install?

Install with npm
```
npm i imageslicerjs
```

## Basic usage
```
const ImageSlicer = require('imageslicerjs');
ImageSlicer.slice('./test/imagesFolder', ['.png','.jpg'], 16, 16, './test/output', "FFFFFF");
```
## With promise
```
const ImageSlicer = require('../index');
ImageSlicer.slice('./test/imagesFolder', ['.png','.jpg'], 16, 16, './test/output', "FFFFFF")
.then((numberImagesWritten) => {
  console.log(numberImagesWritten.toString(),'images written');
}).catch((err) => {
  console.log(err);
});

```
## CLI usage
Install globally
```
npm i imageslicerjs -g
```
Then use 'imageslicerjs' command with the following optional parameters
```
imageslicerjs folder=./imagesFolder extensions=.png.jpg tileWidth=50 tileHeight=50 transparentColor=FFFFFF output=./out
```
## Optional parameters
__imagesFolder  : the path to the directory to scan for images. (Default : './')
__extensions    : an array of strings representing allowed images files extensions. (Default : ['.png','.jpg','.jpeg'])
__tileWidth     : the width of the slices. (Default : 8)
__tileHeight    : the height of the slices. (Default : 8)
__outputPath    : the path to the generated slices directory. (Default : './output')
__transparentColor : a color to be replaced by transparency. (Default : null)


[Github sources](https://github.com/lePioo/ImageSlicerJS)
