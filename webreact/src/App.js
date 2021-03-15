//import logo from './logo.svg';
import "./App.css";
import home from "./component/home/home";
import admin from "./component/admin/admin";
import detail from "./component/detail/detail.jsx";
import login from "./component/login/login";
import profileShop from "./component/profileShop/profileShop";
import profileUser from "./component/profileUser/profileUser";
import register from "./component/register/register";
import search from "./component/search/search";
// import CheckOut from './component/checkOut/CheckOut'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Manager_Shop from "./component/manager_Shop/manager_Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/admin" component={admin} />
          <Route path="/detail" component={detail} />
          {/* <Route path="/CheckOut" component={CheckOut}/> */}
          <Route path="/login" component={login} />
          <Route path="/shop" component={Manager_Shop} />
          <Route path="/profileShop" component={profileShop} />
          <Route path="/profileUser" component={profileUser} />
          <Route path="/register" component={register} />
          <Route path="/search" component={search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
