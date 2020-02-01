const dictionary = require('./dictionary.js');

module.exports.getWord = () => {
  const wordIndex = ~~(Math.random() * dictionary.length);
  return dictionary[wordIndex];
};
