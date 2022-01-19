const EventEmitter = require('events');
const customEmitter = new EventEmitter() // instanceor object of the event
customEmitter.on('response', (name, id) => { // listeining hte event
    console.log(`${name}: ${id}`)
})
customEmitter.on('response', () => { // listeining hte event
    console.log('some tother')
})


customEmitter.emit('response', 'john', 34) // emittering the event or calling the event