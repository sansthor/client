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
import CardSidebar from './components/SidebarHelp/CardSidebar';

import Navbar from './components/Navbar/Navbar';
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
                    <Route exact path="/register/talent">
                        <RegisTalent />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/profile/edit">
                        <EditProfile />
                    </Route>
                    <Route exact path="/profile/edit/talent">
                        <EditProfileTalent />
                    </Route>
                    <Route exact path="/profile/bank">
                        <EditBank />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/history">
                        <RiwayatPembelian />
                    </Route>
                    <Route exact path="/catalog">
                        <Catalog />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/my-services">
                        <MyServices />
                    </Route>
                    <Route exact path="/order">
                        <Order />
                    </Route>
                    <Route exact path="/detail-offer/:id">
                        <DetailOffer />
                    </Route>
                    <Route exact path="/payment/:id">
                        <Payment />
                    </Route>
                    <Route exact path="/payment-report">
                        <PaymentReport />
                    </Route>
                    <Route exact path="/add-offer">
                        <AddOffer />
                    </Route>
                    <Route exact path="/sidebar">
                        <CardSidebar />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
