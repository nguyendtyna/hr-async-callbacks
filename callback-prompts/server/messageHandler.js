const messageCache = {};
const lruTracker = [];
let messageCount = 0;

setTimeout(() => console.log(messageCache), 100);
setTimeout(() => console.log(messageCache), 600);
setTimeout(() => console.log(messageCache), 1100);
setTimeout(() => console.log(messageCache), 1600);
setTimeout(() => console.log(messageCache), 2000);
setTimeout(() => console.log(lruTracker), 2000);

const addMessage = (message) => {
  if(messageCount === 9) {
    // lru : Least Recently Used
    const lru = lruTracker.shift();
    messageCache[lru] = message;
    lruTracker.push(lru);
  } else {
    messageCache[messageCount] = message;
    lruTracker.push(messageCount);
    messageCount++;
  }
};

const getMessage = (id) => {
  if(messageCache[id]) {
    lruTracker.forEach((lruId, index) => {
      if(id === lruId) {
        const accesssed = lruTracker.splice(index, 1);
        lruTracker.push(accesssed);
        return messageCache[id];
      }
    });
  } else {
    return new Error('Invalid ID given.');
  }
};

const updateMessage = (id, newMessage) => {
  if(messageCache[id]) {
    messageCache[id] = newMessage;
  } else {
    return new Error('Invalid ID given.');
  }
};

const deleteMessage = (id) => {
  if(messageCache[id]) {
    messageCache.splice(id, 1);
    return `Message with ID ${id} deleted.`;
  } else {
    return new Error('Invalid ID given.');
  }
};

module.exports = {
  addMessage: addMessage.bind(this),
  getMessage: getMessage.bind(this),
  updateMessage: updateMessage.bind(this),
  deleteMessage: deleteMessage.bind(this),
};
