const { readFile } = require('fs');

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

const start = async() => {
    try {
        const first = await getText('./content/first.txt')
        console.log(first)
    } catch (err) {
        console.log(err)
    }
}
start()

 
