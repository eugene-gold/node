import { season, temparature } from './named.exports.mjs'
import { isRain, humidity } from './inline.mjs'
import getDataOnServer from './default-export.mjs'
import DEFAULT_SERVER, {
    PASSWORD,
    USERNAME as myName,
} from './mixed-export.mjs'

console.log(temparature, season)
console.log(isRain, humidity)
getDataOnServer('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((posts) => console.log(posts))
    .catch((e) => console.log(e))
// setTimeout(() => console.log(data), 2000)

console.log(DEFAULT_SERVER)
console.log(PASSWORD, myName)
