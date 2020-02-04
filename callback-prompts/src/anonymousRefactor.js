const serverURL = 'http://localhost:3000';

const getAll = () => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    success: (data) => {
      console.log('We received some data! Here:', data);
    }
  });
};

const getOne = (id) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    data: id,
    success: (data) => {
      console.log(data);
    },
  })
};

const sendMessage = (newMessage) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    success: (data) => {
      console.log(data);
    }
  });
};

const updateMessage = (id, newMessage) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    success: (data) => {
      console.log(data);
    }
  });
};

const deleteMessage = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    success: (data) => {
      console.log(data);
    }
  });
};
