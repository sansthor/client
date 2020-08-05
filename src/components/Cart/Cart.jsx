import React from 'react';

export default function Cart() {
    return (
        <div className="column is-4">
            <div className="box">
                <div className="columns is-mobile">
                    <div className="column">Cart</div>
                    <div className="column">4</div>
                </div>
                <div className="columns is-mobile">
                    <div className="column">Item 1</div>
                    <div className="column">$5</div>
                </div>
                <div className="columns is-mobile">
                    <div className="column">Item 2</div>
                    <div className="column">$5</div>
                </div>
                <div className="columns is-mobile">
                    <div className="column">Item 3</div>
                    <div className="column">$5</div>
                </div>
                <div className="columns is-mobile">
                    <div className="column">Item 4</div>
                    <div className="column">$5</div>
                </div>
                <hr className="login-hr" />
                <div className="columns is-mobile">
                    <div className="column">Total</div>
                    <div className="column">$20</div>
                </div>
            </div>
        </div>
    );
}
