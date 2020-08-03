import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap';

const CardComponentsCategories = (props) => {
    return (
        <div>
            <Card>
                <CardImg
                    top
                    width="100%"
                    src={props.image}
                    alt="Card image cap"
                />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardComponentsCategories;
