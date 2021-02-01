import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import  Header  from "./components/header/header.component";
import SignInandSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
