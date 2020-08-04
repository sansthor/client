import React from 'react';
import { Table, FormGroup, Input, Button } from 'reactstrap';
import Styled from 'styled-components';

// --- Styled components ---
const TableHeading = Styled.th`
width: "60%";
@media (max-width: 700px) {
    width: 50%;
   }
`;
const Wrap = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 50px;
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
