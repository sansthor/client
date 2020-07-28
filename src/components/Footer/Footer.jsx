import React from "react";
import Styled from "styled-components";

// --- Styled components ---
const FooterWraps = Styled.footer`
padding: 20px;
background-color: #292c2f;
color: white;
`;
const ContentWraps = Styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;
const Contents = Styled.div`
width: 20%;
@media (max-width: 800px) {
    width: 100%;
    text-align: center;
    }
`;
// --- Styled components ---

function Footer() {
    return (
        <FooterWraps>
            <ContentWraps>
                <Contents>
                    <h3>FindThes</h3>
                    <p>Help You find th best digital talents</p>
                    <p>testing</p>
                    <p>testing</p>
                </Contents>

                <Contents>
                    <p>Jln kaliabang bungur no.205 bekasi barat</p>
                    <p>021-89765411</p>
                    <p>Findthest@gmail.com</p>
                </Contents>

                <Contents>
                    <p>
                        <strong>About The Company</strong>
                    </p>
                    <p>solution to find quality talent </p>
                    <p>Twitter, Facebook, Instagram</p>
                </Contents>
            </ContentWraps>
            <div
                style={{
                    textAlign: "center",
                    borderTop: "1px solid gray",
                    paddingTop: "10px",
                }}
            >
                <p>
                    <span>&#169; </span>
                    All Right Reserved Talent with Findthes
                </p>
            </div>
        </FooterWraps>
    );
}

export default Footer;
