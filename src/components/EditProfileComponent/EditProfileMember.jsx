import React, { useEffect } from 'react';
import { FormGroup } from '@material-ui/core';
import { Button, Label, Input, Container, Row, Col } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateProfile, fetchGetMember } from '../../redux/actions';

const MyInput = (props) => {
    return (
        <FormGroup>
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

const Div = styled.div`
    margin: 100px 0;
`;

const Title = styled.h1`
    text-align: center;
`;

function EditProfileMember() {
    const dispatch = useDispatch();
    const history = useHistory();
    const members = useSelector((state) => state.getmember);

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);

    return (
        <Container>
            <Row>
                <Col xs="12" sm="12" md={{ size: 6, offset: 3 }}>
                    <Div>
                        <Title>Update Profile</Title>
                        <Formik
                            initialValues={{
                                fullname: members.fullname || '',
                                email: members.email || '',
                                password: '',
                                confirmPassword: '',
                            }}
                            enableReinitialize={true}
                            validate={(values) => {
                                const errors = {};
                                if (!values.fullname) {
                                    errors.fullname = 'Required';
                                }

                                if (!values.email) {
                                    errors.email = 'Required';
                                }

                                if (values.password !== '') {
                                    if (
                                        values.confirmPassword !==
                                        values.password
                                    ) {
                                        errors.confirmPassword =
                                            'Password is not match';
                                    }
                                }

                                return errors;
                            }}
                            onSubmit={(values) => {
                                dispatch(updateProfile(values, history));
                            }}
                        >
                            {() => (
                                <Form>
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="fullname"
                                        label="Fullname"
                                    />
                                    <ErrorMessage
                                        name="fullname"
                                        render={(msg) => <Error>{msg}</Error>}
                                    />
                                    <Field
                                        as={MyInput}
                                        type="email"
                                        name="email"
                                        label="Email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        render={(msg) => <Error>{msg}</Error>}
                                    />
                                    <Field
                                        as={MyInput}
                                        type="password"
                                        name="password"
                                        label="Password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        render={(msg) => <Error>{msg}</Error>}
                                    />
                                    <Field
                                        as={MyInput}
                                        type="password"
                                        name="confirmPassword"
                                        label="Re-enter Password"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
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

export default EditProfileMember;
