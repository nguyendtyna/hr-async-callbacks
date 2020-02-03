const $ = require('jquery');
const serverURL = 'http://localhost:3000';

const getAll = (callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    success: (data) => {
      console.log(data);
    }
  });
};

const getOne = (id, callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    data: id,
    success: (data) => {
      console.log(data);
    },
  })
}

const sendMessage = (newMessage, callback) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    success: (data) => {
      console.log(data);
    }
  });
};

const updateMessage = (id, newMessage, callback) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    success: (data) => {
      console.log(data);
    }
  });
};

const deleteMessage = (id, callback) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    success: (data) => {
      console.log(data);
    }
  });
};
