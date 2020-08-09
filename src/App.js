import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

import Register from './components/Register/Register';
import RegisTalent from './components/RegisTalent/RegisTalent';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import MyServices from './pages/MyServices/MyServices';
import RiwayatPembelian from './pages/RiwayatPembelian/RiwayatPembelian';
import Order from './pages/Order/Order';
import Catalog from './pages/Catalog/Catalog';
import EditProfile from './pages/EditProfile/EditProfile';
import EditBank from './pages/EditBank/EditBank';
import EditProfileTalent from './pages/EditProfileTalent/EditProfileTalent';
import DetailOffer from './pages/DetailOffer/DetailOffer';
import Payment from './pages/Payment/Payment';
import PaymentReport from './pages/Payment/PaymentReport';
import AddOffer from './pages/AddOffer/AddOffer';

import Navbar from './components/Navbar/Navbar';
import Bantuan from './components/Bantuan/Bantuan';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <PrivateRoute exact path="/register/talent">
                        <RegisTalent />
                    </PrivateRoute>
                    <PrivateRoute exact path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute exact path="/profile/edit">
                        <EditProfile />
                    </PrivateRoute>
                    <PrivateRoute exact path="/profile/edit/talent">
                        <EditProfileTalent />
                    </PrivateRoute>
                    <PrivateRoute exact path="/profile/bank">
                        <EditBank />
                    </PrivateRoute>
                    <PrivateRoute exact path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute exact path="/history">
                        <RiwayatPembelian />
                    </PrivateRoute>
                    <Route exact path="/catalog">
                        <Catalog />
                    </Route>
                    <PrivateRoute exact path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute exact path="/my-services">
                        <MyServices />
                    </PrivateRoute>
                    <PrivateRoute exact path="/order">
                        <Order />
                    </PrivateRoute>
                    <Route exact path="/detail-offer/:id">
                        <DetailOffer />
                    </Route>
                    <PrivateRoute exact path="/payment/:id">
                        <Payment />
                    </PrivateRoute>
                    <PrivateRoute exact path="/payment-report">
                        <PaymentReport />
                    </PrivateRoute>
                    <PrivateRoute exact path="/add-offer">
                        <AddOffer />
                    </PrivateRoute>
                    <Route exact path="/bantuan">
                        <Bantuan />
                    </Route>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
