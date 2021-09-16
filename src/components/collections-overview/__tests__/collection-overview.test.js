import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import CollectionOverview from '../collections-overview.component';

const mockStore = configureMockStore();

const collections = [
  {
    id: '1',
    routeName: 'jackets',
    title: 'Jackets',
    items: [
      {
        id: 1,
        price: 10,
        name: 'Jacket 1',
        imageUrl: 'https://www.myimage.com/jacket1',
      },
      {
        id: 2,
        price: 20,
        name: 'Jacket 2',
        imageUrl: 'https://www.myimage.com/jacket2',
      },
    ],
  },
  {
    id: '2',
    routeName: 'shoes',
    title: 'Shoes',
    items: [
      {
        id: 1,
        price: 100,
        name: 'Shoes 1',
        imageUrl: 'https://www.myimage.com/shoes1',
      },
    ],
  },
];

const store = mockStore({
  shop: {
    collections,
  },
});

const mountComponent = () =>
  render(
    <Provider store={store}>
      <Router basename="/">
        <CollectionOverview />
      </Router>
    </Provider>
  );

describe('CollectionOverview component', () => {
  it('should match component snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render 2 (two) collection previews', () => {
    mountComponent();

    const previews = screen.getAllByTestId('collection-preview');
    expect(previews).toHaveLength(2);
  });

  it('should match rendered collection previews', () => {
    mountComponent();

    collections.forEach((collection) => {
      const collectionTitle = screen.getByRole('link', {
        name: collection.title.toUpperCase(),
      });
      expect(collectionTitle).toBeInTheDocument();
    });
  });

  it('should render 3 (three) collection items in total', () => {
    mountComponent();

    const items = screen.getAllByTestId('collection-item');
    expect(items).toHaveLength(3);
  });
});
