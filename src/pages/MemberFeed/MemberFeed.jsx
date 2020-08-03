import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import PurchaseHistory from '../../components/PurchaseHistory/PurchaseHistory';
import MyService from '../../components/MyService/MyService';
import Order from '../../components/Order/Order';
import Header from '../../components/Header/Header';
import { Button } from 'reactstrap';
import MemberComponent from '../../components/MemberComponents/MemberComponents';
import { fetchGetMember } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// ---Styled components---
const Jumbotron = Styled.div`
width: 100vw;
background-color: #b83b5e;
height: 35vh;
`;
const Profile = Styled.div`
position: relative;
top: -100px;
margin: auto 5em;
display: flex;
flex-direction: row;
@media (max-width: 600px) {
   top: -80px;
   margin-left: 30px;
  }
`;
const Image = Styled.img`
border-radius: 50%;
width: 30%;


`;
const About = Styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
margin-bottom: 50px;

`;
const Wrap = Styled.div`
margin: 20px 100px;
padding: 20px 50px 0 10px;
@media (max-width: 600px) {
    margin-left: 20px;
    margin-top: -90px;
   }
`;
// ---Styled components---
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));
function MemberFeed() {
    const dispatch = useDispatch();
    const history = useHistory();
    const member = useSelector((state) => state.getmember);
    console.log(member, 'member');
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleTalent = () => {
        history.push('/user/register/talent');
    };

    useEffect(() => {
        dispatch(fetchGetMember());
    }, []);
    return (
        <div>
            <Jumbotron></Jumbotron>
            <About>
                <Profile>
                    <Image src="https://www.w3schools.com/w3images/avatar2.png" />
                    <div style={{ margin: '40px 0 0 10px' }}>
                        <p style={{ lineHeight: '1px' }}>
                            <strong>{member.fullname}</strong>
                        </p>
                        <p>
                            <strong>{member.role}</strong>
                        </p>
                    </div>
                </Profile>
                <Wrap>
                    <Button color="danger" onClick={handleTalent}>
                        Become Talent
                    </Button>{' '}
                </Wrap>
            </About>
            <div>
                <MemberComponent />
            </div>
        </div>
    );
}

export default MemberFeed;
