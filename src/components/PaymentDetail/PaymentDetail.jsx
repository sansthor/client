import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetMember, fetchTransactionCartByID } from '../../redux/actions';
import { buyService } from '../../redux/actions/buyService';

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
    const { id } = useParams();
    const dispatch = useDispatch();

    const member = useSelector((state) => state.getmember);
    const transaction = useSelector(
        (state) => state.transaction.transactionCartByID
    );

    const transactionID =
        Array.isArray(transaction) &&
        transaction.map((item) => {
            return { id: item._id };
        });

    useEffect(() => {
        dispatch(fetchGetMember());
        dispatch(fetchTransactionCartByID(id));
    }, [dispatch, id]);

    return (
        <div className="column is-6 is-offset-1">
            <div className="box">
                <Formik
                    initialValues={{
                        fullname: member.fullname || '',
                        email: member.email || '',
                        address: member.address || '',
                        creditName: '',
                        creditNumber: '',
                        creditExpireMonth: '',
                        creditExpireYear: '',
                        cvv: '',
                    }}
                    enableReinitialize={true}
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
                        } else if (values.creditName.match(/[0-9]/)) {
                            errors.creditName = 'Format Salah';
                        }

                        if (!values.creditNumber) {
                            errors.creditNumber = 'Wajib Isi';
                        } else if (!values.creditNumber.match(/[0-9]/)) {
                            errors.creditNumber = 'Format Salah';
                        }

                        if (!values.creditExpireMonth) {
                            errors.creditExpireMonth = 'Wajib Isi';
                        } else if (values.creditExpireMonth.length !== 2) {
                            errors.creditExpireMonth = 'Format Salah';
                        } else if (!values.creditExpireMonth.match(/[0-9]/)) {
                            errors.creditExpireMonth = 'Format Salah';
                        } else if (values.creditExpireMonth > 12) {
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
                    onSubmit={(values) => {
                        dispatch(
                            buyService(
                                {
                                    ...values,
                                    transactionID,
                                },
                                history,
                                member._id
                            )
                        );
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
                                        placeholder="01"
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
                                type="submit"
                                className="button is-block is-info is-fullwidth"
                                disabled={transaction.length === 0 && true}
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
