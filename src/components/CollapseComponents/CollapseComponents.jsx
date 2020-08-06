import React from 'react';
import CollapseComponentsWeb from './CollapseComponentsWeb';
import Styled from 'styled-components';

const Tittle = Styled.h2`
margin-bottom: 10px;
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
