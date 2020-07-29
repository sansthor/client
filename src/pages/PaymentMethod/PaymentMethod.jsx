import React, { useState } from "react";
import { ButtonToggle, Jumbotron, Container } from "reactstrap";
import Styled from "styled-components";

// --- Styled Components ---
const FlexColumn = Styled.div`
display: flex;
flex-direction: column;
`;
const WrapLeft = Styled.div`
display: flex;
flex-direction: column;
width: 60%;
`;
// --- Styled Components ---

function PaymentMethod() {
    const [bgColor, setBgColor] = useState({
        bgcolor1: "none",
        bgcolor2: "none",
        bgcolor3: "none",
        bgcolor4: "none",
        bgcolor5: "none",
        bgcolor6: "none",
        bgcolor7: "none",
        bgcolor8: "none",
    });

    const handleChange = (event) => {
        if (event.target.name === "bgColor1") {
            setBgColor({
                bgcolor1: "primary",
                bgcolor2: "none",
                bgcolor3: "none",
                bgcolor4: "none",
                bgcolor5: "none",
                bgcolor6: "none",
                bgcolor7: "none",
                bgcolor8: "none",
            });
        } else if (event.target.name === "bgColor2") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "primary",
                bgcolor3: "none",
                bgcolor4: "none",
                bgcolor5: "none",
                bgcolor6: "none",
                bgcolor7: "none",
                bgcolor8: "none",
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
            <WrapLeft>
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
                <FlexColumn>
                    <input type="text" />
                    <input type="number" />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <input />
                        <input />
                        <input />
                    </div>
                </FlexColumn>
            </WrapLeft>
            <div>
                {" "}
                <ButtonToggle
                    name="bgColor4"
                    color={bgColor.bgcolor4}
                    onClick={handleChange}
                >
                    CreditCard
                </ButtonToggle>
                <ButtonToggle
                    name="bgColor5"
                    color={bgColor.bgcolor5}
                    onClick={handleChange}
                >
                    Paypal
                </ButtonToggle>
                <ButtonToggle
                    name="bgColor6"
                    color={bgColor.bgcolor6}
                    onClick={handleChange}
                >
                    Amazon Web Service
                </ButtonToggle>
                <ButtonToggle
                    name="bgColor7"
                    color={bgColor.bgcolor7}
                    onClick={handleChange}
                >
                    Amazon Web Service
                </ButtonToggle>
                <ButtonToggle
                    name="bgColor8"
                    color={bgColor.bgcolor8}
                    onClick={handleChange}
                >
                    Amazon Web Service
                </ButtonToggle>
            </div>
        </div>
    );
}

export default PaymentMethod;
