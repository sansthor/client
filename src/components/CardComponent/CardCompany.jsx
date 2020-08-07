import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardComponentCompany from './CardComponentCompany';

import './Card.css';

function CardCompany() {
    return (
        <div
            style={{
                padding: '50px',
            }}
        >
            <h1 className="title" align="center">
                Collaboration With
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',

                    justifyContent: 'space-around',
                }}
            >
                <CardComponentCompany image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsqlmKOfHVa-xDrh6nsiUgUBoU83UH_NSq-Q&usqp=CAU" />
                <CardComponentCompany image="https://image.freepik.com/free-vector/security-company-logo-template_1061-106.jpg" />
                <CardComponentCompany image="https://image.freepik.com/free-vector/security-company-logo-template_1061-65.jpg" />
                <CardComponentCompany image="https://image.freepik.com/free-vector/technology-company-logo-template_1061-20.jpg" />
                <CardComponentCompany image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsqlmKOfHVa-xDrh6nsiUgUBoU83UH_NSq-Q&usqp=CAU" />
            </div>
        </div>
    );
}

export default CardCompany;
