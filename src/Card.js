import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 ma2 bw2 grow shadow-5 tc">
            <img src={`https://robohash.org/${props.id}?200x200`} alt=""/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;