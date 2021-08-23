import { EMAIL_REGEX_KEY } from './constants.utils';

export const capitalizeFirstLetter = (string) =>
  string[0].toUpperCase() + string.slice(1);

export const isEmailValid = (email) =>
  EMAIL_REGEX_KEY.test(String(email).toLowerCase());
