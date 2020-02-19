import React, {Component} from 'react';
import $ from 'jquery';
import LetterBoard from './LetterBoard.jsx';
import DunkTank from './DunkTank.jsx';

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
        $.get('http://localhost:3030/getWord')
            .then(data => {
                console.log(JSON.parse(data));
                let gameState = JSON.parse(data);
                self.setState({
                    wordLen: gameState.wordLen,
                    wordStatus: gameState.wordStatus,
                    prevGuesses: gameState.prevGuesses,
                    wrongGuesses: gameState.wrongGuesses
                }, () => {
                    $('#ocean-waves').addClass('wave');
                });
            })
            .catch( err => console.log(err)); //courtesy of Jordan Worm

        let x = setInterval( () => {
            $('#mermaid').toggleClass('shimmer');
            $('.covered-letter').toggleClass('shimmer');
        }, 4000);

        let y = setInterval( () => {
            $('#ocean-waves').toggleClass('wave');
        }, 2000);
    };

    handleInput(event) {
        event.preventDefault();
        let input = event.target.value;
        this.setState({
            playerInput: input
        });
    }

    placeGraphics(wrongGuesses){
        let waterHeight = ['700px', '625px', '550px', '500px', '425px', '375px', '325px'];
        let mermaidHeight = ['475px', '440px', '400px', '370px', '340px', '310px', '290px'];
        let graphic = document.getElementById('ocean-waves');
        let mermaid = document.getElementById('mermaid');
        mermaid.style.top = mermaidHeight[wrongGuesses];
        graphic.style.top = waterHeight[wrongGuesses];
    }

    submitGuess() {
        let currGuess = this.state.playerInput;
        if (!currGuess || this.state.prevGuesses.includes(currGuess)) {
            //display pop-up for duplicate guess or empty string
        } else {
            let self = this;
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3030/makeGuess',
                data: {guess: currGuess},
                dataType: 'json',
                success: (response) => {
                    self.setState({...response, playerInput: ''}, () => {
                        self.placeGraphics(self.state.wrongGuesses);
                        $('.guessing input').focus();
                    });
                },
                error: (err) => { console.log('Something went wrong with your submitGuess POST Request', err); }
            });
        }
    }

    newGame(){
        let self = this;
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3030/newGame',
            dataType: 'json',
            success: (response) => {
                self.setState({...response, playerInput: ''}, () => {
                    self.placeGraphics(self.state.wrongGuesses);
                });
            },
            error: (err) => { console.log('Something went wrong with your newGame DELETE Request', err); }
        });
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'player-hub'}>
                    <div className={'guessing'}>
                        <input type={'text'} minLength="1" maxLength="1" onChange={this.handleInput.bind(this)} value={this.state.playerInput}/>
                        <button onClick={this.submitGuess.bind(this)} id={'submit-guess'}>Guess a Letter</button>
                        <button onClick={this.newGame.bind(this)} id={'new-game'}>Start Over</button>
                        <span className={'chances'}>Chances Remaining: { 6 - this.state.wrongGuesses }</span>
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
