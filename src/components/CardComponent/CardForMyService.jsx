import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { fetchGetOrder } from '../../redux/actions';

import './Card.css';

import Styled from 'styled-components';

const Img = Styled.div`
width:100%;
height: 200px;
`;
const useStyles = makeStyles({
    root: {
        maxWidth: 270,
    },
    block: {
        display: 'block',
    },
});

export default function CardRiwayatMyServices(props) {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetOrder());
    }, [dispatch]);

    return (
        <Card
            style={{ margin: '40px' }}
            className={classes.root}
            key={props.id}
        >
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
                    <div
                        key={props.key}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: '5em',
                        }}
                    >
                        <Avatar
                            style={{ top: '-5px', marginRight: '5px' }}
                            alt="Remy Sharp"
                            src={props.avatar}
                        />
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'column',
                            }}
                        >
                            <p style={{ fontSize: '14px' }}>
                                <strong>{props.title}</strong>
                            </p>

                            <p
                                style={{
                                    fontSize: '10px',
                                }}
                            >
                                {/* by{' '} */}
                                <span
                                    style={{
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {props.name}
                                </span>
                            </p>
                        </div>
                    </div>
                    <Divider />
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.block}>
                <div
                    style={{
                        margin: '10px 0 0 0',
                    }}
                >
                    <p style={{ textAlign: 'right' }}> IDR {props.price}</p>
                </div>
            </CardActions>
        </Card>
    );
}
