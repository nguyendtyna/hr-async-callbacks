// For the purposes of this exercise, use the function below for your error handling callback in all Ajax calls.
const errorLogger = (err) => {
  console.log('Oops! There was an error.');
  console.error(err);
};

/* ========== getAll ========== //
*  The function and callback below are here as a basic example of an Ajax call and success callback.
*  
*  Fill in the missing pieces!
*/
const getAll = () => {
  $.ajax({
    type: FILL_ME_IN,
    url: 'http://127.0.0.1:3000/getAll',
    contentType: 'application/json',
    success: FILL_ME_IN,
    error: FILL_ME_IN
  });
};

const getAllCallback = (data) => {
  const messages = JSON.parse(data);
  console.log(FILL_ME_IN);
};

/* ========== getOne ========== /
*  Fix the call below!
*
*  HINT: There is specific behavior for how Ajax sends GET requests with parameters.
*/
const getOne = (id) => {
  $.ajax({
    /* FILL_ME_IN */
    url: 'http://127.0.0.1:3000/getOne',
    contentType: 'application/json',
    data: FILL_ME_IN,
    /* FILL_ME_IN */
  });
};

const getOneCallback = (data) => {
  /* FILL_ME_IN */
};

/* Write the rest of the functions below in the style of those above.
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
  /* FILL_ME_IN */
};

const sendCallback = (data) => {
  /* FILL_ME_IN */
};

/* ========== updateMessage ========== */
const updateMessage = (id, message) => {
  /* FILL_ME_IN */
};

const updateCallback = (data) => {
  /* FILL_ME_IN */
};

/* ========== deleteMessage ========== */
const deleteMessage = (id) => {
  /* FILL_ME_IN */
};

const deleteCallback = (data) => {
  /* FILL_ME_IN */
};
