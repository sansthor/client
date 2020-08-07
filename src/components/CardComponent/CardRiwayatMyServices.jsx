import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

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
});

export default function CardRiwayatMyServices(props) {
    const classes = useStyles();

    return (
        <Card style={{ margin: '40px' }} className={classes.root}>
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
                    <div
                        style={{
                            margin: '10px 0 0 0',
                        }}
                    >
                        <p style={{ textAlign: 'right' }}> IDR {props.price}</p>
                        <div className="buttons is-right">
                            <button
                                className="button is-link is-rounded"
                                style={{ marginTop: '1em', width: '100%' }}
                            >
                                Tandai Selesai
                            </button>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
