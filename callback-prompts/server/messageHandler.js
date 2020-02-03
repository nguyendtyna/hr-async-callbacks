const messageCache = {
  0: 'Hey,-you-found-me!',
  1: 'Oh-no!-It-seems-that-the-message-cache-weirdly-manipulates-messages.',
};

const lruTracker = [];
let messageCount = 2;

const addMessage = (message, callback) => {
  if(typeof message !== 'string') {
    callback(new Error(`Input type invalid, received ${message} of type ${typeof message} when expecting typeof 'string'.`), null);
  } else {
    let newId;
    if(messageCount === 10) {
      // lru : Least Recently Used
      const lru = lruTracker.shift();
      messageCache[lru] = message.split(' ').join('-');
      lruTracker.push(lru);
      newId = lru;
    } else {
      messageCache[messageCount] = message.split(' ').join('-');
      lruTracker.push(messageCount);
      newId = messageCount;
      messageCount++;
    }
    callback(null, newId);
  }
};

const getMessage = (id, callback) => {
  if(messageCache[id]) {
    lruTracker.forEach((lruId, index) => {
      if(id === lruId) {
        const accesssed = lruTracker.splice(index, 1);
        lruTracker.push(accesssed);
        callback(null, messageCache[id]);
      }
    });
  } else {
    callback(new Error(`Invalid ID of ${id} given, or cache at current ID does not contain a message.`), null);
  }
};

const updateMessage = (id, newMessage, callback) => {
  if(typeof message !== 'string') {
    callback(new Error(`Input type invalid, received ${message} of type ${typeof message} when expecting typeof 'string'.`), null);
  } else {
    if(messageCache[id]) {
      messageCache[id] = newMessage;
      callback(null, `Message ${id} successfully updated.`);
    } else {
      callback(new Error(`Invalid ID of ${id} given, or cache at current ID does not contain a message.`), null);
    }
  }
};

const deleteMessage = (id, callback) => {
  if(messageCache[id]) {
    lruTracker.forEach((item, index) => {
      if(item == id) {
        lruTracker.splice(index, 1);
        lruTracker.push()
        return;
      }
    });
    messageCache[id] = null;
    callback(null, `Message with ID ${id} deleted.`);
  } else {
    callback(new Error(`Invalid ID of ${id} given, or cache at current ID does not contain a message.`), null);
  }
};

module.exports = {
  addMessage: addMessage.bind(this),
  getMessage: getMessage.bind(this),
  updateMessage: updateMessage.bind(this),
  deleteMessage: deleteMessage.bind(this),
};

addMessage('Hi, is this working?', (err, data) => {
  if(err) throw err;
  else console.log(data);
});
getMessage(2, (err, data) => {
  if(err) throw err;
  else console.log(data);
});
