import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

export default function PaymentInputs() {
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
    } = usePaymentInputs();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "400PX",
            }}
        >
            <PaymentInputsWrapper {...wrapperProps}>
                <input placeholder="Name on Card" />
            </PaymentInputsWrapper>
            <PaymentInputsWrapper
                {...wrapperProps}
                style={{ marginTop: "10px" }}
            >
                <svg {...getCardImageProps({ images })} />

                <input {...getCardNumberProps()} />
            </PaymentInputsWrapper>

            <PaymentInputsWrapper
                {...wrapperProps}
                style={{ margin: "10px 0" }}
            >
                <input {...getExpiryDateProps()} />
            </PaymentInputsWrapper>

            <PaymentInputsWrapper {...wrapperProps}>
                <input {...getCVCProps()} />
            </PaymentInputsWrapper>
        </div>
    );
}
