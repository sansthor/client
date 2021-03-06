import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardComponentsCategories from './CardComponentsCategories';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetPopular } from '../../redux/actions';
import './Card.css';
function CardCategories() {
    const dispatch = useDispatch();
    const popular = useSelector((state) => state.bestpopular);

    useEffect(() => {
        dispatch(fetchGetPopular());
    }, [dispatch]);

    return (
        <div
            style={{ padding: '50px 0 100px 0', backgroundColor: '#ebebeb' }}
            data-aos="fade-up"
        >
            <h1 className="title" align="center">
                Penawaran Terbaik oleh Talent 2020
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
                data-aos="fade"
            >
                <React.Fragment>
                    {popular.data !== undefined &&
                        popular.data.map((item) => {
                            return (
                                <React.Fragment key={item._id}>
                                    <Link to={`/detail-offer/${item._id}`}>
                                        <CardComponentsCategories
                                            id={item._id}
                                            image={item.image}
                                            title={item.title}
                                            name={item.userID.username}
                                            price={item.price}
                                            avatar={
                                                item.userID.avatar === undefined
                                                    ? 'https://img.vim-cn.com/80/791e5955feca09de9cbb8437f308c09f88c9b8.png'
                                                    : item.userID.avatar
                                            }
                                        />
                                    </Link>
                                </React.Fragment>
                            );
                        })}
                </React.Fragment>
            </div>
        </div>
    );
}

export default CardCategories;
