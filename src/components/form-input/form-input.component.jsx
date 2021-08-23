import React from 'react';
import PropTypes from 'prop-types';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  FormInputError,
} from './form-input.styles';

const FormInput = ({
  label,
  value,
  showError,
  errorText,
  handleBlur,
  handleChange,
  ...props
}) => (
  <GroupContainer>
    <FormInputContainer
      className={showError ? 'error' : ''}
      onBlur={handleBlur}
      onChange={handleChange}
      {...props}
    />
    <FormInputLabel
      className={`${value.length ? 'shrink' : ''} ${showError ? 'error' : ''}`}
    >
      {label}
    </FormInputLabel>
    {showError && <FormInputError role="alert">{errorText}</FormInputError>}
  </GroupContainer>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  errorText: PropTypes.string,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
};

FormInput.defaultProps = {
  showError: false,
  errorText: '',
  handleBlur: () => {},
  handleChange: () => {},
};

export default FormInput;
