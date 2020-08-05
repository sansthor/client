import React from 'react';
import Styled from 'styled-components';

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
    margin:30px 15px 30px 30px;
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

`;
const Input = Styled.input`
margin-right: 5px;
`;
const Label = Styled.label`
margin-bottom: 10px;
`;
const Description = Styled.div`
padding: 10px;
`;
const Title = Styled.h1`
text-align: center;

`;
const Avatar = Styled.img`
width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const WrapTittle = Styled.div`
margin: 10px 0;
`;
function CardDetailOffer() {
    return (
        <div>
            <Wrapping>
                <WrapTittle>
                    <Title>
                        <strong>
                            Memperbaiki Bug dalam Pembuatan Web E-commerce
                        </strong>
                    </Title>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: '10px',
                        }}
                    >
                        <Avatar
                            src="https://i.pinimg.com/236x/b1/9c/d0/b19cd01bf5d4cb88240d7a50d21cff33.jpg"
                            alt="avatar"
                        />
                        <Title as="span">
                            <em>Agus Trihanton</em>
                        </Title>
                    </div>
                </WrapTittle>
                <Wraps>
                    <SectionOne>
                        <WrapImage>
                            <img
                                src="https://bestpartnereducation.com/public/news/2019/12/tertarik-menjadi-web-developer-ikuti-langkah-ini/web%20developer.jpg"
                                alt="thumbnail"
                            />
                        </WrapImage>
                        <Description>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quae, aliquam quas. Id quo
                                explicabo, perferendis quasi minus consequuntur
                                labore alias veritatis numquam aperiam officia
                                exercitationem qui ab officiis facilis vitae.
                            </p>
                        </Description>
                    </SectionOne>
                    <SectionTwo>
                        <Label class="checkbox">
                            <Input type="checkbox" checked />
                            Revision 12 Times
                        </Label>
                        <Label class="checkbox">
                            <Input type="checkbox" checked />
                            Commercial Use
                        </Label>
                        <Label class="checkbox">
                            <Input type="checkbox" checked />5 Hours Of Works
                        </Label>
                        <button class="button is-link ">Buy Now</button>
                    </SectionTwo>
                </Wraps>
            </Wrapping>
        </div>
    );
}

export default CardDetailOffer;
