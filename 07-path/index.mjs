import path, { isAbsolute } from 'path'

const filePath = 'C:/Users/Eugene/projects/node/06-event/index.js'
const textFilePath = 'C:/Users/Eugene/OneDrive/Desktop/index.txt'
const relativePath = '.node/movie.mov'
const directoryPath = '.node/subfolder'

console.log(path.isAbsolute(filePath))
console.log(path.isAbsolute(textFilePath))
console.log(path.isAbsolute(relativePath))

console.log(path.basename(filePath))
console.log(path.basename(directoryPath))
console.log(path.dirname(filePath))
console.log(path.dirname(directoryPath))

console.log(path.resolve(relativePath))

console.log(path.extname(textFilePath))
console.log(path.extname(directoryPath))
console.log(path.extname(relativePath))

console.log(path.parse(filePath))

const parsedPath = path.parse(filePath)
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`))
//C:\Users\Eugene\projects\node\06-event\renamed-index.mjs
