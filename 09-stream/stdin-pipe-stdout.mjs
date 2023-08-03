import stream, { Transform } from 'stream'
import fs from 'fs'
//pipe to file
// const filePath = './files/stdin-dump.txt'

// const writeStream = fs.createWriteStream(filePath)

// process.stdin.pipe(writeStream)

// //pipe to stdout
// process.stdin.pipe(process.stdout)

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase()
        cb(null, upperCased)
    },
})

const reverseCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const charsArray = chunk.toString().split('')
        const lastChar = charsArray.pop()
        const reversed = charsArray.reverse().concat(lastChar).join('')
        cb(null, reversed)
    },
})

process.stdin.pipe(upperCaseStream).pipe(reverseCaseStream).pipe(process.stdout)
