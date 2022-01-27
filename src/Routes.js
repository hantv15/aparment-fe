import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import SignIn from "./user/SignIn";
import DepartmentList from "./admin/department/DepartmentList";
import DepartmentFormAdd from "./admin/department/Form/DepartmentFormAdd";
import DepartmentFormEdit from "./admin/department/Form/DepartmentFormEdit";
import NotFound from "./pages/NotFound";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />

        <PrivateRoute exact path="/admin/dashboard">
            <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/department">
          <DepartmentList />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/department/add">
          <DepartmentFormAdd/>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/department/edit/:id">
          <DepartmentFormEdit/>
        </PrivateRoute>
        <Route exact path="*" component={NotFound} />
      </Switch>

    </Router>
  );
};

export default Routes;
