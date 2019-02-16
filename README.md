# ImageSlicerJS - Slice images into multiple slices of the same dimensions

## How to install?

Install with npm
```
npm i imageslicerjs
```

## Basic usage
```
const ImageSlicer = require('imageslicerjs');
ImageSlicer.slice('./imagesFolder', ['.png','.jpg'], 16, 16, './output', {r:255, g:255, b:255, a:255});
```
## With promise
```
const ImageSlicer = require('imageslicerjs');
ImageSlicer.slice('./imagesFolder', ['.png','.jpg'], 16, 16, './output', {r:255, g:255, b:255, a:255})
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
__ imagesFolder  : the path to the directory to scan for images. (Default : './')

__ extensions    : an array of strings representing allowed images files extensions. (Default : ['.png','.jpg','.jpeg'])

__ tileWidth     : the width of the slices. (Default : 8)

__ tileHeight    : the height of the slices. (Default : 8)

__ outputPath    : the path to the generated slices directory. (Default : './output')

__ transparentColor : a color to be replaced by transparency. (Default : null)


[Github sources](https://github.com/lePioo/ImageSlicerJS)
