const headers = require('./cors');
const path = require('path');
const wordFinder = require('./wordFinder');

let currentWord = 'asynchronous';

module.exports.routeHandler = (req, res, next = () => {}) => {
	switch(req.method) {
		case 'GET':
			res.writeHead(200, headers);
			res.write(`I got a ${req.method} request.`);
			res.end();
			break;
		case 'POST':
			res.writeHead(200, headers);
			res.write(`I got a ${req.method} request.`);
			res.end();
			break;
		case 'OPTIONS':
			res.writeHead(200, headers);
			res.write(`I got a ${req.method} request.`);
			res.end();
			break;
		case 'DELETE':
			res.writeHead(200, headers);
			res.write(`I got a ${req.method} request.`);
			res.end();
			break;
		default: 
			res.writeHead(404);
			res.end();
	};
};
