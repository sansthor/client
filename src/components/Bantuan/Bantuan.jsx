import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Styled from 'styled-components';
import SidebarHelp from './SidebarHelp';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const Wrap = Styled.div`
padding: 100px;
background-color: #f2f6fa;
@media (max-width: 1000px){
    padding: 50px;
}
`;
export default function Bantuan() {
    const classes = useStyles();

    return (
        <Wrap className="hero is-success">
            {' '}
            <Card className={classes.root}>
                <SidebarHelp />
            </Card>
        </Wrap>
    );
}
