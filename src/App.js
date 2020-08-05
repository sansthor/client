import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import RegisTalent from './components/RegisTalent/RegisTalent';
import Profile from './pages/Profile/Profile';
import NavbarUser from './components/NavbarUser/NavbarUser';
import Dashboard from './pages/Dashboard/Dashboard';
import MyServices from './pages/MyServices/MyServices';
import RiwayatPembelian from './pages/RiwayatPembelian/RiwayatPembelian';
import Order from './pages/Order/Order';
import Catalog from './pages/Catalog/Catalog';
import EditProfile from './pages/Edit Profile/EditProfile';
import EditBank from './pages/EditBank/EditBank';
import EditProfileTalent from './pages/EditProfileTalent/EditProfileTalent';
import DetailOffer from './pages/DetailOffer/DetailOffer';
import AddOffer from './pages/AddOffer/AddOffer';

function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Navbar />
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Navbar />
                        <Register />
                    </Route>
                    <Route exact path="/register/talent">
                        <NavbarUser />
                        <RegisTalent />
                    </Route>
                    <Route exact path="/profile">
                        <NavbarUser />
                        <Profile />
                    </Route>
                    <Route exact path="/profile/edit">
                        <NavbarUser />
                        <EditProfile />
                    </Route>
                    <Route exact path="/profile/edit/talent">
                        <NavbarUser />
                        <EditProfileTalent />
                    </Route>
                    <Route exact path="/profile/bank">
                        <NavbarUser />
                        <EditBank />
                    </Route>
                    <Route exact path="/history">
                        <NavbarUser />
                        <RiwayatPembelian />
                    </Route>
                    <Route exact path="/catalog">
                        <NavbarUser />
                        <Catalog />
                    </Route>
                    <Route exact path="/dashboard">
                        <NavbarUser />
                        <Dashboard />
                    </Route>
                    <Route exact path="/myservices">
                        <NavbarUser />
                        <MyServices />
                    </Route>
                    <Route exact path="/order">
                        <NavbarUser />
                        <Order />
                    </Route>
                    <Route exact path="/detailoffer">
                        <NavbarUser />
                        <DetailOffer />
                    </Route>
                    <Route exact path="/addoffer">
                        <NavbarUser />
                        <AddOffer />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </Provider>
    );
}

export default App;
