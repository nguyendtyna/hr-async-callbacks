const headers = require('./cors');
const qs = require('querystring');
const game = require('./middleware.js');

module.exports.routeHandler = (req, res) => {
	console.log(req.url);
	switch(req.method) {
		case 'GET':
			if(req.url === '/getWord') {
				game.startGame( game.gameState );
				res.writeHead(200, headers);
				res.write(JSON.stringify( game.gameState ));
				res.end();
			} else {
				res.writeHead(200, headers);
				res.write(`I got a ${req.method} request.`);
				res.end();
			}
			break;
		case 'POST':
			if(req.url === '/makeGuess'){
				let body = '';
				req.on('data', ( data ) => {
					body += data;
				});
				req.on('end', () => {
					let guessObj = qs.parse(body);
					game.gameState = game.checkGuess( guessObj.guess, game.gameState );
					res.writeHead(200, headers);
					res.write(JSON.stringify( game.gameState ));
					res.end();
				})
			} else {
				res.writeHead(200, headers);
				res.write(`I got a ${req.method} request.`);
				res.end();
			}
			break;
		case 'PUT':
				res.writeHead(200, headers);
				res.write(`I got a ${req.method} request.`);
				res.end();
			break;
		case 'DELETE':
			if(req.url === '/newGame') {
				game.restartGame( game.gameState );
				res.writeHead(200, headers);
				res.write(JSON.stringify( game.gameState ));
				res.end();
			} else {
				res.writeHead(200, headers);
				res.write(`I got a ${req.method} request.`);
				res.end();
			}
			break;
		case 'OPTIONS':
			console.log('Your Browser Has Sent An OPTIONS Request!');
			res.writeHead(200, headers);
			res.write(`I got a ${req.method} request.`);
			res.end();
			break;
		default:
			res.writeHead(404);
			res.end();
	};
