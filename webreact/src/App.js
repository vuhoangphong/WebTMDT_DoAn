//import logo from './logo.svg';
import "./App.css";
import home from "./component/home/home.jsx";
import admin from "./component/admin/admin.jsx";
import detail from "./component/detail/detail.jsx";
import login from "./component/login/login.jsx";
import profileShop from "./component/profileShop/profileShop.jsx";
import profileUser from "./component/profileUser/profileUser";
import register from "./component/register/register";
import search from "./component/search/search";
import registershop from "./component/shop/RegisterShop/registershop";
import loginshop from "./component/shop/LoginShop/loginshop";
import cart from "./component/cart/cart.jsx";
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
          <Route path="/registershop" component={registershop} />
          <Route path="/loginshop" component={loginshop} />
          <Route path="/cart" component={cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
