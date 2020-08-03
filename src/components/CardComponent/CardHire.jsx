import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardComponentsHire from './CardComponentsHire';
function CardHire() {
    return (
        <div style={{ padding: '50px 0' }}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
                <strong>Ready To Get Started?</strong>
            </Typography>
            <CardComponentsHire />
        </div>
    );
}

export default CardHire;
