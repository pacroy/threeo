import { createServer } from 'http'
const server = createServer((req, res) => {
  res.write('Hello, world!')
  res.end()
})

server.listen(3000)
console.log('Listening on port 3000 ...')
