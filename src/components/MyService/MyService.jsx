import React from 'react';
import Styled from 'styled-components';
import CardComponentsCategories from '../CardComponent/CardComponentsCategories';
// --- Styled components ---

const Wrap = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 50px;
`;
// --- Styled components ---

function MyService() {
    return (
        <div>
            <Wrap>
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                />
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                />
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                />
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                />
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                />
                <CardComponentsCategories
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2h1nFzPu3w-Yc4JukGS4pwDViRD9Rt1Ojg&usqp=CAU"
                    title="Fix Locat Storage"
                    name="Doflamingo"
                />
            </Wrap>
        </div>
    );
}

export default MyService;
