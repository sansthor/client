import React from 'react';
import { FormGroup } from '@material-ui/core';
import { Button, Label, Form, Input, Container, Col, Row } from 'reactstrap';
import './RegisSeller.css';

function RegisSeller() {
    return (
        <Container
            className="themed-container"
            fluid="sm"
            style={{ margin: '2em' }}
        >
            <Row xs="3">
                <Col></Col>
                <Col>
                    <Form className="form-registration">
                        <h1>Talent Registration</h1>
                        <FormGroup className="form-label-group">
                            <Label for="skills">Skills *</Label>
                            <Input
                                type="text"
                                name="skills"
                                id="skills"
                                placeholder="Ex: HTML, CSS, JS"
                            />
                        </FormGroup>
                        <FormGroup className="form-label-group">
                            <Label for="link">Link Portofolio *</Label>
                            <Input
                                type="text"
                                name="link"
                                id="link"
                                placeholder="Link Portofolio"
                            />
                        </FormGroup>
                        <FormGroup className="form-label-group">
                            <Label for="phone">Phone Number *</Label>
                            <Input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                            />
                        </FormGroup>
                        <Button color="primary">Register</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default RegisSeller;
