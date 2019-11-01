import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    const cardComponent = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })

    return (
        <div>
            {cardComponent}
            {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} /> */}
        </div>
    );
}

export default CardList;