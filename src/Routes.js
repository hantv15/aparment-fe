import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import SignIn from "./components/pages/signin/SignIn";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Apartment from "./components/admin/apartment/Apartment";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Switch>
                    <PrivateRoute>
                        <Route exact path="/client">
                            <Dashboard />
                        </Route>
                        {/* <Route exact path="/admin/apartment">
                            <Apartment />
                        </Route> */}
                        {/* <Route exact path="*">
                            <NotFound />
                        </Route> */}
                    </PrivateRoute>
                </Switch>
            </Switch>
        </Router>
    )
}

export default Routes