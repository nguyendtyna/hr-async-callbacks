const messageStore = [];

const getAllCallback = (data, callback) => {
  console.log('We received some data! Here:', data);
  const messages = JSON.parse(data).messages;
  callback(messages);
};

const getAll = () => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000/getAll',
    contentType: 'application/json',
    success: getAllCallback
  });
};

const getOneCallback = (data, callback) => {
  const message = JSON.parse(data).message;
  callback(message);
};

const getOne = (id) => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000/getOne',
    contentType: 'application/json',
    dataType: 'json',
    data: {
      "id": id
    },
    success: getOneCallback
  });
};

const sendCallback = (data, callback) => {
  const newID = JSON.parse(data).id;
  callback(newID);
};

const sendMessage = (newMessage) => {
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/send',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ message: newMessage }),
    success: sendCallback
  });
};

const updateCallback = (data, callback) => {
  const successMessage = JSON.parse(data).success;
  callback(successMessage);
};

const updateMessage = (id, newMessage) => {
  $.ajax({
    type: 'PUT',
    url: 'http://127.0.0.1:3000/change',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      id: id,
      message: newMessage
    }),
    success: updateCallback
  });
};

const deleteCallback = (data, callback) => {
  const successMessage = JSON.parse(data).success;
  callback(successMessage);
};

const deleteMessage = (id) => {
  $.ajax({
    type: 'DELETE',
    url: 'http://127.0.0.1:3000/remove',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: deleteCallback
  });
};
