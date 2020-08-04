import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
        <Card className={classes.root}>
            <CardActionArea>
                <Img>
                    <CardMedia
                        style={{ height: '100%', width: '100%' }}
                        component="img"
                        alt="Contemplative Reptile"
                        image={props.image}
                        title="Contemplative Reptile"
                    />
                </Img>
                <Divider />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
