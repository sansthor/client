import React from 'react';
import Styled from 'styled-components';
import CardComponentsCategories from '../CardComponent/CardComponentsCategories';
// --- Styled components ---

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
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 50px;
`;
// --- Styled components ---

function PurchaseHistory() {
    return (
        <div>
            <Wrap>
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                    avatar="https://vignette.wikia.nocookie.net/onepiece/images/7/7e/Donquixote_Doflamingo_Anime_Infobox.png/revision/latest?cb=20200328163541"
                />
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    avatar="https://vignette.wikia.nocookie.net/onepiece/images/7/7e/Donquixote_Doflamingo_Anime_Infobox.png/revision/latest?cb=20200328163541"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                />
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                    avatar="https://vignette.wikia.nocookie.net/onepiece/images/7/7e/Donquixote_Doflamingo_Anime_Infobox.png/revision/latest?cb=20200328163541"
                />
            </Wrap>
        </div>
    );
}

export default PurchaseHistory;
