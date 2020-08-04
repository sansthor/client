import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Login from './pages/Login/Login';

import reducers from './redux/reducers';

import Header from './components/Header/Header';
import LandingPages from './pages/LandinPages/LandingPages';
import RegisUser from './pages/RegisUser/RegisUser';
import RegisterTalent from './pages/RegisterTalent/RegisterTalent';
import Footer from './components/Footer/Footer';
import CatalogService from './pages/CatalogService/CatalogService';
import HalamanTalent from './pages/HalamanTalent/HalamanTalent';
import AddOffer from './pages/AddOffer/AddOffer';
import DetailOffer from './pages/DetailOffer/DetailOffer';
import MemberFeed from './pages/MemberFeed/MemberFeed';
import EditProfile from './pages/EditProfile/EditProfile';

function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk, logger))}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <LandingPages />
                    </Route>
                    <Route exact path="/user/register/talent">
                        <RegisterTalent />
                    </Route>
                    <Route exact path="/user/member">
                        <MemberFeed />
                    </Route>
                    <Route exact path="/service/catalog">
                        <CatalogService />
                    </Route>
                    <Route exact path="/user/halamanTalent">
                        <HalamanTalent />
                    </Route>
                    <Route exact path="/user/addoffer">
                        <AddOffer />
                    </Route>
                    <Route exact path="/user/detailoffer">
                        <DetailOffer />
                    </Route>
                    <Route exact path="/user/editprofile">
                        <EditProfile />
                    </Route>
                    <Route exact path="/user/register">
                        <RegisUser />
                    </Route>
                    <Route exact path="/user/login">
                        <Login />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
