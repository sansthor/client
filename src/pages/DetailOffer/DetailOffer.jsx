import React from "react";
import Header from "../../components/Header/Header";
import Styled from "styled-components";
import { Form, CustomInput } from "reactstrap";
// --- Styled Components ---

const Wraps = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;
const ContentWrap = Styled.div`
display: flex;
flex-direction: column;
width: 45%;
`;
const ContentWrapDetail = Styled.div`
display: flex;
`;

const ImageWrap = Styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
`;
// --- Styled Components ---

function DetailOffer() {
    return (
        <div>
            <h1>Tittle Detail Product</h1>
            <Wraps>
                <ContentWrap>
                    <ContentWrapDetail></ContentWrapDetail>
                    <ContentWrapDetail>
                        <p>@username</p>
                        <span style={{ margin: "0 5px" }}>||</span>
                        <span>Icon Star</span>
                    </ContentWrapDetail>

                    <ImageWrap>
                        <div style={{ width: "50%" }}>
                            <img
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                                alt="images-product"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div>
                            <h2>Description</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Id asperiores facere nam
                                doloribus dolorem, maiores rerum consectetur
                                consequuntur. Voluptates distinctio sequi nihil
                                explicabo impedit. Reprehenderit fugiat fuga
                                odio animi sit.
                            </p>
                        </div>
                    </ImageWrap>
                </ContentWrap>
                <ContentWrap>
                    <ContentWrapDetail>
                        <p>Offer Feature</p>
                    </ContentWrapDetail>

                    <ContentWrapDetail>
                        <Form>
                            <CustomInput
                                id="exampleCustomCheckbox"
                                type="checkbox"
                                label="Revision 2 times"
                            />
                            <CustomInput
                                id="exampleCustomCheckbox2"
                                type="checkbox"
                                label="Commercial use"
                            />
                            <CustomInput
                                id="exampleCustomCheckbox3"
                                type="checkbox"
                                label="Commercial use"
                            />
                            <ButtonToggle color="primary">primary</ButtonToggle>
                        </Form>
                    </ContentWrapDetail>
                </ContentWrap>
            </Wraps>
        </div>
    );
}

export default DetailOffer;
