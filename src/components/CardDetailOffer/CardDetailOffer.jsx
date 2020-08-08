import React from 'react';
import Styled from 'styled-components';
import CollapseComponents from '../CollapseComponents/CollapseComponents';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/actions';
import Avatar from '@material-ui/core/Avatar';

const Wraps = Styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 50px;
@media (max-width: 1000px){
    margin-bottom: 0;
}
`;
const Wrapping = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
flex-wrap: wrap;
flex-direction: column;
padding: 50px;
margin: 100px;
@media (max-width: 1000px) {
    padding: 0;
    margin:30px;
    border-radius: 15px;
    
}
`;
const SectionOne = Styled.div`
width:70%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
@media (max-width: 1000px){
    width: 100%;
}
`;
const SectionTwo = Styled.div`
width: 30%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
flex-direction: column;
padding: 40px;
@media (max-width: 1000px){
    width: 100%;
}
`;
const WrapImage = Styled.div`
width: 100%;
`;
// const Input = Styled.input`
// margin-right: 5px;
// `;
// const Label = Styled.label`
// margin-bottom: 10px;
// `;
const Description = Styled.div`
padding: 30px 20px 30px 20px;
`;
const Title = Styled.h1`
padding: 5px;


`;

const WrapTittle = Styled.div`
margin: 10px 0;
@media (max-width: 1000px){
    padding-left: 10px;
}
`;
function CardDetailOffer(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const member = useSelector((state) => state.getmember);
    const service = useSelector((state) => state.getservicebyid.data);

    const handleClick = (id) => {
        dispatch(
            addCart(
                {
                    userID: member._id,
                    talentID: service.userID._id,
                    status: 'CART',
                    quantity: 1,
                    total: service.price,
                    talentStatus: 'CART',
                    userStatus: 'CART',
                    serviceID: id,
                },
                history
            )
        );
    };

    return (
        <div>
            <Wrapping>
                <WrapTittle>
                    <Title>
                        <strong>{props.title}</strong>
                    </Title>
                    <div
                        style={{
                            display: 'flex',

                            paddingBottom: '10px',
                        }}
                    >
                        <Avatar
                            style={{ top: '-5px', marginRight: '5px' }}
                            alt="avatar"
                            src={props.avatar}
                        />
                        <Title as="span">
                            <em>{props.name}</em>
                        </Title>
                    </div>
                </WrapTittle>
                <Wraps>
                    <SectionOne>
                        <WrapImage>
                            <img
                                style={{ width: '100%', height: '100%' }}
                                src={props.image !== false ? props.image : ''}
                                alt="thumbnail"
                            />
                        </WrapImage>
                        <Description>
                            <p>{props.desc}</p>
                        </Description>
                    </SectionOne>
                    <SectionTwo>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {' '}
                            <i
                                className="fas fa-check"
                                style={{ margin: '4px 5px  0 0' }}
                            ></i>{' '}
                            <p style={{ marginBottom: '10px' }}>
                                {' '}
                                Revision{' '}
                                {props.revision !== undefined
                                    ? props.revision
                                    : '1 '}{' '}
                                Times
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {' '}
                            <i
                                className="fas fa-check"
                                style={{ margin: '4px 5px  0 0' }}
                            ></i>{' '}
                            <p style={{ marginBottom: '10px' }}>
                                Commercial Use
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginBottom: '10px',
                            }}
                        >
                            {' '}
                            <i
                                className="far fa-clock"
                                style={{ margin: '4px 5px  0 0' }}
                            ></i>{' '}
                            <p>
                                {props.processtime !== undefined
                                    ? props.processtime
                                    : '5 hari'}
                            </p>
                        </div>

                        <button
                            onClick={() => handleClick(props.id)}
                            className="button is-link "
                        >
                            Buy Now ${props.price}
                        </button>
                    </SectionTwo>
                </Wraps>
                <CollapseComponents />
            </Wrapping>
        </div>
    );
}

export default CardDetailOffer;
