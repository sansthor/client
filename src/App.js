import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';
// import Login from './pages/Login/Login'
import RegisUser from "./pages/RegisUser/RegisUser";

import reducers from "./redux/reducers/Registration";
// import PrivateRoute from "./helpers/PrivateRoute";

import reducers from "./redux/reducers";
import PrivateRoute from "./helpers/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import LandingPages from "./pages/LandinPages/LandingPages";
import Footer from "./components/Footer/Footer";
import CatalogService from "./pages/CatalogService/CatalogService";
import DetailOffer from "./pages/DetailOffer/DetailOffer";
import PaymentMethod from "./pages/PaymentMethod/PaymentMethod";
import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";
import Order from "./components/Order/Order";
import MemberFeed from "./pages/MemberFeed/MemberFeed";
import TalentFeed from "./pages/TalentFeed/TalentFeed";
import PaymentModal from "./pages/PaymentModal/PaymentModal";
import Jumbotron from "./components/Jumbortron/Jumbortron";
import FindDigitalService from "./components/FindDigitalService/FindDigitalService";
function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <LandingPages /> */}
      {/* <CatalogService /> */}
      {/* <DetailOffer /> */}
      {/* <PaymentMethod /> */}
      <FindDigitalService />
      {/* <PurchaseHistory /> */}
      {/* <Order /> */}
      {/* <MemberFeed /> */}
      {/* <TalentFeed /> */}
      {/* <PaymentModal /> */}
    </Provider>
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
