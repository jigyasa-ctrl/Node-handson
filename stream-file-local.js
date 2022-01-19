var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
 //res.end('Welcome')
 const fileStream = fs.createReadStream('./content/bigFile.txt','utf-8');
 fileStream.on('open', () =>{
  fileStream.pipe(res)
 })
 fileStream.on('error',(err) =>{
     res.end(err)
 })
}).listen(8000)
