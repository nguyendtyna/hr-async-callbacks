import React, {Component} from 'react';
import $ from 'jquery';
import LetterBoard from './LetterBoard.jsx';
import DunkTank from './DunkTank.jsx';
import controller from '../controllers.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerInput: '',
            prevGuesses: [],
            wordStatus: [],
            wrongGuesses: 0
        };
    };

    componentDidMount() {
        let self = this;
        controller.startGame((response) => {
            self.setState({...response}, () => {
                self.startAnimation();
                self.placeGraphics(self.state.wrongGuesses);
                $('.guessing input').focus();
            });
        });
    };

    handleInput(event) {
        event.preventDefault();
        let input = event.target.value;
        this.setState({
            playerInput: input
        });
    }

    submitGuess() {
        let self = this;
        let currGuess = self.state.playerInput;
        if (!currGuess || self.state.prevGuesses.includes(currGuess)) {
            //display pop-up for duplicate guess or empty string
        } else {
            controller.submitGuess(currGuess, (response) => {
                self.setState({...response, playerInput: ''}, () => {
                    self.placeGraphics(self.state.wrongGuesses);
                    $('.guessing input').focus();
                });
            });
        }
    }

    restartGame() {
        let self = this;
        controller.restartGame((response) => {
            self.setState({...response, playerInput: ''}, () => {
                self.placeGraphics(self.state.wrongGuesses);
                $('.guessing input').focus();
                self.resetAnimation();
            });
        });
    }

    placeGraphics(wrongGuesses) {
        let waterHeight = ['700px', '625px', '550px', '500px', '425px', '375px', '325px'];
        let mermaidHeight = ['475px', '440px', '400px', '370px', '340px', '310px', '290px'];
        let graphic = document.getElementById('ocean-waves');
        let mermaid = document.getElementById('mermaid');
            mermaid.style.top = mermaidHeight[wrongGuesses];
            graphic.style.top = waterHeight[wrongGuesses];
    }

    startAnimation() {
        let self = this;
        $('#ocean-waves').addClass('wave');

        self.x = setInterval(() => {
            $('#mermaid').toggleClass('shimmer');
            $('.covered-letter').toggleClass('shimmer');
        }, 4000);

        self.y = setInterval(() => {
            $('#ocean-waves').toggleClass('wave');
        }, 2000);
    }

    resetAnimation() {
        let self = this;
        clearInterval(self.x);

        $('#mermaid').removeClass('shimmer');
        $('.covered-letter').removeClass('shimmer');

        self.x = setInterval(() => {
            $('#mermaid').toggleClass('shimmer');
            $('.covered-letter').toggleClass('shimmer');
        }, 4000);
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'player-hub'}>
                    <div className={'guessing'}>
                        <input type={'text'} minLength="1" maxLength="1" onChange={this.handleInput.bind(this)} value={this.state.playerInput}/>
                        <button onClick={this.submitGuess.bind(this)} id={'submit-guess'}>Guess a Letter</button>
                        <button onClick={this.restartGame.bind(this)} id={'new-game'}>Start Over</button>
                        <span className={'chances'}>Chances Remaining: {6 - this.state.wrongGuesses}</span>
                    </div>
                    <div id={'mermaid'}/>
                </div>
                <div className={'main-column'}>
                    <LetterBoard wordStatus={this.state.wordStatus}/>
                    <DunkTank prevGuesses={this.state.prevGuesses}/>
                </div>
            </div>
        );
    }
};
