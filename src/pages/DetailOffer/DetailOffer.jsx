import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardDetailOffer from '../../components/CardDetailOffer/CardDetailOffer';
import { fetchGetServiceById } from '../../redux/actions';
import { useParams } from 'react-router-dom';
function DetailOffer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const service = useSelector((state) => state.getservicebyid);
    console.log(service, 'add revision');
    useEffect(() => {
        dispatch(fetchGetServiceById(id));
    }, [dispatch, id]);
    return (
        <div>
            <CardDetailOffer
                id={service.data !== undefined && service.data._id}
                title={service.data !== undefined && service.data.title}
                name={
                    service.data !== undefined && service.data.userID.fullname
                }
                image={service.data !== undefined && service.data.image}
                desc={service.data !== undefined && service.data.desc}
                price={service.data !== undefined && service.data.price}
                avatar={
                    service.data !== undefined && service.data.userID.avatar
                }
                revision={service.data !== undefined && service.data.revision}
                processtime={
                    service.data !== undefined && service.data.processtime
                }
                requirement={
                    service.data !== undefined && service.data.requirement
                }
            />
        </div>
    );
}

export default DetailOffer;
