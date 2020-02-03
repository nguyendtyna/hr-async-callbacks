const headers = require('./cors');
const { addMessage, getMessage, updateMessage, deleteMessage } = require('./messageHandler.js');

module.exports.routeHandler = (req, res) => {
	switch(req.method) {
    // GET request endpoints
		case 'GET':
      switch(req.url) {
        case '/getOne':
          res.write('Test GET success!');
          res.end();
          break;
        case '/getAll':
          res.write('The base GET endpoint.');
          res.end();
          break;
        default:
          res.writeHead(200, headers);
          res.write('GET request received.');
          res.end();
      }
      break;

    // POST request endpoints
		case 'POST':
      if(req.url === '/send') {
        res.writeHead(200, headers);
        res.write(/* FILL ME IN */);
        res.end();
      } else {
        console.log(req);
        res.writeHead(200, headers);
        res.write(`I got a ${req.method} request.`);
        res.end();
      }
      break;

    // PUT request endpoints
		case 'PUT':
      if(req.url === '/update') {
        res.writeHead(200, headers);
        res.write(/* FILL ME IN */);
        res.end();
      } else {
        res.writeHead(200, headers);
        res.write(`I got a ${req.method} request.`);
        res.end();
      }
      break;

    // DELETE request endpoints
		case 'DELETE':
			res.writeHead(200, headers);
			res.write(`I got a ${req.method} request.`);
			res.end();
      break;
    
    // Default to 404 Error for unsupported request types.
		default: 
      res.writeHead(404, headers);
      // res.write('Sorry, that is an unsupported request type.');
			res.end();
	};
};
