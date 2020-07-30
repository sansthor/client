import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { ButtonToggle } from "reactstrap";
import Styled from "styled-components";

const Wrap = Styled.div`
margin:10px;
text-align: center;
border:1px solid black;
padding:100px;
margin:100px;
`;
function PaymentModal() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Wrap>
                <CheckCircleIcon style={{ fontSize: "200px" }} />
                <h3 style={{ margin: "10px 0" }}>Payment Succesfull</h3>
                <ButtonToggle color="primary">Back To Home</ButtonToggle>
            </Wrap>
        </div>
    );
}

export default PaymentModal;
