const http = require('http');
const server = http.createServer((req, res) => {
if(req.url == '/'){
    res.end('Welcome to 8000')
}
if(req.url =='/about'){
    res.end('Here is about page')
}
    res.end(
        `<h1>Opps!</h1>
        <p>We can't find what you are looking for</p>
        `
    )


// res.write('Welcome to 8000'); //writes to port
// res.end() //end request
})
//listening at port 5000
server.listen(8000)