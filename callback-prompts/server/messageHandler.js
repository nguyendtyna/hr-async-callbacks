const messageCache = {
  0: 'Hey,-you-found-me!',
  1: 'Oh-no!-It-seems-that-the-message-cache-weirdly-manipulates-data.',
};

const lruTracker = [0, 1];
let messageCount = 2;

const getMessage = (id, callback) => {
  if(messageCache[id]) {
    lruTracker.forEach((lruId, index) => {
      if(id == lruId) {
        const accesssed = lruTracker.splice(index, 1);
        lruTracker.push(accesssed);
        callback(null, messageCache[id]);
        return;
      }
    });
  } else {
    callback(
      new Error(
        `Invalid ID of ${id} given, or current ID does not contain a message.`
      ),
      null
    );
  }
};

const getAllMessages = (callback) => {
  if(lruTracker.length === 0) {
    callback(new Error('The cache is currently empty.'), null);
  } else {
    const messages = [];
    for(let i = 0; i < messageCount; i++) {
      messages.push(messageCache[i]);
    }
    callback(null, messages);
  }
};

const addMessage = (message, callback) => {
  if(typeof message !== 'string') {
    callback(new Error(`Input type invalid, received ${message} of type ${typeof message} when expecting input of type 'string'.`), null);
  } else {
    let newId;
    if(messageCount === 10) {
      // LRU : Least Recently Used
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

const updateMessage = (id, newMessage, callback) => {
  if(typeof message !== 'string') {
    callback(new Error(`Input type invalid, received ${message} of type ${typeof message} when expecting typeof 'string'.`), null);
  } else {
    if(messageCache[id]) {
      messageCache[id] = newMessage;
      callback(null, `Message ${id} successfully updated.`);
    } else {
    callback(
      new Error(
        `Invalid ID of ${id} given, or current ID does not contain a message.`
      ),
      null
    );
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
    delete message[id];
    callback(null, `Message with ID ${id} deleted.`);
  } else {
    callback(
      new Error(
        `Invalid ID of ${id} given, or current ID does not contain a message.`
      ),
      null
    );
  }
};

module.exports = {
  getMessage: getMessage.bind(this),
  getAllMessages: getAllMessages.bind(this),
  addMessage: addMessage.bind(this),
  updateMessage: updateMessage.bind(this),
  deleteMessage: deleteMessage.bind(this),
};

// addMessage('Hi, is this working?', (err, data) => {
//   if(err) console.log(err);
//   else console.log(data);
// });

// addMessage(3, (err, data) => {
//   if(err) console.log(err);
//   else console.log(data);
// });

// getMessage(2, (err, data) => {
//   if(err) console.log(err);
//   else console.log(data);
// });
