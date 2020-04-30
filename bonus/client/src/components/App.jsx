import React, {Component} from 'react';
import $ from 'jquery';
import LetterBoard from './LetterBoard.jsx';
import DunkTank from './DunkTank.jsx';
import controller from '../controllers.js';
import dialog from '../dialog.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerInput: '',
            prevGuesses: [],
            wordStatus: [],
            wrongGuesses: 0,
            currDialog: dialog.gameStart[0]
        };
    };

    componentDidMount() {
        let {wrongGuesses} = this.state;

        controller.startGame((response) => {
            this.setState({...response});
        });

        this.startAnimation();
        this.placeGraphics(wrongGuesses);
        $('.guessing input').focus();
    };

    componentDidUpdate(prevProps, prevState) {
        let {wrongGuesses, wordStatus} = this.state;
        if (prevState.wrongGuesses !== wrongGuesses) {
            this.placeGraphics(wrongGuesses);
            $('.guessing input').focus();
        }
        if (prevState.wordStatus !== wordStatus) {
            $('.guessing input').focus();
        }
    }

    handleInput(event) {
        event.preventDefault();
        let input = event.target.value;
        this.setState({
            playerInput: input
        });
    }

    submitGuess() {
        let {playerInput, prevGuesses} = this.state;
        if (playerInput && !prevGuesses.includes(playerInput)) {
            controller.submitGuess(playerInput, (response) => {
                this.setState({...response, playerInput: ''});
            });
        }
    }

    restartGame() {
        controller.restartGame((response) => {
            this.setState({...response, playerInput: ''}, () => {
                this.resetAnimation();
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

        setTimeout(() => {
            this.setState({
                currDialog: dialog.gameStart[1]
            });
        }, 8000);
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
        let {playerInput, wrongGuesses, currDialog, wordStatus, prevGuesses} = this.state;
        return (
            <div className={'container'}>
                <div className={'player-hub'}>
                    <div className={'guessing'}>
                        <input type={'text'} minLength="1" maxLength="1" onChange={this.handleInput.bind(this)} value={playerInput}/>
                        <button onClick={this.submitGuess.bind(this)} id={'submit-guess'}>Guess a Letter</button>
                        <button onClick={this.restartGame.bind(this)} id={'new-game'}>Start Over</button>
                        <span className={'chances'}>Chances Remaining: {6 - wrongGuesses}</span>
                    </div>
                    <div id={'mermaid'}>
                        <div id={'dialog'}>{currDialog}</div>
                    </div>
                </div>
                <div className={'main-column'}>
                    <LetterBoard wordStatus={wordStatus}/>
                    <DunkTank prevGuesses={prevGuesses}/>
                </div>
            </div>
        );
    }
};
