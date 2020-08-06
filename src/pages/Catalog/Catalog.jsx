import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllServices } from '../../redux/actions';
import CardComponentsCategories from '../../components/CardComponent/CardComponentsCategories';

function Catalog() {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.getallservices);

    useEffect(() => {
        dispatch(fetchGetAllServices());
    }, [dispatch]);
    return (
        <div>
            <div className="container " style={{ minHeight: '100vh' }}>
                <h2 className="title has-text-centered">Cari Disini</h2>
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-three-fifths">
                        <div className="panel-block">
                            <p className="control has-icons-left">
                                <input
                                    className="input is-primary"
                                    type="text"
                                    placeholder="Search"
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
                    }}
                >
                    {services.data !== undefined &&
                        services.data.map((item) => {
                            return (
                                <React.Fragment>
                                    <NavLink to={`/detailoffer/${item._id}`}>
                                        <CardComponentsCategories
                                            key={item._id}
                                            image={item.image}
                                            title={item.title}
                                            name="LeviAckerman"
                                            avatar="https://i.pinimg.com/originals/97/54/f6/9754f6c22aeade64c3e77cf1c9406567.jpg"
                                            price={item.price}
                                        />
                                    </NavLink>
                                </React.Fragment>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
