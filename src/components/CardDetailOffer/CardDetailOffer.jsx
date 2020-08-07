import React from 'react';
import Styled from 'styled-components';
import CollapseComponents from '../CollapseComponents/CollapseComponents';
import { useHistory } from 'react-router-dom';
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
const Input = Styled.input`
margin-right: 5px;
`;
const Label = Styled.label`
margin-bottom: 10px;
`;
const Description = Styled.div`
padding: 30px 20px 30px 20px;
`;
const Title = Styled.h1`
padding: 5px;


`;
const Avatar = Styled.img`
width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const WrapTittle = Styled.div`
margin: 10px 0;
@media (max-width: 1000px){
    padding-left: 10px;
}
`;
function CardDetailOffer(props) {
    const history = useHistory();
    const handleClick = () => {
        history.push('/payment');
    };
    return (
        <div key={props.key}>
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
                            src="https://i.pinimg.com/236x/b1/9c/d0/b19cd01bf5d4cb88240d7a50d21cff33.jpg"
                            alt="avatar"
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
                                src={props.image}
                                alt="thumbnail"
                            />
                        </WrapImage>
                        <Description>
                            <p>{props.desc}</p>
                        </Description>
                    </SectionOne>
                    <SectionTwo>
                        <Label className="checkbox">
                            <Input type="checkbox" checked />
                            Revision 12 Times
                        </Label>
                        <Label className="checkbox">
                            <Input type="checkbox" checked />
                            Commercial Use
                        </Label>
                        <Label className="checkbox">
                            <Input type="checkbox" checked />5 Hours Of Works
                        </Label>
                        <button
                            onClick={handleClick}
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
