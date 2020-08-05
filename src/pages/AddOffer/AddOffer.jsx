import React from 'react';
import '../../assets/css/Login.css';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MyInput = (props) => {
    return (
        <div className="field">
            <label className="label" style={{ textAlign: 'start' }}>
                {props.label}
            </label>
            <div className="control">
                <input
                    className="input"
                    placeholder={props.placeholder}
                    autofocus=""
                    {...props}
                />
            </div>
        </div>
    );
};

const Error = styled.div`
    font-style: italic;
    color: red;
`;

function AddOffer() {
    return (
        <div className="body">
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <p class="subtitle has-text-black">
                                Tambah Layanan
                            </p>
                            <hr class="login-hr" />
                            <div className="box">
                                <Formik
                                    initialValues={{
                                        price: '',
                                        revision: '',
                                        title: '',
                                        desc: '',
                                        requirement: '',
                                        processtime: '',
                                    }}
                                    validate={(values) => {
                                        const errors = {};
                                        if (!values.price) {
                                            errors.price = 'Wajib Isi';
                                        }

                                        if (!values.revision) {
                                            errors.revision = 'Wajib Isi';
                                        } else if (
                                            !values.revision.match(/[0-9]/)
                                        ) {
                                            errors.revision =
                                                'Masukan hanya angka';
                                        }

                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(
                                                JSON.stringify(values, null, 2)
                                            );
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <Field
                                                as={MyInput}
                                                type="text"
                                                name="title"
                                                label="Judul"
                                                placeholder="Masukan Judul"
                                            />
                                            <ErrorMessage name="title">
                                                {(msg) => <Error>{msg}</Error>}
                                            </ErrorMessage>
                                            <Field
                                                as={MyInput}
                                                type="text"
                                                name="desc"
                                                label="Deskripsi"
                                                placeholder="Masukan Deskripsi"
                                            />
                                            <ErrorMessage name="desc">
                                                {(msg) => <Error>{msg}</Error>}
                                            </ErrorMessage>
                                            <Field
                                                as={MyInput}
                                                type="number"
                                                name="price"
                                                label="Harga"
                                                placeholder="Mulai dari"
                                            />
                                            <ErrorMessage name="price">
                                                {(msg) => <Error>{msg}</Error>}
                                            </ErrorMessage>
                                            <Field
                                                as={MyInput}
                                                type="text"
                                                name="revision"
                                                label="Revisi"
                                                placeholder="x Kali"
                                            />
                                            <ErrorMessage name="revision">
                                                {(msg) => <Error>{msg}</Error>}
                                            </ErrorMessage>
                                            <Field
                                                as={MyInput}
                                                type="text"
                                                name="requirement"
                                                label="Kebutuhan"
                                                placeholder="Beritahu kepada pelanggang kebutuhan awal"
                                            />
                                            <ErrorMessage name="requirement">
                                                {(msg) => <Error>{msg}</Error>}
                                            </ErrorMessage>
                                            <Field
                                                as={MyInput}
                                                type="text"
                                                name="processtime"
                                                label="Waktu Pengerjaan"
                                                placeholder="x Hari"
                                            />
                                            <ErrorMessage name="processtime">
                                                {(msg) => <Error>{msg}</Error>}
                                            </ErrorMessage>
                                            <button className="button is-block is-info is-fullwidth">
                                                Tambah
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddOffer;
