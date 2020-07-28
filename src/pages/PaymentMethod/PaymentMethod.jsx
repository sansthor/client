import React, { useState } from "react";
import { ButtonToggle, Jumbotron, Container } from "reactstrap";

function PaymentMethod() {
    const [bgColor, setBgColor] = useState({
        bgcolor1: "none",
        bgcolor2: "none",
        bgcolor3: "none",
    });

    const handleChange = (event) => {
        if (event.target.name === "bgColor1") {
            setBgColor({
                bgcolor1: "primary",
                bgcolor2: "none",
                bgcolor3: "none",
            });
        } else if (event.target.name === "bgColor2") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "primary",
                bgcolor3: "none",
            });
        } else if (event.target.name === "bgColor3") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "none",
                bgcolor3: "primary",
            });
        }
    };
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Select Payment Method</h1>
                </Container>
            </Jumbotron>
            <div>
                <div>
                    <ButtonToggle
                        name="bgColor1"
                        color={bgColor.bgcolor1}
                        onClick={handleChange}
                    >
                        CreditCard
                    </ButtonToggle>
                    <ButtonToggle
                        name="bgColor2"
                        color={bgColor.bgcolor2}
                        onClick={handleChange}
                    >
                        Paypal
                    </ButtonToggle>
                    <ButtonToggle
                        name="bgColor3"
                        color={bgColor.bgcolor3}
                        onClick={handleChange}
                    >
                        Amazon Web Service
                    </ButtonToggle>
                </div>
                {/*  */}
                <div></div>
            </div>
        </div>
    );
}

export default PaymentMethod;
