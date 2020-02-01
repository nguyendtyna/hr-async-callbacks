const headers = require('./cors');
const path = require('path');
const fs = require('fs');
const wordFinder = require('./words/wordFinder');

let currentWord = 'asynchronous';

module.exports.routeHandler = (req, res) => {
	switch(req.method) {
		case 'GET':
			if(req.url === '/') {
			}
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
