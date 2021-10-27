import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import Directory from '../directory.component';

const mockStore = configureMockStore();

const sections = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'jackets',
  },
  {
    title: 'shoes',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shoes',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'womens',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'mens',
  },
];

const store = mockStore({
  directory: {
    sections,
  },
});

const mountComponent = () =>
  render(
    <Provider store={store}>
      <Router basename="/">
        <Directory />
      </Router>
    </Provider>
  );

describe('Directory component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render five (5) menu items', () => {
    mountComponent();

    const menuItems = screen.getAllByTestId('menu-item');
    expect(menuItems).toHaveLength(5);
  });
});
