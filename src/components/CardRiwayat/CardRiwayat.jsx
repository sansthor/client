import React, { useEffect } from 'react';
import CardComponentsCategories from '../CardComponent/CardComponentsCategories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetServiceTalent } from '../../redux/actions';
function CardRiwayat() {
    const dispatch = useDispatch();
    const service = useSelector((state) => state.getservicetalent);
    console.log(service, 'di my service');
    useEffect(() => {
        dispatch(fetchGetServiceTalent());
    }, [dispatch]);
    return (
        <React.Fragment>
            {service.data !== undefined &&
                service.data.map((item) => {
                    return (
                        <div className="notification">
                            <CardComponentsCategories
                                image={item.image}
                                title={item.title}
                                name={item.userID.username}
                                avatar={item.userID.avatar}
                                key={item._id}
                                price={item.price}
                            />
                            <div class="buttons is-right">
                                <button
                                    class="button is-link is-rounded"
                                    style={{ marginTop: '1em' }}
                                >
                                    Tandai Selesai
                                </button>
                            </div>
                        </div>
                    );
                })}
        </React.Fragment>
    );
}

export default CardRiwayat;
