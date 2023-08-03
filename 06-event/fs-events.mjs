import EventEmitter from 'events'
import fs from 'fs'

const filePath = './first.txt'

const fileEmitter = new EventEmitter()

fileEmitter.on('writeComplete', () => {
    console.log('writed')
    fs.appendFile(filePath, '\nadded new string', () => {
        fileEmitter.emit('appendComplete')
    })
})

fileEmitter.on('appendComplete', () => {
    console.log('more text')
    fs.rename(filePath, './first_renamed.txt', () => {
        fileEmitter.emit('renameComplete')
    })
})

fileEmitter.on('renameComplete', () => {
    console.log('file renamed')
})

fs.writeFile(filePath, 'first file text', () => {
    fileEmitter.emit('writeComplete')
})
