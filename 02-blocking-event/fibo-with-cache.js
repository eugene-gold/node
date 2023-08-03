setTimeout(()=> console.log('settimeout'),0)

const cashe = new Map()

function fib (n) {
    return new Promise ((resolve, refect) => {
        if(n=== 0 || n === 1) {
           return resolve(n)
        }

        if(cashe.has(n)) {
            return resolve(cashe.get(n))
        }

        setImmediate(()=>
        fib(n-1).then((fib1)=>fib(n-2).then((fib2)=> {
            console.log(cashe);
            cashe.set(n, fib1 + fib2)
            resolve(fib1 + fib2)
        }))
        )
    })

}

fib(5).then((res)=>console.log(res))