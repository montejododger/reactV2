import React from "react";

import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import Users from "./components/Users";
import Profile from "./components/Profile";

import Product from "./components/Product";
import ProductShow from "./components/ProductShow";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
    const hanleClick = () => {
        console.log("Thanks for clicking");
    };
    return (
        <BrowserRouter>
            <div>
                <NavLink exact={true} activeClassName="red" to="/">
                    App
                </NavLink>
                <NavLink activeClassName="blue" to="/users">
                    Users
                </NavLink>
                <NavLink activeClassName="green" to="/users/1">
                    Andrew's Profile
                </NavLink>
                <NavLink to="/" onClick={hanleClick}>
                    App with click handler
                </NavLink>


                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route path="/users/:userId">
                        <Profile />
                    </Route>
                    <Route exact path="/products">
                        <Product />
                    </Route>
                    <Route exact path="/products/:productId">
                        <ProductShow />
                    </Route>
                    <Route>
                        <h1>404: Page not found</h1>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

const renderApp = () => {
    root.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    );
};

renderApp();
