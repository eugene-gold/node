const fs = require('fs')
const { resolve } = require('path')
let isRunning = true

setTimeout(() => (isRunning = false), 100)
process.nextTick(() => console.log('next tick'))

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        // setImmediate(()=> resolve())
        resolve()
    })
}

async function whileLoop() {
    while (isRunning) {
        console.log('programm running')
        await setImmediatePromise()
    }
}

whileLoop().then(() => console.log('while loop end'))
