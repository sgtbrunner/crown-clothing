import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  auth,
  createUserProfileDocument,
} from '../../services/firebase.service';
import './sign-up.styles.scss';

const SignUp = () => {
  const INITIAL_STATE = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [signUpInput, setSignUpInput] = useState(INITIAL_STATE);
  const { displayName, email, password, confirmPassword } = signUpInput;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setSignUpInput(INITIAL_STATE);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpInput({ ...signUpInput, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          label="Display Name"
          type="text"
          onChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
          value={password}
          required
        />
        <FormInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
