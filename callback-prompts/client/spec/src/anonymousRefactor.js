const getAllAnon = () => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    success: (data) => {
      console.log('We received some data! Here:', data);
    }
  });
};

const getOneAnon = (id) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    data: id,
    success: (data) => {
      console.log(data);
    },
  })
};

const sendMessageAnon = (newMessage) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    success: (data) => {
      console.log(data);
    }
  });
};

const updateMessageAnon = (id, newMessage) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    success: (data) => {
      console.log(data);
    }
  });
};

const deleteMessageAnon = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    success: (data) => {
      console.log(data);
    }
  });
};
