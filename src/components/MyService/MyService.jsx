import React from 'react';
import Styled from 'styled-components';

// --- Styled components ---

const Cards = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 25%;
opacity: 1;
cursor: pointer;
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    opacity: 0.9;
}
@media (max-width: 700px) {
    width: 100%;
   }
`;

const CardsWrap = Styled.div`
margin: 50px 0;
display: flex;
flex-wrap: wrap;

`;
const Images = Styled.img`
width: 100%;
}
`;
const Wrap = Styled.div`
border: 1px solid black;
margin: 10px;
padding: 10px;
`;
// --- Styled components ---

function MyService() {
    return (
        <div>
            <Wrap>
                <CardsWrap>
                    <Cards>
                        <Images
                            top
                            src="https://images.unsplash.com/photo-1595877244575-941ed61fb8f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                            alt="Card image cap"
                        />
                        <div style={{ padding: '2px 16px' }}>
                            <h4>Rumah Pohon</h4>

                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </Cards>
                </CardsWrap>
            </Wrap>
        </div>
    );
}

export default MyService;
