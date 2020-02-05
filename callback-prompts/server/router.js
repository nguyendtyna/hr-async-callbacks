const headers = require('./cors');
const {
  getAllMessages,
  getMessage,
  addMessage,
  updateMessage,
  deleteMessage
} = require('./messageHandler.js');

module.exports.routeHandler = (req, res) => {
  const type = req.method;
  req.body = JSON.parse(req.headers.data);

  if (type === 'GET') {
    // GET request endpoints
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
          res.write(JSON.stringify(message));
          res.end();
        }
      });
    } else {
      res.writeHead(200, headers);
      res.write(
        'GET request received at the base endpoint or an invalid endpoint.'
      );
      res.end();
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
          res.write(JSON.stringify({ id: id }));
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
          res.write(success);
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
      const id = req.body;
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

  // Default to 404 Error for unsupported request methods.
  else {
    res.writeHead(404, headers);
    res.write('Sorry, that is an unsupported request type.');
    res.end();
  }
};
