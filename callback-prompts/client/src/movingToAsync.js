// For the purposes of this exercise, use the function below for your error handling callback in all calls.
const errorLogger = (err) => {
  console.log('Oops! There was an error.');
  console.error(err);
};

/* ========== getAll ========== //
*  The function and callback below are here as a basic example of an Ajax call and success callback.
*  
*  Fill in the missing sections!
*/
const getAll = () => {
  $.ajax({
    type: 'GET', 
    url: 'http://127.0.0.1:3000/getAll',
    contentType: 'application/json',
    success: getAllCallback, 
    error: errorLogger 
  });
};

const getAllCallback = (data, callback) => {
  const messages = JSON.parse(data);
  callback(messages); 
};

/* ========== getOne ========== /
*  Fix the call below!
*
*  HINT: There is specific behavior for how Ajax sends get requests with parameters.
*/
const getOne = (id) => {
  $.ajax({
    type: 'GET', 
    url: 'http://127.0.0.1:3000/getOne',
    contentType: 'application/json', 
    data: { id }, 
    success: getOneCallback, 
    error: errorLogger 
  });
};

const getOneCallback = (data, callback) => {
  const message = JSON.parse(data).data; 
  callback(message);
};

/* Write the rest of the functions below.
* 
* You may need to read through some of the server code to figure out what endpoints your different requests types need to be sent to!
* 
* Keep in mind, for other request types the behavior for sending data is slightly different. Also, even calls that focus on 
* outgoing data often have returns from the server containing useful information--be sure to handle that in your callbacks.
* 
* HINT: The most common data format for modern APIs is json (and there are a few commonly used methods with the same name). 
*/

/* ========== sendMessage ========== */
const sendMessage = (message) => {
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/send',
    contentType: 'application/json',
    data: { message },
    success: sendCallback,
    error: errorLogger,
  });
};

const sendCallback = (data, callback) => {
  const newID = JSON.parse(data).data.id;
  callback(newID);
};

/* ========== updateMessage ========== */
const updateMessage = (id, message) => {
  $.ajax({
    type: 'PUT',
    url: 'http://127.0.0.1:3000/change',
    contentType: 'application/json',
    data: {
      id,
      message,
    },
    success: updateCallback,
    error: errorLogger,
  });
};

const updateCallback = (data, callback) => {
  const successMessage = JSON.parse(data).data.success;
  callback(successMessage);
};

/* ========== deleteMessage ========== */
const deleteMessage = (id) => {
  $.ajax({
    type: 'DELETE',
    url: 'http://127.0.0.1:3000/remove',
    contentType: 'application/json',
    data: { id },
    success: deleteCallback,
    error: errorLogger,
  });
};

const deleteCallback = (data, callback) => {
  const successMessage = JSON.parse(data).data.success;
  callback(successMessage);
};
