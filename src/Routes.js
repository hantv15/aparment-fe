import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import SignIn from "./user/SignIn";
import DepartmentList from "./admin/department/DepartmentList";
import DepartmentFormAdd from "./admin/department/Form/DepartmentFormAdd";
import DepartmentFormEdit from "./admin/department/Form/DepartmentFormEdit";
import UserList from "./admin/user/UserList";
import NotFound from "./pages/NotFound";
import UserAddForm from "./admin/user/Form/UserAddForm";
import UserEditForm from "./admin/user/Form/UserEditForm";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Switch>
          <PrivateRoute>
            <Route exact path="/admin/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/admin/department">
              <DepartmentList />
            </Route>
            <Route exact path="/admin/department/add">
              <DepartmentFormAdd />
            </Route>
            <Route exact path="/admin/department/edit/:id">
              <DepartmentFormEdit />
            </Route>
            <Route exact path="/admin/user">
              <UserList />
            </Route>
            <Route exact path="/admin/user/add">
              <UserAddForm />
            </Route>
            <Route exact path="/admin/user/edit/:id">
              <UserEditForm />
            </Route>
          </PrivateRoute>

        </Switch>
        <Route exact path="*" component={NotFound} />
      </Switch>

    </Router>
  );
};

export default Routes;
