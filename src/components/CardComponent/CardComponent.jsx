import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

import './Card.css';

import Styled from 'styled-components';

const Img = Styled.div`
width:100%;
height: 200px;
`;
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function CardComponent(props) {
    const classes = useStyles();

    return (
        <Card key={props.key} className={classes.root}>
            <CardActionArea>
                <Img>
                    <CardMedia
                        style={{ height: '100%', width: '100%' }}
                        component="img"
                        alt={props.title}
                        image={props.image}
                        title={props.title}
                    />
                </Img>
                <Divider />
                <CardContent>
                    <h3 className="subtitle" align="center">
                        {props.title}
                    </h3>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
