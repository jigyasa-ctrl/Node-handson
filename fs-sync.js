//synchronous methods in filesystem modules - non-blocking

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8') // take two parameters, path and encoding  
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result.txt', `Here is the result: ${first} and ${second}`, {flag: 'a'})