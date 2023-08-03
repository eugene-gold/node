import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('myEvent', () => {
    console.log('first event listener')
})

myEmitter.on('myEvent', () => {
    console.log('Second event listener')
})

myEmitter.on('otherEvent', () => {
    console.log('Other event listener')
})

myEmitter.setMaxListeners(25)
console.log(myEmitter.getMaxListeners())
console.log(myEmitter.eventNames())

setTimeout(() => myEmitter.emit('myEvent'), 1000)
