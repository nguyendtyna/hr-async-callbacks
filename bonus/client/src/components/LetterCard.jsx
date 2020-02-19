import React from 'react';

const LetterCard = (props) => (
    <div className="letter-card">
        {props.letter ? <div className={'correct-guess'}>{props.letter}</div> : <div className={'covered-letter'}/>}
    </div>
);

export default LetterCard;
