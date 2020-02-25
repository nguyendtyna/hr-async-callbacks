const getWord = require('./words/wordFinder');

let gameState = {
    currWord: '',
    wordArr: [],
    wordLen: 0,
    wordStatus: [],
    wrongGuesses: 0,
    prevGuesses: []
};

const startGame = ( gameState ) => {
    gameState.currWord = getWord();
    gameState.wordArr = gameState.currWord.toLowerCase().split('');
    gameState.wordLen = gameState.wordArr.length;
    gameState.wordStatus = new Array(gameState.wordLen).fill(false);
    gameState.wrongGuesses = 0;
    gameState.prevGuesses = [];
    return gameState;
};

const restartGame = ( gameState ) => {
    gameState.currWord = getWord();
    gameState.wordArr = gameState.currWord.toLowerCase().split('');
    gameState.wordLen = gameState.wordArr.length;
    gameState.wordStatus = new Array(gameState.wordLen).fill(false);
    gameState.wrongGuesses = 0;
    gameState.prevGuesses = [];
    return gameState;
};

const checkGuess = ( letter, gameState ) => {
    if(gameState.currWord.includes( letter )){
        for(let i = 0; i < gameState.currWord.length; i++){
            if(gameState.currWord[i] === letter){
                gameState.wordStatus[i] = letter;
            }
        }
    } else {
        gameState.wrongGuesses += 1;
    }
    gameState.prevGuesses.push(letter);
    return gameState;
};

module.exports = { gameState, checkGuess, startGame, restartGame };

