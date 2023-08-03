const isRunning = true

setTimeout(()=> isRunning = false, 10)

while( isRunning) {
    console.log('programm running');
}