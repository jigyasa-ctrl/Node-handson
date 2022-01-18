//Modules

//CommonJS - every file is a module
//Modules - Encapsulated code (only share minimum)
const names = require('./names')
const sayHi = require('./utils')

sayHi('jigyasa')
sayHi(names.peter);
sayHi(names.john)