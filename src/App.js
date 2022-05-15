import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import {Route, Switch} from 'react-router-dom'
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Admin from './Pages/Admin'
import Checkout from "./Pages/Checkout";
import Fotter from "./Components/Fotter";
function App() {
  return (
    <div className="App">
     <Nav/>
     <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/productlist">
        <ProductList/>
      </Route>
      <Route path="/productdetails/:id">
      <ProductDetails/>
      </Route>
      <Route path= "/admin/Joe/558231/">
        <Admin/>
      </Route>
      <Route path= "/checkout">
        <Checkout/>
      </Route>
     </Switch>
     <Fotter/>
    </div>
  );
}

export default App;
