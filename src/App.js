import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Food from './Pages/Food/Food';
import Banner from './Pages/Home/Banner/Banner';
import FoodOptions from './Pages/Home/FoodOptions/FoodOptions';
import Home from './Pages/Home/Home/Home';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
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
          <Route exact path="/food">
<Food></Food>
          </Route>
          <Route exact path="/myOrders/:foodId">
<MyOrders></MyOrders>
          </Route>
          <Route path="*">
<NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
