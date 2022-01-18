const path = require('path');
console.log(path.sep) //- returns platform specific seperator

 const filePath = path.join('/content', 'subfolder', 'test.txt'); //- to join and form a proper path name
 console.log(filePath)

 const basename = path.basename(filePath) //- tp get the base name of final fila name
 console.log(basename) 

 const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt') // provides absolute path on providing some path strings
 console.log(absolute)