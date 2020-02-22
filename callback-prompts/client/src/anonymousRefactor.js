/*
* Refactor the calls from the previous step so that the success callbacks are internal and anonymous.
*/

const getAllAnon = (callback) => {
  $.ajax({
    type: 'GET',
    url: `http://127.0.0.1:3000/getAll`,
    success: (data) => {
      const messages = JSON.parse(data);
      callback(messages);
    },
    error: errorLogger,
  });
};

const getOneAnon = (id, callback) => {
  $.ajax({
    type: 'GET',
    url: `http://127.0.0.1:3000/getOne`,
    contentType: 'application/json',
    data: { id },
    success: (data) => {
      const message = JSON.parse(data).data;
      callback(message);
    },
    error: errorLogger,
  });
};

const sendMessageAnon = (newMessage, callback) => {
  $.ajax({
    type: 'POST',
    url: `http://127.0.0.1:3000/send`,
    contentType: 'application/json',
    data: {
      message: newMessage,
    },
    success: (data) => {
      const newID = JSON.parse(data).data.id;
      callback(newID);
    },
    error: errorLogger,
  });
};

const updateMessageAnon = (id, newMessage, callback) => {
  $.ajax({
    type: 'PUT',
    url: `http://127.0.0.1:3000/change`,
    contentType: 'application/json',
    data: {
      id,
      message: newMessage
    },
    success: (data) => {
      const successMessage = JSON.parse(data).data.success;
      callback(successMessage);
    },
    error: errorLogger,
  });
};

const deleteMessageAnon = (id, callback) => {
  $.ajax({
    type: 'DELETE',
    url: `http://127.0.0.1:3000/remove`,
    contentType: 'application/json',
    data: { id },
    success: (data) => {
      const successMessage = JSON.parse(data).data.success;
      callback(successMessage);
    },
    error: errorLogger,
  });
};
