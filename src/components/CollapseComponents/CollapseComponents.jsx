import React from 'react';
import CollapseComponentsWeb from './CollapseComponentsWeb';
import Styled from 'styled-components';

const Tittle = Styled.h2`
font-size: 36px;
margin: 40px 0;
@media (max-width: 1000px) {
    padding: 10px;
}
`;
function CollapseComponents() {
    return (
        <React.Fragment>
            <Tittle>
                <strong>FAQ</strong>
            </Tittle>
            <CollapseComponentsWeb />
        </React.Fragment>
    );
}

export default CollapseComponents;
