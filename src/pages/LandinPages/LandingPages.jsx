import React from "react";
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
                <h2>Find Digital Services...</h2>
                <div>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="username" />
                    </InputGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                </div>
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
