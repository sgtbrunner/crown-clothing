import React from 'react';
import PropTypes from 'prop-types';

import ErrorIcon from '../../../assets/error-icon.svg';
import SuccessIcon from '../../../assets/success-icon.svg';
import {
  AlertContentContainer,
  AlertContentImage,
  AlertContentMessage,
  AlertContentButton,
} from './alert-content.styles';

export const SUCCESS = 'success';
export const ERROR = 'error';

const IconMap = {
  error: ErrorIcon,
  success: SuccessIcon,
};

const isValidAlertType = (type) =>
  [SUCCESS, ERROR].some((item) => item === type);

const AlertContent = ({ children, type, onButtonClick }) => (
  <AlertContentContainer role="alert">
    <AlertContentImage
      id="alert-icon"
      src={isValidAlertType(type) ? IconMap[type] : null}
      alt="alert-icon"
    />
    <AlertContentMessage>{children}</AlertContentMessage>
    <AlertContentButton onClick={onButtonClick}>OK</AlertContentButton>
  </AlertContentContainer>
);

AlertContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf([SUCCESS, ERROR]),
  onButtonClick: PropTypes.func.isRequired,
};

export default AlertContent;
