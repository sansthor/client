import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetOrder, fetchOrderPurchase } from '../../redux/actions';
import { useHistory } from 'react-router-dom';
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

    const history = useHistory();
    const dispatch = useDispatch();
    const order = useSelector((state) => state.getorder);
    console.log(order, 'id order');
    useEffect(() => {
        dispatch(fetchGetOrder());
    }, [dispatch]);

    const handleClick = (id) => {
        dispatch(fetchOrderPurchase(id, history));
    };
    return (
        <React.Fragment>
            {order !== undefined &&
                (order.length === 0 ? (
                    <p>Kosong</p>
                ) : (
                    order.length > 0 &&
                    order.map((item) => {
                        return (
                            <React.Fragment>
                                <Card
                                    style={{ margin: '40px' }}
                                    className={classes.root}
                                    key={item._id}
                                >
                                    <CardActionArea>
                                        <Img>
                                            <CardMedia
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                }}
                                                component="img"
                                                alt={item.serviceID.title}
                                                image={item.serviceID.image}
                                                title={item.serviceID.title}
                                            />
                                        </Img>
                                        <Divider />
                                        <CardContent>
                                            <div
                                                key={props.key}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    height: '5rem',
                                                }}
                                            >
                                                <Avatar
                                                    style={{
                                                        top: '-5px',
                                                        marginRight: '5px',
                                                    }}
                                                    alt="Remy Sharp"
                                                    src={item.userID.avatar}
                                                />
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                    }}
                                                >
                                                    <div>
                                                        <p
                                                            style={{
                                                                fontSize:
                                                                    '14px',
                                                            }}
                                                        >
                                                            <strong>
                                                                {
                                                                    item
                                                                        .serviceID
                                                                        .title
                                                                }
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p
                                                            style={{
                                                                fontSize:
                                                                    '10px',
                                                            }}
                                                        >
                                                            {
                                                                item.talentID
                                                                    .username
                                                            }
                                                        </p>
                                                    </div>
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
                                            {' '}
                                            <div className="buttons is-right">
                                                <p
                                                    style={{
                                                        textAlign: 'right',
                                                        marginBottom: '0px',
                                                    }}
                                                >
                                                    {' '}
                                                    IDR {item.total}
                                                </p>
                                                {item.userStatus ===
                                                'DONE' ? null : (
                                                    <button
                                                        onClick={() =>
                                                            handleClick(
                                                                item._id
                                                            )
                                                        }
                                                        className="button is-link is-rounded"
                                                        style={{
                                                            marginTop: '1em',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        Tandai Selesai
                                                    </button>
                                                )}
                                            </div>{' '}
                                        </div>
                                    </CardActions>
                                </Card>
                            </React.Fragment>
                        );
                    })
                ))}
        </React.Fragment>
    );
}
