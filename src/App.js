import React from "react";
<<<<<<< HEAD
// import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
=======
import { BrowserRouter as Router,  Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
>>>>>>> 0d33191a4c85656118f72a692ce6c8d0ccf6799d
// import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';
// import Login from './pages/Login/Login'
import RegisUser from './pages/RegisUser/RegisUser'

<<<<<<< HEAD
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
=======
import reducers from "./redux/reducers/Registration";
// import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Router>
        <Switch>
          {/* <Login/> */}
          <RegisUser/>
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
        </Switch>
      </Router>
      </Provider>
>>>>>>> 0d33191a4c85656118f72a692ce6c8d0ccf6799d
  );
}

export default App;
