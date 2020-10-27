import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../services/firebase.service';

import './sign-in.styles.scss';

const SignIn = () => {
  const INITIAL_STATE = { email: '', password: '' };
  const [credentials, setCredentials] = useState(INITIAL_STATE);
  const { email, password } = credentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      auth.signInWithEmailAndPassword(email, password);
      setCredentials(INITIAL_STATE);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email"
          type="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          handleChange={handleChange}
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
