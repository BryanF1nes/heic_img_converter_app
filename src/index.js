import './styles.css';

// import * as promisify from 'node:util';
// import fs from 'node:fs';
// import convert from 'heic-convert';
// import path from 'node:path';

// (async () => {
//   const inputPath = path.join(__dirname, './input/');
//   const format = ['JPEG', 'PNG'];
//
//
//   const inputBuffer = await promisify(fs.readFile)(inputPath);
//   const images = await convert.all({
//     buffer: inputBuffer,
//     format: // format choice
//   });
//
//
//
//   for (let idx in images) {
//     const image = images[idx];
//     const outputBuffer = await image.convert();
//     if (format[0]) {
//       await promisify(fs.writeFile)(`./output/result-${idx}.jpg`, outputBuffer);
//     } else {
//       await promisify(fs.writeFile)(`./output/result-${idx}.png`, outputBuffer);
//     }
//   }
// });

function getImageNumber(image) {
  // get Image Number logic
};
