const {createReadStream} = require('fs');
const stream = createReadStream('./content/bigFile.txt',{highWaterMark: 90000, encoding: 'utf-8'}) // second parameter is to control the size of buffer
stream.on('data',(result)=>{
    console.log(result) // here instead of reading it and putting all in variable .. we are doing that in chunks and usinf event 
})
stream.on('error',(result)=>{
    console.log(result) // here instead of reading it and putting all in variable .. we are doing that in chunks and usinf event 
})
