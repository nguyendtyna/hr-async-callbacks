const $ = require('jquery');

module.exports.startGame = (cb) => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3030/newGame',
        dataType: 'json',
        success: (response) => {
            cb(response);
        },
        error: (err) => { console.log('Something went wrong with your newGame GET Request', err); }
    });
};

module.exports.submitGuess = (letter, cb) => {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3030/submitGuess',
        data: {guess: letter},
        dataType: 'json',
        success: (response) => {
            cb(response);
        },
        error: (err) => { console.log('Something went wrong with your submitGuess POST Request', err); }
    });
};

module.exports.updateScore = (newScore, cb) => {
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3030/updateScore',
        data: {score: newScore},
        dataType: 'json',
        success: (response) => {
            cb(response);
        },
        error: (err) => { console.log('Something went wrong with your updateScore PUT Request', err); }
    });
};

module.exports.restartGame = (cb) => {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3030/restartGame',
        dataType: 'json',
        success: (response) => {
            cb(response);
        },
        error: (err) => { console.log('Something went wrong with your restartGame DELETE Request', err); }
    });
};
