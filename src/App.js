import React from "react";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';
import Login from './pages/Login/Login'
import RegisUser from './pages/RegisUser/RegisUser'

import reducers from "./redux/reducers/Registration";
// import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Router>
        <Switch>

          <Route exact path='/user/register'>
        <RegisUser/>
        </Route>
        <Route exact path='/user/login'>
          <Login/>
          </Route>
         
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
  );
}

export default App;
