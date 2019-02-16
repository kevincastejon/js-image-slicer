const ImageSlicer = require('./index');
let clArgs = process.argv.reduce((acc,elt,i) => {
  if(i>1){
    if(elt.includes('=')){
      let ar=elt.split('=');
      acc[ar[0]]=isNaN(parseInt(ar[1]))?ar[1]:parseInt(ar[1]);
    } else {
      acc[elt]=true;
    }
  }
  return acc;
},{});
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        a: 255,
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
let pFolder = clArgs.folder===undefined?'./':clArgs.folder;
let pExtensions = clArgs.extensions===undefined?['.png','.jpg','.jpeg']:clArgs.extensions.split('.').map((elt) => {return '.'+elt;});
let pTileWidth = clArgs.tileWidth===undefined?8:clArgs.tileWidth;
let pTileHeight = clArgs.tileHeight===undefined?8:clArgs.tileHeight;
let pOutput = clArgs.output===undefined?'./output/':clArgs.output;
let pTransparencyColor = clArgs.transparentColor===undefined?null:hexToRgb(clArgs.transparentColor);
ImageSlicer.slice(pFolder, pExtensions, pTileWidth, pTileHeight, pOutput, pTransparencyColor).then((numberImagesWritten) => {
  console.log(numberImagesWritten.toString(),'images written into',pOutput);
}).catch((err) => {
  console.log(err);
});
