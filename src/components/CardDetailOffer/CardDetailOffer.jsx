import React from 'react';
import Styled from 'styled-components';

const Wraps = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;

flex-wrap: wrap;
padding: 50px;
margin: 100px;

`;
const SectionOne = Styled.div`
width:70%;

box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;
const SectionTwo = Styled.div`
width: 30%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
flex-direction: column;
padding: 40px;
`;
const WrapImage = Styled.div`

`;
const Input = Styled.input`
margin-right: 5px;
`;
const Label = Styled.label`
margin-bottom: 10px;
`;
function CardDetailOffer() {
    return (
        <div>
            <Wraps>
                <SectionOne>
                    <WrapImage>
                        <img src="https://bestpartnereducation.com/public/news/2019/12/tertarik-menjadi-web-developer-ikuti-langkah-ini/web%20developer.jpg" />
                    </WrapImage>
                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae, aliquam quas. Id quo explicabo,
                            perferendis quasi minus consequuntur labore alias
                            veritatis numquam aperiam officia exercitationem qui
                            ab officiis facilis vitae.
                        </p>
                    </div>
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
                    <button class="button is-link ">Buy</button>
                </SectionTwo>
            </Wraps>
        </div>
    );
}

export default CardDetailOffer;
