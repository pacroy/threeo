const http = require('http')
const server = http.createServer((req, res) => {
  console.log(`URL: ${req.url}`)
  res
    .writeHead(307, {
      'Location': `https://github.com/search${req.url}`
    })
    .end()
})

server.listen(3000)
console.log('Listening on port 3000 ...')
