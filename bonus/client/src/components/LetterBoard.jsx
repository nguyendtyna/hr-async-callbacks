import React from 'react';
import LetterCard from './LetterCard.jsx';

const LetterBoard = (props) => {
    let {wordStatus} = props;

    return (
        <div className="letterboard">
            {wordStatus.map((e, key) => {
                return (
                    <LetterCard letter={e} key={key}/>
                );
            })}
        </div>
    );
};

export default LetterBoard;
