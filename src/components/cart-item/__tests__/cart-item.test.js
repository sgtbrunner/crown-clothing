import React from 'react';
import { render, screen } from '@testing-library/react';

import CartItem from '../cart-item.component';

const props = {
  id: 1,
  price: 10,
  name: 'Item',
  quantity: 2,
  imageUrl: 'https://www.myimage.com/item',
};

const mountComponent = () => render(<CartItem item={props} />);

describe('CartItem component', () => {
  it('should match component snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the item image', () => {
    mountComponent();

    const image = screen.getByAltText('item');
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', props.imageUrl);
  });

  it('should render the item details', () => {
    mountComponent();

    const itemName = screen.getByText(props.name);
    expect(itemName).toBeInTheDocument();

    const itemQuantPrice = screen.getByText(
      `${props.quantity} x $${props.price}`
    );
    expect(itemQuantPrice).toBeInTheDocument();
  });
});
