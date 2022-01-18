// asynchronous file module methods
// what it means that here we need to provide a callback method
const { readFile, writeFile, writeFileSync } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        return;
    } else {
        console.log(result)
    }
})

readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    else {
        const second = result
        writeFile('./content/result-sync.txt', second, (err, result) => {
            if (err) {
                return;
            }
            console.log(result)
        })
    }
})