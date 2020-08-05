import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

import Register from './components/Register/Register';
import RegisTalent from './components/RegisTalent/RegisTalent';
import Profile from './pages/Profile/Profile';
import NavbarUser from './components/Navbar/NavbarUser';
import Dashboard from './pages/Dashboard/Dashboard';
import MyServices from './pages/MyServices/MyServices';
import Order from './pages/Order/Order';
import DetailOffer from './pages/DetailOffer/DetailOffer';
import Navbar from './components/Navbar/Navbar';
function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Header />
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
                        <Profile />
                    </Route>
                    <Route exact path="/history">
                        <Profile />
                    </Route>
                    {/* <Route exact path="/catalog">
                        <NavbarUser />
                        <Catalog />
                    </Route> */}
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/myservices">
                        <MyServices />
                    </Route>
                    <Route exact path="/order">
                        <Order />
                    </Route>
                    <Route exact path="/detailoffer">
                        <DetailOffer />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
