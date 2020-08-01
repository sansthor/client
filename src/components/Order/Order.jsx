import React from "react";
import { Table, FormGroup, Label, Input, Button } from "reactstrap";
import Styled from "styled-components";

// --- Styled components ---

const Wraps = Styled.div`
padding: 50px 50px;
border: 1px solid black;
margin: 100px;
`;
// --- Styled components ---
function Order() {
    return (
        <div>
            <Wraps>
                <Table bordered>
                    <thead>
                        <tr>
                            <th style={{ width: "60%" }}>PESANAN</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Design web buat company animekit</td>
                            <td>
                                {" "}
                                <FormGroup
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Input
                                        style={{ width: "70%" }}
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                    >
                                        <option>Ongoing</option>
                                        <option>Done</option>
                                    </Input>
                                    <Button color="primary">Confirm</Button>
                                </FormGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Wraps>
        </div>
    );
}

export default Order;
