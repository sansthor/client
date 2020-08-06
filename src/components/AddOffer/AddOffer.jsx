import React from 'react';
import '../../assets/css/Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ReactFilestack from 'filestack-react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addService } from '../../redux/actions';

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
                    autoFocus=""
                    {...props}
                />
            </div>
        </div>
    );
};

const ButtonUpload = styled.div`
    background: skyblue;
    width: 100%;
    color: black;
    padding: 10px;
    cursor: pointer;
`;

const Image = styled.div`
    text-align: center;
    & img {
        object-fit: cover;
        width: 100px;
    }
`;

const FileInput = (props) => {
    return (
        <div className="field">
            <label className="label" style={{ textAlign: 'start' }}>
                {props.label}
            </label>
            <div className="control">
                <ReactFilestack
                    apikey="A1Wpfmx0ShhFzrxIEH4ngz"
                    customRender={({ onPick }) => (
                        <div>
                            <ButtonUpload onClick={onPick}>
                                Pilih Gambar
                            </ButtonUpload>
                        </div>
                    )}
                    onSuccess={(res) => {
                        props.setFieldValue('image', res.filesUploaded[0].url);
                    }}
                    {...props}
                />
            </div>
        </div>
    );
};

function AddOffer() {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div className="body">
            {/* <section className="hero is-success is-fullheight">
                <div className="hero-body"> */}
            <div className="container has-text-centered">
                {/* <div className="column is-4 is-offset-4"> */}
                {/* <p className="subtitle has-text-black">Tambah Layanan</p> */}
                {/* <hr className="login-hr" /> */}
                <div className="notification">
                    <Formik
                        initialValues={{
                            price: '',
                            revision: '',
                            title: '',
                            desc: '',
                            requirement: '',
                            processtime: '',
                            image: '',
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.price) {
                                errors.price = 'Wajib Isi';
                            }

                            if (!values.revision) {
                                errors.revision = 'Wajib Isi';
                            } else if (!values.revision.match(/[0-9]/)) {
                                errors.revision = 'Masukan hanya angka';
                            }

                            if (!values.title) {
                                errors.title = 'Wajib Isi';
                            }

                            if (!values.desc) {
                                errors.desc = 'Wajib Isi';
                            }

                            if (!values.processtime) {
                                errors.processtime = 'Wajib Isi';
                            }

                            if (!values.image) {
                                errors.image = 'Wajib Isi';
                            }

                            return errors;
                        }}
                        onSubmit={(values) => {
                            dispatch(addService(values, history));
                        }}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <Field
                                    as={MyInput}
                                    type="text"
                                    name="title"
                                    label="Judul"
                                    placeholder="Masukan Judul"
                                />
                                <ErrorMessage name="title">
                                    {(msg) => (
                                        <p className="help is-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                                <Field
                                    as={FileInput}
                                    name="image"
                                    label="Gambar"
                                    setFieldValue={setFieldValue}
                                />
                                {values.image !== '' && (
                                    <Image>
                                        <img src={values.image} alt="preview" />
                                    </Image>
                                )}
                                <ErrorMessage name="image">
                                    {(msg) => (
                                        <p className="help is-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                                <Field
                                    as={MyInput}
                                    type="text"
                                    name="desc"
                                    label="Deskripsi"
                                    placeholder="Masukan Deskripsi"
                                />
                                <ErrorMessage name="desc">
                                    {(msg) => (
                                        <p className="help is-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                                <Field
                                    as={MyInput}
                                    type="number"
                                    name="price"
                                    label="Harga"
                                    placeholder="Mulai dari"
                                />

                                <ErrorMessage name="price">
                                    {(msg) => (
                                        <p className="help is-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                                <Field
                                    as={MyInput}
                                    type="text"
                                    name="revision"
                                    label="Revisi"
                                    placeholder="x Kali"
                                />
                                <ErrorMessage name="revision">
                                    {(msg) => (
                                        <p className="help is-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                                <Field
                                    as={MyInput}
                                    type="text"
                                    name="requirement"
                                    label="Kebutuhan"
                                    placeholder="Beritahu kepada pelanggang kebutuhan awal"
                                />
                                <ErrorMessage name="requirement">
                                    {(msg) => (
                                        <p className="help is-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                                <Field
                                    as={MyInput}
                                    type="text"
                                    name="processtime"
                                    label="Waktu Pengerjaan"
                                    placeholder="x Hari"
                                />
                                <ErrorMessage name="processtime">
                                    {(msg) => (
                                        <p className="help is-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                                <button className="button is-block is-info is-fullwidth">
                                    Tambah
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                {/* </div> */}
            </div>
            {/* </div>
            </section> */}
        </div>
    );
}

export default AddOffer;
