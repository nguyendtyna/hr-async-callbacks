const headers = require('./cors');
const {
  getAllMessages,
  getMessage,
  addMessage,
  updateMessage,
  deleteMessage
} = require('./messageHandler.js');

module.exports.routeHandler = (req, res) => {
  req.body = JSON.parse(req.headers.data);
  switch (req.method) {
    // GET request endpoints
    case 'GET':
      switch (req.url) {
        case '/getAll':
          getAllMessages((err, messages) => {
            if(err) {
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
          break;
        case '/getOne':
          const id = req.body.id;
          getMessage(id, (err, message) => {
            if(err) {
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
          break;
        default:
          res.writeHead(200, headers);
          res.write('GET request received at the base endpoint or an invalid endpoint.');
          res.end();
      }
      break;

    // POST request endpoints
    case 'POST':
      if (req.url === '/send') {
        const message = req.body.message;
        console.log(message);
        addMessage(message, (err, id) => {
          if(err) {
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
        res.write(`POST request received at the base endpoint or an invalid endpoint.`);
        res.end();
      }
      break;

    // PUT request endpoints
    case 'PUT':
      if (req.url === '/change') {
        const { id, message } = req.body;
        updateMessage(id, message, (err, success) => {
          if(err) {
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
          `PUT request received at the base endpoint or an invalid endpoint.`
        );
        res.end();
      }
      break;

    // DELETE request endpoints
    case 'DELETE':
      if (req.url === '/remove') {
        const id = req.body;
        deleteMessage(id, (err, success) => {
          if(err) {
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
          `DELETE request received at the base endpoint or an invalid endpoint.`
        );
        res.end();
      }
      break;

    // Default to 404 Error for unsupported request methods.
    default:
      res.writeHead(404, headers);
      res.write('Sorry, that is an unsupported request type.');
      res.end();
  }
};
