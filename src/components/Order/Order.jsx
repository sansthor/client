import React from 'react';
import { Table, FormGroup, Label, Input, Button } from 'reactstrap';
import Styled from 'styled-components';

// --- Styled components ---
const TableHeading = Styled.th`
width: "60%";
@media (max-width: 700px) {
    width: 50%;
   }
`;
const Wrap = Styled.div`
border: 1px solid black;
margin: 10px;
padding: 0 0 100px 0;
`;
// --- Styled components ---
function Order() {
    return (
        <div>
            <Wrap>
                <Table bordered>
                    <thead>
                        <tr>
                            <TableHeading>PESANAN</TableHeading>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Design web buat company animekit</td>
                            <td>
                                {' '}
                                <FormGroup
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Input
                                        style={{ width: '70%' }}
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
            </Wrap>
        </div>
    );
}

export default Order;
