import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import Styled from 'styled-components';
import SidebarHelp from './SidebarHelp';

const Wrap = Styled.div`
padding: 100px;
background-color: #f2f6fa;
@media (max-width: 1000px){
    padding: 50px;
}
`;
export default function Bantuan() {
    return (
        <Wrap className="hero is-success">
            {' '}
            <SidebarHelp />
        </Wrap>
    );
}
