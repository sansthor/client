import React from "react";
import Styled from "styled-components";
import {
    Jumbotron,
    Container,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    FormGroup,
    Label,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";

// --Styledcomponent--
const SearchWrappers = Styled.div`
display: flex;
flex direction: row;
justify-content: space-between;
margin: 10px 200px;
`;

const Wrap = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
// --Styledcomponent--

function LandingPages() {
    return (
        <div>
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
                    <Button color="danger">Find Here</Button>
                </Container>
            </Jumbotron>
            <div>
                <Wrap>
                    <h2 style={{ alignSelf: "center" }}>
                        Find Digital Services...
                    </h2>
                    <div>
                        <SearchWrappers>
                            <Input
                                style={{ marginRight: "1rem" }}
                                placeholder="Search..."
                            />

                            <Input
                                style={{ width: "40%", marginRight: "1rem" }}
                                type="select"
                                name="select"
                                id="exampleSelect"
                            >
                                <option>Data scientist</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                            <Button color="danger">Find</Button>
                        </SearchWrappers>
                    </div>
                </Wrap>
                <div>
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src="/assets/318x180.svg"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default LandingPages;
