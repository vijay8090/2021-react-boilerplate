import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Counter from "./components/Counter";

import App from "./App";
import React from "react";
import Employee from "./components/employee/Employee";

export const RouterConfig = ()=> {
    return <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter Example</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employee</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/counter">
                    <Counter/>
                </Route>
                <Route path="/employees">
                    <Employee/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </div>
    </Router>
}
