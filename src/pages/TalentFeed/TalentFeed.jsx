import React from 'react';
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
import TalentComponent from '../../components/TalentComponent/TalentComponent';
// ---Styled components---
const Jumbotron = Styled.div`
width: 100vw;
background-color: #b83b5e;
height: 35vh;
`;
const Profile = Styled.div`
position: relative;
top: -180px;
margin: auto 5em;
display: flex;
flex-direction: row;
@media (max-width: 1250px) {
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
function TalentFeed() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Jumbotron></Jumbotron>
            <About>
                <Profile>
                    <Image src="https://www.w3schools.com/w3images/avatar2.png" />
                    <div style={{ margin: '40px 0 0 10px' }}>
                        <p style={{ lineHeight: '1px' }}>
                            <strong>Agus trihanton</strong>
                        </p>
                        <p>
                            <strong>Talent</strong>
                        </p>
                    </div>
                </Profile>
                <Wrap>
                    <h4>Skill</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                    <h4>Portofolio</h4>
                    <ul>
                        <li>Link</li>
                    </ul>
                    <h4>Phone Number</h4>
                    <ul>
                        <li>087888119345</li>
                    </ul>
                </Wrap>
            </About>
            <div>
                <TalentComponent />
            </div>
        </div>
    );
}

export default TalentFeed;
