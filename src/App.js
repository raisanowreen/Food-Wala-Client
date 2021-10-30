import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
// import Food from './Pages/Food/Food';
import Banner from './Pages/Home/Banner/Banner';
import FoodOptions from './Pages/Home/FoodOptions/FoodOptions';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddItem from './Pages/AddItem/AddItem';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
<Home></Home>
          </Route>
          <Route exact path="/home">
<Home></Home>
          </Route>
          <Route exact path="/banner">
<Banner></Banner>
          </Route>
          <Route exact path="/foodOptions">
<FoodOptions></FoodOptions>
          </Route>
          {/* <Route exact path="/food">
<Food></Food>
          </Route> */}
          <PrivateRoute exact path="/placeOrder/:foodId">
<PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="/login">
<Login></Login>
          </Route>
          <Route exact path="/addItem">
<AddItem></AddItem>
          </Route>
          <Route exact path="/myOrders">
<MyOrders></MyOrders>
          </Route>
          <Route exact path="/manageAllOrders">
<ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="*">
<NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    
  );
}

export default App;
