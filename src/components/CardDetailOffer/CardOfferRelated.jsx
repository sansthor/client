import React from 'react';
import Styled from 'styled-components';

const Wraps = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;


padding: 50px;
margin: 100px;
flex-direction: row;
`;

const WrapImage = Styled.div`
width: 50%;
`;
function CardOfferRelated() {
    return (
        <div>
            <Wraps>
                <WrapImage>
                    <img src="https://bestpartnereducation.com/public/news/2019/12/tertarik-menjadi-web-developer-ikuti-langkah-ini/web%20developer.jpg" />
                </WrapImage>
            </Wraps>
        </div>
    );
}

export default CardOfferRelated;
