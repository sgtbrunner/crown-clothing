export const DEFAULT_INITIAL_INPUT_FIELD_STATE = {
  isValid: false,
  value: '',
  showError: false,
};

export const DISPLAY_NAME = 'displayName';
export const EMAIL = 'email';
export const PASSWORD = 'password';
export const CONFIRM_PASSWORD = 'confirmPassword';

export const EMAIL_REGEX_KEY = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const DISPLAY_NAME_ERROR_MESSAGE =
  'Display name must have at least 3 characters';
export const EMAIL_ERROR_MESSAGE = 'Please enter a valid email address';
export const PASSWORD_ERROR_MESSAGE =
  'Your password must be at least 6 characters long';
export const CONFIRM_PASSWORD_ERROR_MESSAGE =
  'Password and confirm password do not match';
export const UNKNOWN_ERROR =
  'An unknown error occurred. Please try again later!';
