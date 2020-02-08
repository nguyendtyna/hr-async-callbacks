const headers = require('./cors');
const fs = require('fs');
const path = require('path');
const dummyComplexity = require('./dummyData.js');
const {
  getAllMessages,
  getMessage,
  addMessage,
  updateMessage,
  deleteMessage,
  clearCache,
} = require('./messageHandler.js');

module.exports.routeHandler = (req, res) => {
  const type = req.method;
  req.body = JSON.parse(req.headers.data || '{}');

  // GET request endpoints
  if (type === 'GET') {
    if (req.url === '/getAll') {
      getAllMessages((err, messages) => {
        if (err) {
          console.log(err);
          res.writeHead(404, headers);
          res.write(
            'An error occured. Check your server console for more details!'
          );
          res.end();
        } else {
          res.writeHead(200, headers);
          res.write(JSON.stringify(messages));
          res.end();
        }
      });
    } else if (req.url === '/getOne') {
      const id = req.body.id;
      getMessage(id, (err, message) => {
        if (err) {
          console.log(err);
          res.writeHead(404, headers);
          res.write(
            'An error occured. Check your server console for more details!'
          );
          res.end();
        } else {
          res.writeHead(200, headers);
          res.write(message);
          res.end();
        }
      });
    } else {
      res.writeHead(200, headers);
      fs.createReadStream(path.join(__dirname, '../client/index.html'), 'utf8').pipe(res);
    }
  }

  // POST request endpoints
  else if (type === 'POST') {
    if (req.url === '/send') {
      const message = req.body.message;
      addMessage(message, (err, id) => {
        if (err) {
          console.log(err);
          res.writeHead(404, headers);
          res.write(
            'An error occured.  Check your server console for more details!'
          );
          res.end();
        } else {
          res.writeHead(200, headers);
          res.write(
            JSON.stringify({
              dummyComplexity,
              data: {
                hint: 'Hey, over here!',
                id,
              },
              dummyComplexity,
            })
          );
          res.end();
        }
      });
    } else {
      res.writeHead(200, headers);
      res.write(
        'POST request received at the base endpoint or an invalid endpoint.'
      );
      res.end();
    }
  }

  // PUT request endpoints
  else if (type === 'PUT') {
    if (req.url === '/change') {
      console.log(req.body);
      const { id, message } = req.body;
      updateMessage(id, message, (err, success) => {
        if (err) {
          console.log(err);
          res.writeHead(404, headers);
          res.write(
            'An error occured.  Check your server console for more details!'
          );
          res.end();
        } else {
          res.writeHead(200, headers);
          res.write(
            JSON.stringify({
              dummyComplexity,
              data: {
                success
              },
              dummyComplexity
            })
          );
          res.end();
        }
      });
    } else {
      res.writeHead(200, headers);
      res.write(
        'PUT request received at the base endpoint or an invalid endpoint.'
      );
      res.end();
    }
  }

  // DELETE request endpoints
  else if (type === 'DELETE') {
    if (req.url === '/remove') {
      const id = req.body.id;
      deleteMessage(id, (err, success) => {
        if (err) {
          console.log(err);
          res.writeHead(404, headers);
          res.write(
            'An error occured.  Check your server console for more details!'
          );
          res.end();
        } else {
          res.writeHead(200, headers);
          res.write(JSON.stringify({
            dummyComplexity,
            data: {
              success,
            },
            dummyComplexity,
          }));
          res.end();
        }
      });

    // Endpoint to reset the cache for testing
    } else if(req.url === '/reset') {
      clearCache((err, success) => {
        if(err) {
          res.writeHead(500, headers);
          res.write(JSON.stringify(err));
          res.end();
        } else {
          res.writeHead(200, headers);
          res.write(success);
          res.end();
        }
      });
    } else {
      res.writeHead(200, headers);
      res.write(
        'DELETE request received at the base endpoint or an invalid endpoint.'
      );
      res.end();
    }
  }

  // Necessary to appease the CORS gods
  else if (type === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  // Default to 405 Error for unsupported request methods.
  else {
    res.writeHead(405, headers);
    res.write('Sorry, that is an unsupported request type.');
    res.end();
  }
};
