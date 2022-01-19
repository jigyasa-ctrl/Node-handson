//in case of files wriding some times data is huge and cannot be stored in variables in that case we can use streams
const {writeFileSync} = require('fs');
for(let i=0; i<100; i++){
    writeFileSync('./content/bigfile.txt',`Hello world this is line ${i}\n`,{flag: 'a'})
}