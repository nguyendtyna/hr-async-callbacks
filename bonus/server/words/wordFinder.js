const dictionary = require('./dictionary.js');

module.exports = () => {
  const wordIndex = Math.floor(Math.random() * dictionary.length);
  return dictionary[wordIndex];
};

