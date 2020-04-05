import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from 'pages/dashboard';
import Product from 'pages/products';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/products" component={Product} />
        </Switch>
    )
}