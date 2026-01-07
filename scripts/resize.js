// scripts/resize.js
const sharp = require('sharp')
const fs = require('fs')
const inPath = 'public/images/graphics/mzansi-1.jpg'
const outPath = 'public/images/graphics/mzansi-1.opt.jpg'
sharp(inPath).resize(1200).jpeg({ quality: 80 }).toFile(outPath).then(()=>console.log('done'))
