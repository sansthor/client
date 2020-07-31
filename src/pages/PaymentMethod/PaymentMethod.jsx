import React from "react";
import PaymentInputs from "../../components/PaymentInputs/PaymentInputs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Jumbortron from "../../components/Jumbortron/Jumbortron";

function PaymentMethod() {
    return (
        <div>
            <Header />
            <Jumbortron title="Payment Method" />
            <PaymentInputs />
            <Footer />
        </div>
    );
}

export default PaymentMethod;
