import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import CollectionItem from '../collection-item.component';

const mockStore = configureMockStore();

const props = {
  item: {
    price: 10,
    name: 'Item',
    imageUrl: 'https://www.myimage.com/item',
  },
  addItem: jest.fn(),
};

const mountComponent = () =>
  render(
    <Provider store={mockStore({})}>
      <CollectionItem {...props} />
    </Provider>
  );

describe('CollectionItem component', () => {
  const { name, price } = props.item;

  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render collection item', () => {
    mountComponent();

    const collectionItem = screen.getByTestId('collection-item');
    expect(collectionItem).toBeInTheDocument();
  });

  it('should render collection item image', () => {
    mountComponent();

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should render collection item text', () => {
    mountComponent();

    const itemText = screen.getByText(name);
    expect(itemText).toBeInTheDocument();
  });

  it('should render collection item price', () => {
    mountComponent();

    const itemPrice = screen.getByText(`$${price}`);
    expect(itemPrice).toBeInTheDocument();
  });

  it('should render "Add to cart" button', () => {
    mountComponent();

    const addButton = screen.getByText('Add to cart');
    expect(addButton).toBeInTheDocument();
  });
});
