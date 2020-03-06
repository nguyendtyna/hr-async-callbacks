import React from 'react';

const LetterCard = (props) => {
    let {letter} = props;

    return (
        <div className="letter-card">
            {letter ? <div className={'correct-guess'}>{letter}</div> : <div className={'covered-letter'}/>}
        </div>
    );
};

export default LetterCard;
