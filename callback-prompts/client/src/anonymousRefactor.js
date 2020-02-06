const getAllAnon = (callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    success: (data) => {
      console.log('We received some data! Here:', data);
      callback();
    }
  });
};

const getOneAnon = (id, callback) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: data => {
      console.log(data);
      callback();
    }
  });
};

const sendMessageAnon = (newMessage, callback) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ message: newMessage }),
    success: data => {
      console.log(data);
      callback();
    }
  });
};

const updateMessageAnon = (id, newMessage, callback) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      id: id,
      message: newMessage
    }),
    success: data => {
      console.log(data);
      callback();
    }
  });
};

const deleteMessageAnon = (id, callback) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: data => {
      console.log(data);
      callback();
    }
  });
};
