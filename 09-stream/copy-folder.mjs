import fs from 'fs'
import path from 'path'

const sourceDir = './files'
const distDir = './copy'

if (!fs.existsSync(sourceDir)) {
    console.warn('directory not exist')
    console.log('Exiting...')
    process.exit(0)
}

if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true })
}

fs.mkdirSync(distDir)

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName)
        const distFilePath = path.join(distDir, `${index + 1}. ${fileName}`)

        const readFileStream = fs.createReadStream(sourceFilePath)
        const writeFileStream = fs.createWriteStream(distFilePath)

        readFileStream.pipe(writeFileStream)

        writeFileStream.on('finish', () => {
            console.log(`File ${fileName} was copied`)
        })
    })
})
