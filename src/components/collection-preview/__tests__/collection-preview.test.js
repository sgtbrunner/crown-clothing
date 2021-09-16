import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import CollectionPreview from '../collection-preview.component';

const IMG = 'img';

const props = {
  title: 'Jackets',
  items: [
    {
      id: 1,
      price: 10,
      name: 'Jacket 1',
      imageUrl: 'https://www.myimage.com/item1',
    },
    {
      id: 2,
      price: 20,
      name: 'Jacket 2',
      imageUrl: 'https://www.myimage.com/item2',
    },
    {
      id: 3,
      price: 30,
      name: 'Jacket 3',
      imageUrl: 'https://www.myimage.com/item3',
    },
  ],
};

const mockStore = configureMockStore();

const mountComponent = (newProps = {}) =>
  render(
    <Provider store={mockStore({})}>
      <Router basename="/">
        <CollectionPreview {...props} {...newProps} />
      </Router>
    </Provider>
  );

describe('CollectionPreview component', () => {
  it('should match component snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the component without errors', () => {
    mountComponent();

    const component = screen.getByTestId('collection-preview');
    expect(component).toBeInTheDocument();
  });

  it('should render the collection name as title on component', () => {
    mountComponent();

    const title = screen.getByText(props.title.toUpperCase());
    expect(title).toBeInTheDocument();
  });

  it('should render 3 (three) items when props have three items', () => {
    mountComponent();

    const items = screen.getAllByRole(IMG);
    expect(items).toHaveLength(3);
  });

  it('should match rendered items', () => {
    mountComponent();

    const items = screen.getAllByTestId('collection-item');
    items.forEach((item, index) => {
      expect(item).toHaveTextContent(props.items[index].name);
      expect(item).toHaveTextContent(props.items[index].price);
    });
  });

  it('should render at maximum 4 (four) items even when props have more than four items', () => {
    mountComponent({
      items: [
        ...props.items,
        {
          id: 4,
          price: 40,
          name: 'Jacket 4',
          imageUrl: 'https://www.myimage.com/item4',
        },
        {
          id: 5,
          price: 50,
          name: 'Jacket 5',
          imageUrl: 'https://www.myimage.com/item5',
        },
      ],
    });

    const items = screen.getAllByRole(IMG);
    expect(items).toHaveLength(4);
  });
});
