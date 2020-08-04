import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components';
import { ButtonToggle } from 'reactstrap';
import { fetchGetMember } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TalentSkill from './TalentSkill';

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
    const dispatch = useDispatch();
    const history = useHistory();
    const member = useSelector((state) => state.getmember);
    const memberTalent = useSelector((state) => state.getmember.role);

    const handleTalent = () => {
        history.push('/user/register/talent');
    };
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
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
                            <ButtonToggle size="sm" color="primary">
                                Edit Profile
                            </ButtonToggle>
                        </div>
                    </Div>
                    <div
                        style={{
                            borderLeft: '2px solid black',
                            marginLeft: '40px',
                            paddingLeft: '40px',
                        }}
                    >
                        <React.Fragment>
                            {' '}
                            {memberTalent === 'TALENT' ? (
                                <TalentSkill />
                            ) : (
                                <div>
                                    <p>
                                        <strong>Join Us</strong>
                                    </p>
                                    <p>
                                        join to become a talent or immediately
                                        find your best talent
                                    </p>
                                    <p>Get your skill and portofolio</p>
                                    <ButtonToggle
                                        size="sm"
                                        color="danger"
                                        onClick={handleTalent}
                                    >
                                        Become Talent
                                    </ButtonToggle>
                                </div>
                            )}{' '}
                        </React.Fragment>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
