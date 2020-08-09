import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllServices, fetchFilterCatalog } from '../../redux/actions';
import CardComponentsCategories from '../../components/CardComponent/CardComponentsCategories';

function Catalog() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const services = useSelector((state) => state.getallservices);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        if (input === '') {
            dispatch(fetchGetAllServices());
        } else {
            dispatch(fetchFilterCatalog(input));
        }
    }, [input, dispatch]);
    return (
        <div>
            <div
                className="container "
                style={{ minHeight: '100vh', marginBottom: '5em' }}
            >
                <h2 className="title has-text-centered">Cari Disini</h2>
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-three-fifths">
                        <div className="panel-block">
                            <p className="control has-icons-left">
                                <input
                                    className="input is-primary"
                                    type="text"
                                    placeholder="Ketik judul layanan yang dicari"
                                    value={input}
                                    onChange={handleChange}
                                />
                                <span className="icon is-left">
                                    <i
                                        className="fas fa-search"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        marginBottom: '40px',
                    }}
                >
                    {services.data !== undefined &&
                        services.data.map((item) => {
                            return (
                                <NavLink
                                    to={`/detail-offer/${item._id}`}
                                    key={item._id}
                                >
                                    <CardComponentsCategories
                                        id={item._id}
                                        image={item.image}
                                        title={item.title}
                                        name={item.userID.username}
                                        avatar={item.userID.avatar}
                                        price={item.price}
                                    />
                                </NavLink>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
