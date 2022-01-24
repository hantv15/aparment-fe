import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "./admin/department/View";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/canho" component={ View }/>
            </Switch>
        </Router>
    )
}

export default Routes