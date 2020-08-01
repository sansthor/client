import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';
// import Login from './pages/Login/Login'

import reducers from "./redux/reducers";
import PrivateRoute from "./helpers/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import LandingPages from "./pages/LandinPages/LandingPages";
import Login from "./pages/Login/Login";
import RegisUser from "./pages/RegisUser/RegisUser";
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
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPages />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
