import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  &:hover {
    background-color: var(--white-color);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;

const invertedButtonStyles = css`
  background-color: var(--white-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
    border: none;
  }
`;

const googleSignInStyles = css`
  color: var(--white-color);
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  &:hover {
    color: var(--secondary-color);
    background-color: var(--white-color);
    border: 1px solid var(--secondary-color);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInStyles;

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: var(--default-font-family);
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
  &:disabled {
    color: var(--white-color);
    background-color: var(--disabled-color);
    cursor: default;
    border: none;
  }
`;
