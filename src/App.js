import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
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
import Order from './pages/Order/Order';
import Catalog from './pages/Catalog/Catalog';

function App() {
    return (
        <div className="App">
            <Router>
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
                        <NavbarUser />
                        <Profile />
                    </Route>
                    <Route exact path="/history">
                        <NavbarUser />
                        <Profile />
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
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
