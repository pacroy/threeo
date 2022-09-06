const http = require('http')
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  console.log(`${req.method} ${url.pathname}${url.search}`)
  res
    .writeHead(307, {
      Location: `https://github.com/search${url.search}`,
      'Cache-Control': 'no-cache',
      'Content-Security-Policy': "frame-ancestors 'none'",
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    })
    .end()
})

server.listen(3000)
console.log('Listening on port 3000 ...')
