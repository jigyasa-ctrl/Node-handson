const { readFile, writeFile } = require('fs');
//const { readFile, writeFile } = require('fs').promises; - this one also returns functions which return a prmise - now readFile will return a promise
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


// this is a promise
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res)
            }
        })
    })
}

// getText('./content/first.txt').then(result => console.log(result)).catch(err => console.log(err))

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/first.txt', 'utf-8')
        console.log(first)
    } catch (err) {
        console.log(err)
    }
}
start()


