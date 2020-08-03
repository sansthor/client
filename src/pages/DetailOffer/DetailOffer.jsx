import React from 'react';
import Header from '../../components/Header/Header';
import Styled from 'styled-components';
import { Form, CustomInput, ButtonToggle } from 'reactstrap';
import Footer from '../../components/Footer/Footer';
// --- Styled Components ---
const Container = Styled.div`
padding: 100px;
`;
const Wraps = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
@media (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    }
`;
const ContentWrapLeft = Styled.div`
display: flex;
flex-direction: column;
width: 60%;

@media (max-width: 940px) {
    width: 100%;
    margin-top: 30px;
    }
`;
const ContentWrapRight = Styled.div`
display: flex;
flex-direction: column;
width: 25%;

@media (max-width: 940px) {
    width: 100%;
    margin-top: 30px;
    }
`;
const ContentWrapDetail = Styled.div`
display: flex;
`;

const ImageWrap = Styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
`;
const Tittle = Styled.h1`
margin-left: 2rem;
@media (max-width: 960px) {
    text-align: center;
    }
@media (max-width: 600px) {
    
    margin-left: 1px;
    }
`;
// --- Styled Components ---

function DetailOffer() {
    return (
        <div>
            <Container>
                <Tittle>Tittle Product</Tittle>
                <Wraps>
                    <ContentWrapLeft>
                        <ContentWrapDetail>
                            <p>Pembuat</p>
                            <span style={{ margin: '0 5px' }}>||</span>
                            <span>Price</span>
                        </ContentWrapDetail>

                        <ImageWrap>
                            <div style={{ width: '50%' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                                    alt="images-product"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div style={{ padding: '1rem' }}>
                                <h2>Description</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Id asperiores facere nam
                                    doloribus dolorem, maiores rerum consectetur
                                    consequuntur. Voluptates distinctio sequi
                                    nihil explicabo impedit. Reprehenderit
                                    fugiat fuga odio animi sit.
                                </p>
                            </div>
                        </ImageWrap>
                    </ContentWrapLeft>
                    <ContentWrapRight>
                        <ContentWrapDetail>
                            <p>Offer Feature</p>
                        </ContentWrapDetail>

                        <ContentWrapDetail>
                            <Form
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid gray',
                                    padding: '25px',
                                }}
                            >
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
                                <ButtonToggle
                                    color="primary"
                                    style={{ marginTop: '30px' }}
                                >
                                    Buy
                                </ButtonToggle>
                            </Form>
                        </ContentWrapDetail>
                    </ContentWrapRight>
                </Wraps>
            </Container>
            <Footer />
        </div>
    );
}

export default DetailOffer;
