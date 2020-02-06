const serverURL = 'http://localhost:3000';

const getAllCallback = (data) => {
  console.log('We received some data! Here:', data);
  // INVOKE JQUERY RENDER METHOD HERE
};

const getAll = (callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    contentType: 'application/json',
    success: getAllCallback,
  });
};

const getOneCallback = (data) => {
  // FILL ME IN 
  // have some kind of separate display for a single retrieved message
};

const getOne = (id, callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: getOneCallback,
  });
};

const sendCallback = (data) => {
  // FILL ME IN
  // INVOKE getAll HERE to update the page
};

const sendMessage = (newMessage, callback) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ message: newMessage }),
    success: sendMessage,
  });
};

const updateCallback = (data) => {
  // FILL ME IN
  // INVOKE getAll HERE to update the page
};

const updateMessage = (id, newMessage, callback) => {
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

const deleteCallback = (data) => {
  // FILL ME IN
  // INVOKE getAll HERE to update the page
};

const deleteMessage = (id, callback) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: deleteCallback,
  });
};
