import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { BUTTON } from '../../../utils/constants.utils';
import CheckoutItem from '../checkout-item.component';

const mockStore = configureMockStore();

const props = {
  cartItem: {
    id: 1,
    price: 10,
    name: 'Item',
    quantity: 2,
    imageUrl: 'https://www.myimage.com/item',
  },
  clearItemFromCart: jest.fn(),
  addItem: jest.fn(),
  removeItem: jest.fn(),
};

const mountComponent = () =>
  render(
    <Provider store={mockStore({})}>
      <CheckoutItem {...props} />
    </Provider>
  );

describe('CheckoutItem component', () => {
  const { name, quantity, price, imageUrl } = props.cartItem;

  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render checkout item image', () => {
    mountComponent();

    const image = screen.getByAltText('checkout-item');
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', imageUrl);
  });

  it('should render checkout item text', () => {
    mountComponent();

    const itemText = screen.getByText(name);
    expect(itemText).toBeInTheDocument();
  });

  it('should render decrease item count button', () => {
    mountComponent();

    const decreaseCountButton = screen.getByRole(BUTTON, { name: '❮' });
    expect(decreaseCountButton).toBeInTheDocument();
  });

  it('should render checkout item quantity', () => {
    mountComponent();

    const itemQuantity = screen.getByText(quantity.toString());
    expect(itemQuantity).toBeInTheDocument();
  });

  it('should render increase item count button', () => {
    mountComponent();

    const increaseCountButton = screen.getByRole(BUTTON, { name: '❯' });
    expect(increaseCountButton).toBeInTheDocument();
  });

  it('should render checkout item price', () => {
    mountComponent();

    const itemPrice = screen.getByText(`$${price}`);
    expect(itemPrice).toBeInTheDocument();
  });

  it('should render clear items button', () => {
    mountComponent();

    const clearItemsButton = screen.getByRole(BUTTON, { name: '✖' });
    expect(clearItemsButton).toBeInTheDocument();
  });
});
