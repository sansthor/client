import React from 'react';
import { FormGroup } from '@material-ui/core';
import { Button, Label, Input, Container, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registerTalent } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const Div = styled.div`
    margin: 100px 0;
`;

const Title = styled.h1`
    text-align: center;
`;

const MyInput = (props) => {
    return (
        <FormGroup className="form-label-group">
            <Label for={props.name}>{props.label}</Label>
            <Input
                name={props.name}
                id={props.name}
                placeholder={props.label}
                {...props}
            />
        </FormGroup>
    );
};

const Error = styled.div`
    font-style: italic;
    color: red;
    font-size: 12px;
`;

const ButtonSubmit = styled.div`
    & button {
        width: 100%;
    }
`;

function RegisSeller() {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <Container className="themed-container" fluid="sm">
            <Row>
                <Col xs="12" sm="12" md={{ size: 6, offset: 3 }}>
                    <Div>
                        <Title>Talent Registration</Title>
                        <Formik
                            initialValues={{ skills: '', link: '', phone: '' }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.skills) {
                                    errors.skills = 'Required';
                                }

                                if (!values.link) {
                                    errors.link = 'Required';
                                }

                                if (!values.phone) {
                                    errors.phone = 'Required';
                                } else if (!values.phone.match(/[0-9]/)) {
                                    errors.phone = 'Please insert number only';
                                } else if (values.phone.length < 10) {
                                    errors.phone =
                                        'Please insert correct number';
                                }
                                return errors;
                            }}
                            onSubmit={(values) => {
                                dispatch(registerTalent(values, history));
                            }}
                        >
                            {() => (
                                <Form>
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="skills"
                                        label="Skills"
                                    />
                                    <ErrorMessage
                                        name="skills"
                                        render={(msg) => <Error>{msg}</Error>}
                                    />
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="link"
                                        label="Portofolio Link"
                                    />
                                    <ErrorMessage
                                        name="link"
                                        render={(msg) => <Error>{msg}</Error>}
                                    />
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="phone"
                                        label="Phone Number"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        render={(msg) => <Error>{msg}</Error>}
                                    />
                                    <ButtonSubmit>
                                        <Button
                                            color="primary"
                                            type="submit"
                                            style={{
                                                margin: '10px 0',
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </ButtonSubmit>
                                </Form>
                            )}
                        </Formik>
                    </Div>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisSeller;
