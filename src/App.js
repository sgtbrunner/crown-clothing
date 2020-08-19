import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.page';
import { auth } from './services/firebase.service';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
