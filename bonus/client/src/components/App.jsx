import React, { Component } from 'react';
import { getWord, sendGuess, retrieveScore } from '../controllers.js';
import LetterBoard from './LetterBoard.jsx';
import DunkTank from './DunkTank.jsx';

const serverURL = 'http://localhost:3030';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      currentWord: null,
      wrongGuesses: null,
      chars: null,
      charCover: null,
      score: null,
    }
  };

  componentDidMount() {
    const handleWord = (word) => {
      const chars = word.split('');
      const charCover = chars.slice().map(c => false);

      this.setState({
        currentWord: word,
        chars,
        charCover,
      });
    };

    getWord(handleWord.bind(this));
  };

  letterChange(letter) {
    this.setState({
      input: letter,
    });
  };

  guessLetter(letter) {
    const handleGuess = (isCorrect, guessed) => {
      if(isCorrect) {
        const { chars, charCover } = this.state;

        chars.map((char, index) => {
          if(char === guessed) charCover[index] = true;
        });

        this.setState({
          charCover,
        });
      } else {
        this.setState({
          wrongGuesses: wrongGuesses + 1,
        });
      }
    };

    sendGuess(letter, handleGuess.bind(this));
  };

  getNewWord() {
    const replaceNew = (word) => {
      const chars = word.split('');
      const charCover = chars.slice().map(c => false);

      this.setState({
        currentWord: word,
        wrongGuesses: 0,
        chars,
        charCover,
      });
    };

    getWord(replaceNew.bind(this));
  };

  checkScore() {
    const changeScore = (score) => {
      this.setState({
        score,
      })
    };

    retrieveScore(changeScore.bind(this));
  };

  render() {
    const { chars, charCover, wrongGuesses, input } = this.state;

    return (
      <>
        <h1>
          Welcome to the Dunk Tank!
        </h1>
        <LetterBoard chars={chars} cover={charCover} />
        <div>
        <input
          type="text"
          value={input} 
          maxLength={1}
          onChange={(event) => {
            const letter = event.target.value;
            if(letter.match(/w+/)) {
              this.letterChange(event.target.value);
            }
          }}
          onKeyDown={(event) => {
            console.log(event.key);
          }}
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Guess!
        </button>
        </div>
        <DunkTank wrongGuesses={wrongGuesses} />
      </>
    )
  }
};
