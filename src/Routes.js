import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import Home from "./pages/home";
import SignIn from "./user/SignIn";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute exact path="/admin/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/home">
          <Home/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
