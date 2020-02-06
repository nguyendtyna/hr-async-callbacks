const serverURL = 'http://localhost:3000';
const messageStore = [];

const getAllCallback = (data, callback) => {
  console.log('We received some data! Here:', data);
  // INVOKE JQUERY RENDER METHOD HERE
};

const getAll = () => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    contentType: 'application/json',
    success: getAllCallback,
  });
};

const getOneCallback = (data, callback) => {
  // FILL ME IN
  // have some kind of separate display for a single retrieved message
};

const getOne = (id) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: getOneCallback,
  });
};

const sendCallback = (data, callback) => {
  // FILL ME IN
  // INVOKE getAll HERE to update the page
};

const sendMessage = (newMessage) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ message: newMessage }),
    success: sendMessage,
  });
};

const updateCallback = (data, callback) => {
  // FILL ME IN
  // INVOKE getAll HERE to update the page
};

const updateMessage = (id, newMessage) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      id: id,
      message: newMessage
    }),
    success: updateCallback,
  });
};

const deleteCallback = (data, callback) => {
  // FILL ME IN
  // INVOKE getAll HERE to update the page
};

const deleteMessage = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: deleteCallback,
  });
};
