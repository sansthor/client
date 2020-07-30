import React from "react";
// import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';

// import reducers from "./redux/reducers";
// import PrivateRoute from "./helpers/PrivateRoute";
// import Header from "./components/Header/Header";
// import LandingPages from "./pages/LandinPages/LandingPages";
// import Footer from "./components/Footer/Footer";
// import AddOffer from "./components/AddOffer/AddOffer";
import HalamanTalent from "./pages/HalamanTalent/HalamanTalent";
// import CatalogService from "./pages/CatalogService/CatalogService";
// import DetailOffer from "./pages/DetailOffer/DetailOffer";
// import PaymentMethod from "./pages/PaymentMethod/PaymentMethod";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Work /> */}
      <HalamanTalent />
      {/* <AddOffer /> */}
      {/* <Footer /> */}
      {/* <Provider>
          <Router> */}
      {/* <Switch> */}
      {/* <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute exact path="/userPage">
                            <ListRestaurant />
                        </PrivateRoute>
                        <PrivateRoute exact path="/restaurants/:id">
                            <DescriptionRestaurants />
                        </PrivateRoute> */}
      {/* //     </Switch>
        //   </Router>
        // </Provider> */}
    </div>
  );
}

export default App;
