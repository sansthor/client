import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';
import Login from './pages/Login/Login';

import reducers from './redux/reducers';
import PrivateRoute from './helpers/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import LandingPages from './pages/LandinPages/LandingPages';
import RegisUser from './pages/RegisUser/RegisUser';
import RegisSeller from './pages/RegisSeller/RegisSeller';
import Footer from './components/Footer/Footer';
import CatalogService from './pages/CatalogService/CatalogService';
import DetailOffer from './pages/DetailOffer/DetailOffer';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory';
import Order from './components/Order/Order';
import MemberFeed from './pages/MemberFeed/MemberFeed';
import TalentFeed from './pages/TalentFeed/TalentFeed';
import PaymentModal from './pages/PaymentModal/PaymentModal';
import Jumbotron from './components/Jumbortron/Jumbortron';
import FindDigitalService from './components/FindDigitalService/FindDigitalService';
import EditProfile from './pages/EditProfile/EditProfile';
import AddlOffer from './pages/AddOffer/AddOffer';
import TalentComponent from './components/TalentComponent/TalentComponent';

function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <LandingPages />
                    </Route>
                    <Route exact path="/user/register">
                        <RegisUser />
                    </Route>
                    <Route exact path="/user/register/talent">
                        <RegisSeller />
                    </Route>
                    <Route exact path="/user/login">
                        <Login />
                    </Route>
                    <Route exact path="/user/member">
                        <MemberFeed />
                    </Route>
                    <Route exact path="/user/talent">
                        <TalentFeed />
                    </Route>
                    <Route exact path="/service/catalog">
                        <CatalogService />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
