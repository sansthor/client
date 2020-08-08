import React from 'react';
import Styled from 'styled-components';
import CollapseComponents from '../CollapseComponents/CollapseComponents';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/actions';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

const Wraps = Styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 50px;
background-color: white;
@media (max-width: 1000px){
    margin-bottom: 0;
}
`;
const Wrapping = Styled.div`

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
padding:20px;
width:70%;

@media (max-width: 1000px){
    width: 100%;
}
`;
const SectionTwo = Styled.div`
padding: 20px;
width: 30%;

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
font-size: 36px;
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
        <div
            className="hero is-success is-fullheight"
            style={{ color: 'black' }}
        >
            <Wrapping>
                <WrapTittle>
                    <Title>{props.title}</Title>
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
                        <span>
                            <em>{props.name}</em>
                        </span>
                    </div>
                </WrapTittle>
                <Card>
                    <Wraps>
                        <SectionOne>
                            <WrapImage>
                                <img
                                    style={{ width: '100%', height: '100%' }}
                                    src={
                                        props.image !== false ? props.image : ''
                                    }
                                    alt="thumbnail"
                                />
                            </WrapImage>
                            <Description>
                                <p>{props.desc}</p>
                            </Description>
                        </SectionOne>
                        <SectionTwo>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
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
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                {' '}
                                <i
                                    className="fas fa-check"
                                    style={{ margin: '4px 5px  0 0' }}
                                ></i>{' '}
                                <p style={{ marginBottom: '10px' }}>
                                    {props.requirement}
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
                </Card>
                <CollapseComponents />
            </Wrapping>
        </div>
    );
}

export default CardDetailOffer;
