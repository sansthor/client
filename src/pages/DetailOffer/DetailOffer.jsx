import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardDetailOffer from '../../components/CardDetailOffer/CardDetailOffer';
import { fetchGetServiceById } from '../../redux/actions';
import { useParams } from 'react-router-dom';
function DetailOffer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const service = useSelector((state) => state.getservicebyid);

    useEffect(() => {
        dispatch(fetchGetServiceById(id));
    }, [dispatch, id]);
    return (
        <div style={{ backgroundColor: '#f2f6fa' }}>
            {service.data !== undefined && (
                <CardDetailOffer
                    id={service.data._id}
                    title={service.data.title}
                    name={service.data.userID.fullname}
                    image={service.data.image}
                    desc={service.data.desc}
                    price={service.data.price}
                    avatar={service.data.userID.avatar}
                    revision={service.data.revision}
                    processtime={service.data.processtime}
                    requirement={service.data.requirement}
                />
            )}
        </div>
    );
}

export default DetailOffer;
