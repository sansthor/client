import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardComponent from '../CardComponent/CardComponent';
import { fetchGetBestCategory } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Card.css';

const Wrap = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 25px 25px 100px 25px;

`;

const Image = Styled.div`

    margin-top: 40px;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
   &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   }
`;
function CardPopular() {
    const dispatch = useDispatch();
    const best = useSelector((state) => state.bestcategory);

    useEffect(() => {
        dispatch(fetchGetBestCategory());
    }, [dispatch]);
    return (
        <div>
            <h1 className="title" align="center">
                Kategori Layanan Favorit
            </h1>
            <Wrap>
                <React.Fragment>
                    {best.data !== undefined &&
                        best.data.map((item) => {
                            return (
                                <Image data-aos="fade-right" key={item._id}>
                                    <Link to={`/detail-offer/${item._id}`}>
                                        <CardComponent
                                            id={item._id}
                                            title={item.title}
                                            image={item.image}
                                        />
                                    </Link>
                                </Image>
                            );
                        })}
                </React.Fragment>
            </Wrap>
        </div>
    );
}

export default CardPopular;
