import React from 'react';
import LetterCard from './LetterCard.jsx';

const LetterBoard = (props) => (
    <div className="letterboard">
        {props.wordStatus.map((e, key) => {
            return (
                <LetterCard letter={e} key={key}/>
            );
        })}
    </div>
);

export default LetterBoard;
