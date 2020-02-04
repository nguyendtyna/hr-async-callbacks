const $ = '../spec/lib/jquery.js';
const serverURL = 'http://localhost:3000';

const handleAllRes = (data) => {
  console.log('We received some data! Here:', data);
};

const getAll = () => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getAll`,
    contentType: 'application/json',
    success: handleAllRes
  });
};

const handleOneRes = (data) => {
  // FILL ME IN 
};

const getOne = (id) => {
  $.ajax({
    type: 'GET',
    url: `${serverURL}/getOne`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: handleOneRes,
  });
};

const handleSendRes = (data) => {
  // FILL ME IN
};

const sendMessage = (newMessage) => {
  $.ajax({
    type: 'POST',
    url: `${serverURL}/send`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ message: newMessage }),
    success: handleSent,
  });
};

const handleUpdateRes = (data) => {
  // FILL ME IN 
};

const updateMessage = (id, newMessage) => {
  $.ajax({
    type: 'PUT',
    url: `${serverURL}/change`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      id: id,
      message: newMessage
    }),
    success: handleUpdateRes
  });
};

const handleDeletionRes = (data) => {
  // FILL ME IN
};

const deleteMessage = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `${serverURL}/remove`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ id: id }),
    success: handleDeletionRes
  });
};
