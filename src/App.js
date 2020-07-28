import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';

import reducers from "./redux/reducers";
import PrivateRoute from "./helpers/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import LandingPages from "./pages/LandinPages/LandingPages";
import Footer from "./components/Footer/Footer";
import CatalogService from "./pages/CatalogService/CatalogService";
import DetailOffer from "./pages/DetailOffer/DetailOffer";

function App() {
    return (
        <div>
            {/* <Footer /> */}
            <Header />
            {/* <LandingPages /> */}
            {/* <CatalogService /> */}
            {/* <DetailOffer /> */}
        </div>
        // <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        //     {/* <Router>
        // <Switch>
        //   {/* <Route exact path="/">
        //                 <Home />
        //             </Route>
        //             <Route exact path="/register">
        //                 <Register />
        //             </Route>
        //             <Route exact path="/login">
        //                 <Login />
        //             </Route>
        //             <PrivateRoute exact path="/userPage">
        //                 <ListRestaurant />
        //             </PrivateRoute>
        //             <PrivateRoute exact path="/restaurants/:id">
        //                 <DescriptionRestaurants />
        //             </PrivateRoute> */}
        //     {/* </Switch> */}
        //     {/* </Router>  */}
        // </Provider>
    );
}

export default App;
