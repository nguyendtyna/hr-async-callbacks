const headers = require('./cors');
const qs = require('querystring');
const game = require('./middleware.js');

module.exports.routeHandler = (req, res) => {
    switch (req.method) {
        case 'GET':
            if (req.url === '/newGame') {
                game.startGame(game.gameState);
                res.writeHead(200, headers);
                res.write(JSON.stringify(game.gameState));
                res.end();
            } else {
                res.writeHead(200, headers);
                res.write(`I got a ${req.method} request.`);
                res.end();
            }
            break;
        case 'POST':
            if (req.url === '/submitGuess') {
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                req.on('end', () => {
                    let guessObj = qs.parse(body);
                    game.gameState = game.checkGuess(guessObj.guess, game.gameState);
                    res.writeHead(200, headers);
                    res.write(JSON.stringify(game.gameState));
                    res.end();
                });
            } else {
                res.writeHead(200, headers);
                res.write(`I got a ${req.method} request.`);
                res.end();
            }
            break;
        case 'PUT':
            if (req.url === '/updateScore') {
                res.writeHead(200, headers);
                res.write(JSON.stringify(game.gameState));
                res.end();
            } else {
                res.writeHead(200, headers);
                res.write(`I got a ${req.method} request.`);
                res.end();
            }
            break;
        case 'DELETE':
            if (req.url === '/restartGame') {
                game.restartGame(game.gameState);
                res.writeHead(200, headers);
                res.write(JSON.stringify(game.gameState));
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
            res.write(`I got an ${req.method} request.`);
            res.end();
            break;
        default:
            res.writeHead(404);
            res.end();
    }
};
