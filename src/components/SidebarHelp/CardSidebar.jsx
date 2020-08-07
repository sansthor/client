import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <div style={{ margin: '50px' }}>
            {' '}
            <Card className={classes.root}>
                <SidebarHelp />
            </Card>
        </div>
    );
}
