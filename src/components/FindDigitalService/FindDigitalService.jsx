import React from "react";
import Styled from "styled-components";
import { Button, Input } from "reactstrap";
// --Styledcomponent--
const SearchWrappers = Styled.div`
display: flex;
flex direction: row;
justify-content: space-between;
margin: 10px 200px;
`;

const Wrap = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const Cards = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 25%;
opacity: 1;
cursor: pointer;
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    opacity: 0.9;
}
`;

const CardsWrap = Styled.div`
margin: 50px 0;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const Images = Styled.img`
width: 100%;

}
`;
// --Styledcomponent--

function FindDigitalService() {
    return (
        <div>
            <Wrap>
                <h2 style={{ alignSelf: "center" }}>
                    Find Digital Services...
                </h2>
                <div>
                    <SearchWrappers>
                        <Input
                            style={{ marginRight: "1rem" }}
                            placeholder="Search..."
                        />

                        <Input
                            style={{ width: "40%", marginRight: "1rem" }}
                            type="select"
                            name="select"
                        >
                            <option>Data Scientist</option>
                            <option>Web Developer</option>
                            <option>Designer</option>
                            <option>Web Design</option>
                            <option>DevOps</option>
                        </Input>
                        <Button color="danger">Find</Button>
                    </SearchWrappers>
                </div>
            </Wrap>
            <CardsWrap>
                <Cards>
                    <Images
                        top
                        src="https://images.unsplash.com/photo-1595877244575-941ed61fb8f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt="Card image cap"
                    />
                    <div style={{ padding: "2px 16px" }}>
                        <h4>Rumah Pohon</h4>

                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </Cards>
            </CardsWrap>
        </div>
    );
}

export default FindDigitalService;
