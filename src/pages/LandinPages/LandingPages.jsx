import React from 'react';
import Styled from 'styled-components';

import { Jumbotron, Container } from 'reactstrap';
import CardPopular from '../../components/CardComponent/CardPopular';
import CardCategories from '../../components/CardComponent/CardCategories';
import CardCompany from '../../components/CardComponent/CardCompany';
import CardHire from '../../components/CardComponent/CardHire';
// --- styledComponents --- //
const Tittle = Styled.h1`
font-size: 46px;
width: 50%;
@media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
`;
const Text = Styled.p`
font-size: 24px;
@media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
}
`;

// --- styledComponents --- //
function LandingPages() {
    return (
        <div>
            <Jumbotron
                fluid
                style={{ padding: '100px 50px', backgroundColor: '#6f4a8e' }}
            >
                <Container fluid>
                    <Tittle className="display-3">
                        <strong>
                            {' '}
                            Help you find the best digital talent that match
                            your needs!
                        </strong>
                    </Tittle>
                    <Text className="lead">
                        Temukan talent terbaik untuk membantu memecahkan
                        masalahmu
                    </Text>
                </Container>
            </Jumbotron>
            <CardPopular />
            <CardCategories />
            <CardCompany />
            <CardHire />
        </div>
    );
}

export default LandingPages;
