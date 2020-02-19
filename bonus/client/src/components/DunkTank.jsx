import React from 'react';
import LetterCard from './LetterCard.jsx';

const DunkTank = (props) => (
    <div className={'dunk-status'}>
        <span className={'status-label'}>Previous Guesses:</span>
        <div className={'previous-guesses'}>
            {props.prevGuesses.map((e, key) => {
                return (
                    <div className={'letter'} key={key}>
                        <LetterCard letter={e}/>
                    </div>
                );
            })}
        </div>
        <div className={'dunk-tank'}></div>
    </div>
);

export default DunkTank;
