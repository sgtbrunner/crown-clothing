import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default CustomButton;
