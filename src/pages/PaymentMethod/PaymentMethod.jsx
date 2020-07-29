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
const WrapRight = Styled.div`
display: flex;
flex-direction: column;
width: 20%;
`;
const Wraps = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
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
                bgcolor4: "none",
                bgcolor5: "none",
                bgcolor6: "none",
                bgcolor7: "none",
                bgcolor8: "none",
            });
        } else if (event.target.name === "bgColor4") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "none",
                bgcolor3: "none",
                bgcolor4: "primary",
                bgcolor5: "none",
                bgcolor6: "none",
                bgcolor7: "none",
                bgcolor8: "none",
            });
        } else if (event.target.name === "bgColor5") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "none",
                bgcolor3: "none",
                bgcolor4: "none",
                bgcolor5: "primary",
                bgcolor6: "none",
                bgcolor7: "none",
                bgcolor8: "none",
            });
        } else if (event.target.name === "bgColor6") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "none",
                bgcolor3: "none",
                bgcolor4: "none",
                bgcolor5: "none",
                bgcolor6: "primary",
                bgcolor7: "none",
                bgcolor8: "none",
            });
        } else if (event.target.name === "bgColor7") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "none",
                bgcolor3: "none",
                bgcolor4: "none",
                bgcolor5: "none",
                bgcolor6: "none",
                bgcolor7: "primary",
                bgcolor8: "none",
            });
        } else if (event.target.name === "bgColor8") {
            setBgColor({
                bgcolor1: "none",
                bgcolor2: "none",
                bgcolor3: "none",
                bgcolor4: "none",
                bgcolor5: "none",
                bgcolor6: "none",
                bgcolor7: "none",
                bgcolor8: "primary",
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
            <Wraps>
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
                <WrapRight>
                    {" "}
                    <ButtonToggle
                        style={{ border: "1px solid black" }}
                        name="bgColor4"
                        color={bgColor.bgcolor4}
                        onClick={handleChange}
                    >
                        ATM
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black" }}
                        name="bgColor5"
                        color={bgColor.bgcolor5}
                        onClick={handleChange}
                    >
                        OVO
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black" }}
                        name="bgColor6"
                        color={bgColor.bgcolor6}
                        onClick={handleChange}
                    >
                        Go-Pay
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black" }}
                        name="bgColor7"
                        color={bgColor.bgcolor7}
                        onClick={handleChange}
                    >
                        LinkAja
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black" }}
                        name="bgColor8"
                        color={bgColor.bgcolor8}
                        onClick={handleChange}
                    >
                        Dana
                    </ButtonToggle>
                </WrapRight>
            </Wraps>
        </div>
    );
}

export default PaymentMethod;
