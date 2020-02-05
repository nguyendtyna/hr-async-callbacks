const getAllRF = () => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    success: (data) => {
      console.log('We received some data! Here:', data);
    }
  });
};

const getOneRF = (id) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    data: id,
    success: (data) => {
      console.log(data);
    },
  })
};

const sendMessageRF = (newMessage) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    success: (data) => {
      console.log(data);
    }
  });
};

const updateMessageRF = (id, newMessage) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    success: (data) => {
      console.log(data);
    }
  });
};

const deleteMessageRF = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    success: (data) => {
      console.log(data);
    }
  });
};
