# js-image-slicer

Slice images into multiple slices of the same dimensions

## How to install?

Install with npm
```
npm i image-slicer
```
or yarn
```
yarn add image-slicer
```

## Basic usage
```
import ImageSlicer from 'image-slicer';    // ES6 import
```
or
```
const ImageSlicer = require('image-slicer');    // classic nodejs require
```
```
// Slice all PNG and JPG images located into './imagesFolder' to 16x16 tiles into './output' folder converting white pixels into transparent
ImageSlicer.slice('./imagesFolder', ['.png','.jpg'], 16, 16, './output', {r:255, g:255, b:255, a:255});
```
## With promise
```
const ImageSlicer = require('image-slicer');
ImageSlicer.slice('./imagesFolder', ['.png','.jpg'], 16, 16, './output', {r:255, g:255, b:255, a:255})
.then((numberImagesWritten) => {
  console.log(numberImagesWritten.toString(),'images written');
}).catch((err) => {
  console.log(err);
});

```
## CLI usage
You can use it, without even installing, with npx:
```
npx image-slicer folder=./imagesFolder extensions=.png.jpg tileWidth=50 tileHeight=50 transparentColor=FFFFFF output=./out
```


Or install it globally
```
npm i image-slicer -g
```
Then use 'image-slicer' command with the following optional parameters
```
image-slicer folder=./imagesFolder extensions=.png.jpg tileWidth=50 tileHeight=50 transparentColor=FFFFFF output=./out
```

## Optional parameters
__ imagesFolder  : the path to the directory to scan for images. (Default : './')

__ extensions    : an array of strings representing allowed images files extensions. (Default : ['.png','.jpg','.jpeg'])

__ tileWidth     : the width of the slices. (Default : 8)

__ tileHeight    : the height of the slices. (Default : 8)

__ outputPath    : the path to the generated slices directory. (Default : './output')

__ transparentColor : a color to be replaced by transparency. (Default : null)


[Github sources](https://github.com/kevincastejon/js-image-slicer)
