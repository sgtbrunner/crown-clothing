import React from 'react';
import { render, screen } from '@testing-library/react';

import { BUTTON } from '../../../utils/constants.utils';
import CustomButton from '../custom-button.component';

const props = {
  children: 'Custom Button',
};

const mountComponent = (newProps = {}) =>
  render(<CustomButton {...props} {...newProps} />);

describe('CustomButton component', () => {
  it('should render component snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render component label accordingly', () => {
    mountComponent();

    const button = screen.getByRole(BUTTON, { name: props.children });
    expect(button).toBeInTheDocument();
  });
});
