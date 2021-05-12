import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "../src/components/PrivateRoute";
import BagsContextProvider from "./contexts/BagsContext";
import Header from "./components/Header/Header";
import AuthContextProvider from "./contexts/AuthContext";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/LogIn/Login";
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";
import Modal from "./components/Edit/Modal";
import BagsListForUser from "./components/BagsListForUser/BagsListForUser";
// import BagListForUser from "./components/BagListForUser/BagListForUser";
import Cart from "./components/Cart/Cart";

import Footer from "./components/Footer/Footer";

import Checkout from "./components/AddressForm/Checkout";
import BagsListForAdmin from "./components/BagsListForAdmin/BagsListForAdmin1";

const Routes = () => {
  return (
    <AuthContextProvider>
      <BagsContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path="/admin" component={Admin} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/payment" component={Checkout} />
            <Route exact path="/details" component={Details} />
            {/* <Route exact path="/signup" component={SignUp} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/modal" component={Modal} />
            <Route exact path="/store" component={BagsListForAdmin} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </BagsContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;
