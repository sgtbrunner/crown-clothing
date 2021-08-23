import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../services/firebase.service';
import {
  DEFAULT_INITIAL_INPUT_FIELD_STATE,
  EMAIL,
  PASSWORD,
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from '../../services/constants.utils';
import {
  capitalizeFirstLetter,
  isEmailValid,
} from '../../services/functions.utils';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = () => {
  const INITIAL_STATE = {
    email: DEFAULT_INITIAL_INPUT_FIELD_STATE,
    password: DEFAULT_INITIAL_INPUT_FIELD_STATE,
  };
  const [credentials, setCredentials] = useState(INITIAL_STATE);
  const { email, password } = credentials;
  const isSignInValid = email.isValid && password.isValid;

  const isFieldValid = (fieldName, value) => {
    const validators = {
      email: isEmailValid(value),
      password: value.length >= 6,
    };

    return validators[fieldName];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      auth.signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error });
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const isValid = isFieldValid(name, value);
    setCredentials({
      ...credentials,
      [name]: {
        ...credentials[name],
        isValid,
        showError: credentials[name].showError && !isValid,
        value,
      },
    });
  };

  const handleBlur = (input) => {
    setCredentials({
      ...credentials,
      [input]: {
        ...credentials[input],
        showError: !credentials[input].isValid,
      },
    });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name={EMAIL}
          type={EMAIL}
          label={capitalizeFirstLetter(EMAIL)}
          value={email.value}
          handleBlur={() => handleBlur(EMAIL)}
          handleChange={handleChange}
          showError={email.showError}
          errorText={EMAIL_ERROR_MESSAGE}
          required
        />
        <FormInput
          name={PASSWORD}
          type={PASSWORD}
          label={capitalizeFirstLetter(PASSWORD)}
          value={password.value}
          handleBlur={() => handleBlur(PASSWORD)}
          handleChange={handleChange}
          showError={password.showError}
          errorText={PASSWORD_ERROR_MESSAGE}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit" disabled={!isSignInValid}>
            Sign in
          </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
