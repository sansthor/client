import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetServiceTalent } from '../../redux/actions';
import CardRiwayatMyServices from '../CardComponent/CardRiwayatMyServices';

function CardMyServices() {
    const dispatch = useDispatch();
    const service = useSelector((state) => state.getservicetalent);
    console.log(service);

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
                        console.log(item, 'kk');
                        return (
                            <CardRiwayatMyServices
                                image={item.image}
                                title={item.title}
                                name={item.userID.username}
                                avatar={item.userID.avatar}
                                key={item._id}
                                price={item.price}
                            />
                        );
                    })
                ))}
        </React.Fragment>
    );
}

export default CardMyServices;
