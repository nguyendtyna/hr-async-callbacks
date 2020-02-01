const http = require('http');
const router = require('./router.js');

const server = http.createServer(router.routeHandler);

const ip = "127.0.0.1";
const port = 3030;

server.listen(port, ip, (err) => {
  if(err) throw err;
  else console.log(`Listening on local port ${port}...`);
});
