import React, { useState } from "react";
import { ButtonToggle, Jumbotron, Container } from "reactstrap";
import Styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// --- Styled Components ---
const FlexColumn = Styled.div`
display: flex;
flex-direction: column;
`;
const WrapLeft = Styled.div`
display: flex;
flex-direction: column;
width: 65%;
`;
const WrapRight = Styled.div`
display: flex;
flex-direction: column;
width: 10%;
`;
const Wraps = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 50px;
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
            <Header />
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Select Payment Method</h1>
                </Container>
            </Jumbotron>
            <Wraps>
                <WrapLeft>
                    <div
                        style={{
                            margin: "0 0 40px 0",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <ButtonToggle
                            style={{
                                border: "1px solid black",
                                padding: "10px",
                                width: "13rem",
                            }}
                            name="bgColor1"
                            color={bgColor.bgcolor1}
                            onClick={handleChange}
                        >
                            CreditCard
                        </ButtonToggle>
                        <ButtonToggle
                            style={{
                                border: "1px solid black",
                                padding: "10px",
                                width: "13rem",
                            }}
                            name="bgColor2"
                            color={bgColor.bgcolor2}
                            onClick={handleChange}
                        >
                            Paypal
                        </ButtonToggle>
                        <ButtonToggle
                            style={{
                                border: "1px solid black",
                                padding: "10px",
                                width: "13rem",
                            }}
                            name="bgColor3"
                            color={bgColor.bgcolor3}
                            onClick={handleChange}
                        >
                            Amazon Payment
                        </ButtonToggle>
                    </div>
                    {/*  */}
                    <FlexColumn>
                        <input
                            type="text"
                            style={{ marginBottom: "40px", padding: "10px" }}
                        />
                        <input
                            type="number"
                            style={{ marginBottom: "40px", padding: "10px" }}
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <input style={{ padding: "5px", width: "15rem" }} />
                            <input style={{ padding: "5px", width: "15rem" }} />
                            <input style={{ padding: "5px", width: "15rem" }} />
                        </div>
                    </FlexColumn>
                </WrapLeft>
                <WrapRight>
                    {" "}
                    <ButtonToggle
                        style={{ border: "1px solid black", padding: "17px" }}
                        name="bgColor4"
                        color={bgColor.bgcolor4}
                        onClick={handleChange}
                    >
                        ATM
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black", padding: "17px" }}
                        name="bgColor5"
                        color={bgColor.bgcolor5}
                        onClick={handleChange}
                    >
                        OVO
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black", padding: "17px" }}
                        name="bgColor6"
                        color={bgColor.bgcolor6}
                        onClick={handleChange}
                    >
                        Go-Pay
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black", padding: "17px" }}
                        name="bgColor7"
                        color={bgColor.bgcolor7}
                        onClick={handleChange}
                    >
                        LinkAja
                    </ButtonToggle>
                    <ButtonToggle
                        style={{ border: "1px solid black", padding: "17px" }}
                        name="bgColor8"
                        color={bgColor.bgcolor8}
                        onClick={handleChange}
                    >
                        Dana
                    </ButtonToggle>
                </WrapRight>
            </Wraps>
            <Footer />
        </div>
    );
}

export default PaymentMethod;
