import React from "react";
import { Jumbotron, Container } from "reactstrap";
function Jumbortron(props) {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">{props.title}</h1>
                    <p className="lead">{props.teks}</p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Jumbortron;
