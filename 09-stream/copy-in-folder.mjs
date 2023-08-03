import fs from 'fs'

const fileName = './files/third.txt'
const fileNameCopy = './files/third_copy.txt'

const readStream = fs.createReadStream(fileName)
const writeStream = fs.createWriteStream(fileNameCopy)

readStream.pipe(writeStream)

readStream.on('end', () => console.log('read end'))
writeStream.on('close', () => console.log('write end'))
writeStream.on('finish', () => console.log('file succesfully copied'))
