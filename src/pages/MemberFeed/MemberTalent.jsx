import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components';
import { ButtonToggle } from 'reactstrap';

const Image = Styled.img`
border-radius: 50%;
width: 30%;
@media (max-width: 789px){
    width: 100%;
}
`;
const Div = Styled.div`
margin-left: -300px;
@media (max-width: 789px){
    margin-left: 0px;

}

`;
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

export default function MemberTalent() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent style={{ padding: '80px 150px 40px 150px' }}>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
                    <div>
                        <Image src="https://www.w3schools.com/w3images/avatar2.png" />
                    </div>
                    <Div>
                        <p>
                            <strong>Agus Trihanton</strong>
                        </p>
                        <p>Agustrihanton99@gmail.com</p>
                        <p>Member</p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <ButtonToggle
                                size="sm"
                                color="primary"
                                style={{ marginRight: '5px' }}
                            >
                                Become Talent
                            </ButtonToggle>
                            <ButtonToggle size="sm" color="primary">
                                Edit Profile
                            </ButtonToggle>
                        </div>
                    </Div>
                </div>
            </CardContent>
        </Card>
    );
}
