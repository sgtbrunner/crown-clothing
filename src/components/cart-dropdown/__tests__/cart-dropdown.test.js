import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { EMPTY_CART_MESSAGE, BUTTON } from '../../../utils/constants.utils';
import CartDropdown from '../cart-dropdown.component';

jest.mock('react-router-dom', () => ({
  withRouter: (component) => component,
}));

const mockStore = configureMockStore();
let store = mockStore({
  cart: {
    cartItems: [],
  },
});

const newCartItems = [
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
];

const props = {
  history: {
    push: jest.fn(),
  },
  dispatch: jest.fn(),
};

const ITEM = 'item';
const CHECKOUT = 'CHECKOUT';

const mountComponent = () =>
  render(
    <Provider store={store}>
      <CartDropdown {...props} />
    </Provider>
  );

describe('CartDropdown component', () => {
  it('should render component snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the empty cart message if cart holds no items', () => {
    mountComponent();

    const cartDropdownMessage = screen.getByText(EMPTY_CART_MESSAGE);
    const cartDropdownItems = screen.queryAllByAltText(ITEM);

    expect(cartDropdownMessage).toBeInTheDocument();
    expect(cartDropdownItems.length).toBe(0);
  });

  it('should render 2 (two) items on the dropdown if cart holds 2 (two) items', () => {
    store = mockStore({
      cart: {
        cartItems: newCartItems,
      },
    });

    mountComponent();

    const cartDropdownMessage = screen.queryByText(EMPTY_CART_MESSAGE);
    const cartDropdownItems = screen.getAllByAltText(ITEM);

    expect(cartDropdownMessage).not.toBeInTheDocument();
    expect(cartDropdownItems).toHaveLength(2);
  });

  it('should render the checkout button', () => {
    mountComponent();

    const checkoutButton = screen.getByRole(BUTTON, { name: CHECKOUT });
    expect(checkoutButton).toBeInTheDocument();
  });

  it('should redirect to checkout page on checkout button click', () => {
    mountComponent();

    const checkoutButton = screen.getByRole(BUTTON, { name: CHECKOUT });
    userEvent.click(checkoutButton);

    expect(props.history.push).toHaveBeenCalled();
  });
});
