//Modules

//CommonJS - every file is a module
//Modules - Encapsulated code (only share minimum)
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-export')


require('./mind-grenade')
sayHi('jigyasa')
sayHi(names.peter);
sayHi(names.john)