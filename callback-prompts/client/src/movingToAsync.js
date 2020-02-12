// ========== getAll ========== //
const getAll = () => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000/getAll',
    contentType: 'application/json',
    success: getAllCallback
  });
};

const getAllCallback = (data, callback) => {
  console.log('We received some data! Here:', data);
  const messages = JSON.parse(data);
  callback(messages);
};

// ========== getOne ========== //
const getOne = (id) => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000/getOne',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id }),
    success: getOneCallback
  });
};

const getOneCallback = (data, callback) => {
  const message = data;
  callback(message);
};

// ========== sendMessage ========== //
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

const sendCallback = (data, callback) => {
  const newID = JSON.parse(data).id;
  callback(newID);
};

// ========== updateMessage ========== //
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

const updateCallback = (data, callback) => {
  const successMessage = JSON.parse(data).success;
  callback(successMessage);
};

// ========== deleteMessage ========== //
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

const deleteCallback = (data, callback) => {
  const successMessage = JSON.parse(data).success;
  callback(successMessage);
};
