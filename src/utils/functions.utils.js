const EMAIL_REGEX_KEY = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const capitalizeFirstLetter = (string) =>
  string[0].toUpperCase() + string.slice(1);

export const isEmailValid = (email) =>
  EMAIL_REGEX_KEY.test(String(email).toLowerCase());
