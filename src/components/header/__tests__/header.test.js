import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import Header from '../header.component';

const LINK = 'link';
const SHOP = 'SHOP';
const FIGURE = 'figure';

const mockStore = configureMockStore();

const user = {
  currentUser: null,
};

const cart = {
  hidden: true,
  cartItems: [],
};

let store = mockStore({
  user,
  cart,
});

const mountComponent = () =>
  render(
    <Provider store={store}>
      <Router basename="/">
        <Header />
      </Router>
    </Provider>
  );

describe('Header component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render Crown Clothing logo on header', () => {
    mountComponent();

    const crownClothinIcon = screen.getByRole(LINK, { name: 'crown.svg' });
    expect(crownClothinIcon).toBeInTheDocument();
  });

  it('should render divider on header', () => {
    mountComponent();

    const shopLink = screen.getByRole('separator');

    expect(shopLink).toBeInTheDocument();
  });

  it('should render "Shop" and "Sign In" page buttons if NO user is logged in', () => {
    mountComponent();

    const shopLink = screen.getByRole(LINK, { name: SHOP });
    const signInLink = screen.getByRole(LINK, { name: 'SIGN IN' });

    expect(shopLink).toBeInTheDocument();
    expect(signInLink).toBeInTheDocument();
  });

  it('should render "Shop" and "Sign Out" page buttons if ANY user is logged in', () => {
    store = mockStore({
      user: {
        currentUser: {
          id: '1234567890',
          displayName: 'Test user',
          createdAt: {},
          email: 'test@test.com',
        },
      },
      cart,
    });

    mountComponent();

    const shopLink = screen.getByRole(LINK, { name: SHOP });
    const signOutLink = screen.getByText('SIGN OUT');

    expect(shopLink).toBeInTheDocument();
    expect(signOutLink).toBeInTheDocument();
  });

  it('should render the shopping cart on header', () => {
    mountComponent();

    const shoppingCart = screen.getByRole(FIGURE);
    expect(shoppingCart).toBeInTheDocument();
    expect(shoppingCart).toHaveTextContent('shopping-bag.svg');
  });

  it('should render the shopping cart icon with 0 (zero) items count when cart is empty', () => {
    mountComponent();

    const shoppingCart = screen.getByRole(FIGURE);
    expect(shoppingCart).toBeInTheDocument();
    expect(shoppingCart).toHaveTextContent(0);
  });

  it(`should render the shopping cart icon with 3 (three) items count user has 3 items 
    on cart`, () => {
    store = mockStore({
      user,
      cart: {
        ...cart,
        cartItems: [
          {
            id: 1,
            name: 'Blue Jeans',
            price: 10,
            quantity: 2,
          },
          {
            id: 2,
            name: 'Red Jeans',
            price: 20,
            quantity: 1,
          },
        ],
      },
    });

    mountComponent();

    const shoppingCart = screen.getByRole(FIGURE);
    expect(shoppingCart).toBeInTheDocument();
    expect(shoppingCart).toHaveTextContent(3);
  });
});
