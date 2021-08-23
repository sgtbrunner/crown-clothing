import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  auth,
  createUserProfileDocument,
} from '../../services/firebase.service';
import {
  DEFAULT_INITIAL_INPUT_FIELD_STATE,
  DISPLAY_NAME,
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
  DISPLAY_NAME_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  CONFIRM_PASSWORD_ERROR_MESSAGE,
} from '../../services/constants.utils';
import {
  capitalizeFirstLetter,
  isEmailValid,
} from '../../services/functions.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = () => {
  const INITIAL_STATE = {
    displayName: DEFAULT_INITIAL_INPUT_FIELD_STATE,
    email: DEFAULT_INITIAL_INPUT_FIELD_STATE,
    password: DEFAULT_INITIAL_INPUT_FIELD_STATE,
    confirmPassword: DEFAULT_INITIAL_INPUT_FIELD_STATE,
  };
  const [signUpInput, setSignUpInput] = useState(INITIAL_STATE);
  const { displayName, email, password, confirmPassword } = signUpInput;
  const isSignUpValid =
    displayName.isValid &&
    email.isValid &&
    password.isValid &&
    confirmPassword.isValid;

  const isFieldValid = (fieldName, value) => {
    const validators = {
      displayName: value.length > 2,
      email: isEmailValid(value),
      password: value.length >= 6,
      confirmPassword: value === password.value,
    };

    return validators[fieldName];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      await createUserProfileDocument(user, { displayName: displayName.value });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isValid = isFieldValid(name, value);
    setSignUpInput({
      ...signUpInput,
      [name]: {
        ...signUpInput[name],
        isValid,
        showError: signUpInput[name].showError && !isValid,
        value,
      },
    });
  };

  const handleBlur = (input) => {
    setSignUpInput({
      ...signUpInput,
      [input]: {
        ...signUpInput[input],
        showError: !signUpInput[input].isValid,
      },
    });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your name, email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name={DISPLAY_NAME}
          type="text"
          label="Display Name"
          value={displayName.value}
          handleBlur={() => handleBlur(DISPLAY_NAME)}
          handleChange={handleChange}
          showError={displayName.showError}
          errorText={DISPLAY_NAME_ERROR_MESSAGE}
          required
        />
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
        <FormInput
          name={CONFIRM_PASSWORD}
          type={PASSWORD}
          label="Confirm Password"
          value={confirmPassword.value}
          handleBlur={() => handleBlur(CONFIRM_PASSWORD)}
          handleChange={handleChange}
          showError={confirmPassword.showError}
          errorText={CONFIRM_PASSWORD_ERROR_MESSAGE}
          required
        />
        <CustomButton type="submit" disabled={!isSignUpValid}>
          SIGN UP
        </CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
