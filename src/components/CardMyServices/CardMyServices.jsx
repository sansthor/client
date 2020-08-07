import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetServiceTalent } from '../../redux/actions';
import CardRiwayatMyServices from '../CardComponent/CardRiwayatMyServices';

function CardMyServices() {
    const dispatch = useDispatch();
    const service = useSelector((state) => state.getservicetalent);

    useEffect(() => {
        dispatch(fetchGetServiceTalent());
    }, [dispatch]);

    return (
        <React.Fragment>
            {service.data !== undefined &&
                (service.data.length === 0 ? (
                    <p>Kosong</p>
                ) : (
                    service.data.length > 0 &&
                    service.data.map((item) => {
                        return (
                            <React.Fragment key={item._id}>
                                <CardRiwayatMyServices
                                    image={item.image}
                                    title={item.title}
                                    name={item.userID.username}
                                    avatar={item.userID.avatar}
                                    id={item._id}
                                    price={item.price}
                                />
                            </React.Fragment>
                        );
                    })
                ))}
        </React.Fragment>
    );
}

export default CardMyServices;
