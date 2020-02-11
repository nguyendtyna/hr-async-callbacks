const headers = require('./cors');
const wordFinder = require('./words/wordFinder');

let currentWord = 'asynchronous';
let score = 0;
let wrongCount = 0;

module.exports.routeHandler = (req, res) => {
  const type = req.method;
  const endPt = req.url;
  if (type === 'GET') {
    if (endPt === '/word') {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    } else if (endPt === '/score') {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    } else if (endPt === '/wrong') {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    } else {
      res.writeHead(200, headers);
      res.end();
    };
  } else if (type === 'POST') {
    if (endPt === '/guess') {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    } else {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    };
  } else if (type === 'PUT') {
    if (endPt === '/new-game') {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    } else {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    };
  } else if (type === 'DELETE') {
    if (endPt === '/clear-score') {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    } else {
      res.writeHead(200, headers);
      res.write(`I got a ${type} request.`);
      res.end();
    };
  } else {
    res.writeHead(404, headers);
    res.end();
  };
};
