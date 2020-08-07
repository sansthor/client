import React, { useEffect } from 'react';
import CardComponentsCategories from '../CardComponent/CardComponentsCategories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetOrder } from '../../redux/actions';

function CardRiwayat() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.getorder);

    useEffect(() => {
        dispatch(fetchGetOrder());
    }, [dispatch]);

    console.log(order);
    return (
        <React.Fragment>
            {order !== undefined &&
                (order.length === 0 ? (
                    <p>Kosong</p>
                ) : (
                    order.length > 0 &&
                    order.map((item) => {
                        console.log(item, 'kk');
                        return (
                            <div className="notification">
                                <CardComponentsCategories
                                    image={item.serviceID.image}
                                    title={item.serviceID.title}
                                    name={item.userID.username}
                                    avatar={item.userID.avatar}
                                    key={item._id}
                                    price={item.total}
                                />
                                <div className="buttons is-right">
                                    <button
                                        className="button is-link is-rounded"
                                        style={{ marginTop: '1em' }}
                                    >
                                        Tandai Selesai
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ))}
        </React.Fragment>
    );
}

export default CardRiwayat;
