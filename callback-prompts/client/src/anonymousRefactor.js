const getAllAnon = (callback) => {
  $.ajax({
    type: 'GET',
    url: `http://127.0.0.1:3000/getAll`,
    success: (data) => {
      console.log('We received some data! Here:', data);
      const messages = JSON.parse(data);
      callback(messages);
    }
  });
};

const getOneAnon = (id, callback) => {
  $.ajax({
    type: 'GET',
    url: `http://127.0.0.1:3000/getOne`,
    contentType: 'application/json',
    data: { id },
    success: (data) => {
      const message = data;
      callback(message);
    }
  });
};

const sendMessageAnon = (newMessage, callback) => {
  $.ajax({
    type: 'POST',
    url: `http://127.0.0.1:3000/send`,
    contentType: 'application/json',
    data: {
      "message": newMessage,
    },
    success: (data) => {
      const newID = JSON.parse(data).id;
      callback(newID);
    }
  });
};

const updateMessageAnon = (id, newMessage, callback) => {
  $.ajax({
    type: 'PUT',
    url: `http://127.0.0.1:3000/change`,
    contentType: 'application/json',
    data: JSON.stringify({
      id: id,
      message: newMessage
    }),
    success: (data) => {
      const successMessage = JSON.parse(data).success;
      callback(successMessage);
    }
  });
};

const deleteMessageAnon = (id, callback) => {
  $.ajax({
    type: 'DELETE',
    url: `http://127.0.0.1:3000/remove`,
    contentType: 'application/json',
    data: JSON.stringify({ id: id }),
    success: (data) => {
      const successMessage = JSON.parse(data).success;
      callback(successMessage);
    }
  });
};
