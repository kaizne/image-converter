const sharp = require('sharp')

const prompt = require('prompt-sync')({ sigint:true })
const image = prompt('Enter image file name: ')
const name = image.split('.')[0]

sharp(image)
    .toFormat('webp', { quality:50 })
    .toFile(`${name}.webp`)
    .then(info => console.log(info))
    .catch(err => console.log(err))
