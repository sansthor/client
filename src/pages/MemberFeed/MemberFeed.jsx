import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { Button } from 'reactstrap';
import MemberComponent from '../../components/MemberComponents/MemberComponents';
import { fetchGetMember } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TalentSkill from './TalentSkill';
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
const WrapTalent = Styled.div`
margin: 20px 100px;
padding: 20px 50px 0 10px;
@media (max-width: 600px) {
    margin-left: 20px;
    margin-top: -90px;
   }
`;
// ---Styled components---

function MemberFeed() {
    const dispatch = useDispatch();
    const history = useHistory();
    const member = useSelector((state) => state.getmember);
    const memberTalent = useSelector((state) => state.getmember.role);

    const handleTalent = () => {
        history.push('/user/register/talent');
    };

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
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
                <React.Fragment>
                    {memberTalent === 'TALENT' ? (
                        <WrapTalent>
                            <TalentSkill />
                        </WrapTalent>
                    ) : (
                        <Wrap>
                            {' '}
                            <Button color="danger" onClick={handleTalent}>
                                Become Talent
                            </Button>{' '}
                        </Wrap>
                    )}
                </React.Fragment>
            </About>
            <div>
                <MemberComponent />
            </div>
        </div>
    );
}

export default MemberFeed;
