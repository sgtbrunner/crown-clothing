import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import CartIcon from '../cart-icon.component';

const mockStore = configureMockStore();
const store = mockStore({
  cart: {
    cartItems: [
      {
        id: 1,
        price: 10,
        name: 'Item 1',
        quantity: 2,
        imageUrl: '',
      },
      {
        id: 2,
        price: 20,
        name: 'Item 2',
        quantity: 3,
        imageUrl: '',
      },
    ],
  },
});

const FIGURE = 'figure';

const mountComponent = () =>
  render(
    <Provider store={store}>
      <CartIcon />
    </Provider>
  );

describe('CartIcon component', () => {
  beforeEach(() => {
    mountComponent();
  });

  it('should render the icon within the component', () => {
    const cartIcon = screen.getByRole(FIGURE);

    expect(cartIcon).toHaveTextContent('shopping-bag.svg');
  });

  it('should render 5 (five) as the item count when the redux store has 5 items', () => {
    const cartIcon = screen.getByRole(FIGURE);

    expect(cartIcon).toHaveTextContent(5);
  });
});
