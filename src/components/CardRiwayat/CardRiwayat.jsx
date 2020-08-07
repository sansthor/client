import React, { useEffect } from 'react';
// import CardComponentsCategories from '../CardComponent/CardComponentsCategories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetOrder } from '../../redux/actions';
import CardRiwayatMyServices from '../CardComponent/CardRiwayatMyServices';

function CardRiwayat() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.getorder);

    useEffect(() => {
        dispatch(fetchGetOrder());
    }, [dispatch]);

    return (
        <React.Fragment>
            {order !== undefined &&
                (order.length === 0 ? (
                    <p>Kosong</p>
                ) : (
                    order.length > 0 &&
                    order.map((item) => {
                        return (
                            <React.Fragment key={item._id}>
                                <CardRiwayatMyServices
                                    image={item.serviceID.image}
                                    title={item.serviceID.title}
                                    name={item.talentID.username}
                                    avatar={item.userID.avatar}
                                    id={item._id}
                                    price={item.total}
                                />
                            </React.Fragment>
                        );
                    })
                ))}
        </React.Fragment>
    );
}

export default CardRiwayat;
