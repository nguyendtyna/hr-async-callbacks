const $ = require('../spec/lib/jquery.js');
const serverURL = 'http://localhost:3000';

const handleAllRes = (data) => {
  // FILL ME IN
};

const getAll = (callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    success: handleAll,
  });
};

const handleOneRes = (data) => {
  // FILL ME IN 
};

const getOne = (callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    success: handleOneRes,
  });
};

const handleSendRes = (data) => {
  // FILL ME IN
};

const sendMessage = (newMessage, callback) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    success: handleSent,
  });
};

const handleUpdateRes = (data) => {
  // FILL ME IN 
};

const updateMessage = (id, newMessage, callback) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    success: handleUpdateRes,
  });
};

const handleDeletionRes = (data) => {
  // FILL ME IN
};

const deleteMessage = (id, callback) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    success: handleDeletionRes,
  });
};
