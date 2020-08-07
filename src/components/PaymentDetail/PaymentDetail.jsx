import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
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

export default function PaymentDetail() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/payment-report');
    };
    return (
        <div className="column is-6 is-offset-1">
            <div className="box">
                <Formik
                    initialValues={{
                        fullname: '',
                        email: '',
                        address: '',
                        creditName: '',
                        creditNumber: '',
                        creditExpireMonth: '',
                        creditExpireYear: '',
                        cvv: '',
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.fullname) {
                            errors.fullname = 'Wajib Isi';
                        }

                        if (!values.email) {
                            errors.email = 'Wajib Isi';
                        }

                        if (!values.address) {
                            errors.address = 'Wajib Isi';
                        }

                        if (!values.creditName) {
                            errors.creditName = 'Wajib Isi';
                        }

                        if (!values.creditNumber) {
                            errors.creditNumber = 'Wajib Isi';
                        }

                        if (!values.creditExpireMonth) {
                            errors.creditExpireMonth = 'Wajib Isi';
                        } else if (values.creditExpireMonth.length !== 3) {
                            errors.creditExpireMonth = 'Format Salah';
                        }

                        if (!values.creditExpireYear) {
                            errors.creditExpireYear = 'Wajib Isi';
                        } else if (!values.creditExpireYear.match(/[0-9]/)) {
                            errors.creditExpireYear = 'Format Salah';
                        }

                        if (!values.cvv) {
                            errors.cvv = 'Wajib Isi';
                        } else if (values.cvv.length !== 3) {
                            errors.cvv = 'Format Salah';
                        } else if (!values.cvv.match(/[0-9]/)) {
                            errors.cvv = 'Format Salah';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {() => (
                        <Form>
                            <div className="columns is-desktop">
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="fullname"
                                        label="Nama Lengkap"
                                        placeholder="Masukan Nama Anda"
                                    />
                                    <ErrorMessage name="fullname">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="email"
                                        name="email"
                                        label="Email"
                                        placeholder="Masukan Email"
                                    />
                                    <ErrorMessage name="email">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="columns is-desktop">
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="address"
                                        label="Alamat"
                                        placeholder="Alamat"
                                    />
                                    <ErrorMessage name="address">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="columns is-desktop">
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="creditName"
                                        label="Nama Pada Kartu"
                                        placeholder="Masukan Nama Pada Kartu"
                                    />
                                    <ErrorMessage name="creditName">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="creditNumber"
                                        label="Nomor Kartu Kredit"
                                        placeholder="Masukan Nomor Kartu Kredit"
                                    />
                                    <ErrorMessage name="creditNumber">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="columns is-desktop">
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="creditExpireMonth"
                                        label="Bulan Kadaluarsa"
                                        placeholder="JAN"
                                    />
                                    <ErrorMessage name="creditExpireMonth">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="creditExpireYear"
                                        label="Tahun Kadaluarsa"
                                        placeholder="2020"
                                    />
                                    <ErrorMessage name="creditExpireYear">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="column">
                                    <Field
                                        as={MyInput}
                                        type="text"
                                        name="cvv"
                                        label="CVV"
                                        placeholder="000"
                                    />
                                    <ErrorMessage name="cvv">
                                        {(msg) => (
                                            <p className="help is-danger">
                                                {msg}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>

                            <button
                                onClick={handleClick}
                                className="button is-block is-info is-fullwidth"
                            >
                                Bayar
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
