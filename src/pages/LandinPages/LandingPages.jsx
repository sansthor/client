import React from "react";

import { Jumbotron, Container, Button } from "reactstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FindDigitalService from "../../components/FindDigitalService/FindDigitalService";

function LandingPages() {
    return (
        <div>
            <Header />
            <Jumbotron fluid>
                <Container fluid>
                    <h1 style={{ width: "50%" }} className="display-3">
                        Help you find the best digital talent that match your
                        needs!
                    </h1>
                    <p className="lead">
                        Temukan talent terbaik untuk membantu memecahkan
                        masalahmu
                    </p>
                </Container>
            </Jumbotron>
            <FindDigitalService />
            <Footer />
        </div>
    );
}

export default LandingPages;
