import React, { useEffect } from "react";
import Styled from "styled-components";
import { fetchGetAllServices } from "../../redux/actions";
import { connect } from "react-redux";
// --Styledcomponent--

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

function FindDigitalService(props) {
    // useEffect for fetching
    useEffect(() => {
        props.dispatch(fetchGetAllServices());

        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <CardsWrap>
                {props.services !== undefined &&
                    props.services.map((item) => {
                        return (
                            <Cards key={item.id}>
                                <Images
                                    top
                                    src={item.image}
                                    alt="Card image cap"
                                />
                                <div style={{ padding: "2px 16px" }}>
                                    <h4>{item.title}</h4>

                                    <p>{item.description}</p>
                                    <p>Price: {item.price}</p>
                                </div>
                            </Cards>
                        );
                    })}
            </CardsWrap>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        services: state.getallservices,
    };
};

export default connect(mapStateToProps)(FindDigitalService);
