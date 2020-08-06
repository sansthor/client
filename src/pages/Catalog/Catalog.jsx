import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllServices } from '../../redux/actions';
import CardComponentsCategories from '../../components/CardComponent/CardComponentsCategories';

function Catalog() {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.getallservices);
    console.log(services, 'all sevices');
    useEffect(() => {
        dispatch(fetchGetAllServices());
    }, [dispatch]);
    return (
        <div>
            <div class="container " style={{ minHeight: '100vh' }}>
                <h2 class="title has-text-centered">Cari Disini</h2>
                <div class="columns">
                    <div class="column"></div>
                    <div class="column is-three-fifths">
                        <div class="panel-block">
                            <p class="control has-icons-left">
                                <input
                                    class="input is-primary"
                                    type="text"
                                    placeholder="Search"
                                />
                                <span class="icon is-left">
                                    <i
                                        class="fas fa-search"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="column"></div>
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
                                            name={item.userID.username}
                                            avatar={item.userID.avatar}
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
