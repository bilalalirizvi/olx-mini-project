import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import UserProfile from "../components/UserProfile";
import CardDetailPage from "../components/CardDetailPage";
import AddPost from "../components/AddPost";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/detailpage/:id">
            <CardDetailPage />
          </Route>
          <Route path="/userprofile">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
