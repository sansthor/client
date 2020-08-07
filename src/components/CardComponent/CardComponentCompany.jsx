import React from 'react';

import './Card.css';

function CardComponentCompany(props) {
    return (
        <div style={{ width: '200px' }}>
            <img alt="company" src={props.image} style={{ width: '100%' }} />
        </div>
    );
}

export default CardComponentCompany;
