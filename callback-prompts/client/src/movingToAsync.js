const serverURL = 'http://localhost:3000';
const messageStore = [];

const getAllCallback = (data, callback) => {
  console.log('We received some data! Here:', data);
  const messages = JSON.parse(data).messages;
  callback(messages);
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
  const message = JSON.parse(data).message;
  callback(message);
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
  const newID = JSON.parse(data).id;
  callback(newID);
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
  const successMessage = JSON.parse(data).success;
  callback(successMessage);
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
  const successMessage = JSON.parse(data).success;
  callback(successMessage);
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
