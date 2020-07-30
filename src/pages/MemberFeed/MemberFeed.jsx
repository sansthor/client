import React from "react";
import Styled from "styled-components";
import logo from "../../logo.svg";
const Jumbotron = Styled.div`
width: 100vw;
background-color: #b83b5e;
height: 35vh;
`;
const Profile = Styled.div`
position: relative;
top: -180px;
margin: auto 5em;
`;
const Image = Styled.img`
border-radius: 50%;
width: 40%


`;
const About = Styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;

`;
const Wrap = Styled.div`
margin: 20px 100px;
padding: 20px 50px 0 10px;
border: 1px solid black;
`;
function MemberFeed() {
    return (
        <div>
            <Jumbotron></Jumbotron>
            <About>
                <Profile>
                    <Image src="https://www.w3schools.com/w3images/avatar2.png" />
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
        </div>
    );
}

export default MemberFeed;
