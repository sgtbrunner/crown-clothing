import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.page';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
