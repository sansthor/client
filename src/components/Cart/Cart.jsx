import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTransactionCartByID } from '../../redux/actions';

export default function Cart() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const transaction = useSelector(
        (state) => state.transaction.transactionCartByID
    );

    useEffect(() => {
        dispatch(fetchTransactionCartByID(id));
    }, [dispatch, id]);

    const sum =
        Array.isArray(transaction) &&
        transaction.reduce((a, b) => ({ total: a.total + b.total }));

    return (
        <div className="column is-4">
            <div className="box">
                {Array.isArray(transaction) &&
                    transaction.map((item) => {
                        return (
                            <div className="columns is-mobile" key={item._id}>
                                <div className="column">
                                    {item.serviceID.title}
                                </div>
                                <div className="column">{item.total}</div>
                            </div>
                        );
                    })}

                <hr className="login-hr" />
                <div className="columns is-mobile">
                    <div className="column">Total</div>
                    <div className="column">{sum.total}</div>
                </div>
            </div>
        </div>
    );
}
