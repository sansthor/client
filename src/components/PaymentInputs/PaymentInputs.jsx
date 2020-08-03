import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { ButtonToggle } from 'reactstrap';
import Styled from 'styled-components';

const Wraps = Styled.div`
display: flex;
flex-direction: column;
padding: 20px 300PX;
@media (max-width: 1000px) {
    padding: 50px 50px;
}
`;
export default function PaymentInputs() {
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
    } = usePaymentInputs();

    return (
        <Wraps>
            <PaymentInputsWrapper {...wrapperProps}>
                <input placeholder="Name on Card" />
            </PaymentInputsWrapper>
            <PaymentInputsWrapper
                {...wrapperProps}
                style={{ marginTop: '10px' }}
            >
                <svg {...getCardImageProps({ images })} />

                <input {...getCardNumberProps()} />
            </PaymentInputsWrapper>

            <PaymentInputsWrapper
                {...wrapperProps}
                style={{ margin: '10px 0' }}
            >
                <input {...getExpiryDateProps()} />
            </PaymentInputsWrapper>

            <PaymentInputsWrapper {...wrapperProps}>
                <input {...getCVCProps()} />
            </PaymentInputsWrapper>
        </Wraps>
    );
}
