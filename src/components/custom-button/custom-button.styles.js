import styled, { css } from 'styled-components';

const BLACK = 'black';
const WHITE = 'white';

const buttonStyles = css`
  background-color: ${BLACK};
  color: ${WHITE};
  border: none;
  &:hover {
    background-color: ${WHITE};
    color: ${BLACK};
    border: 1px solid ${BLACK};
  }
`;

const invertedButtonStyles = css`
  background-color: ${WHITE};
  color: ${BLACK};
  border: 1px solid ${BLACK};
  &:hover {
    background-color: ${BLACK};
    color: ${WHITE};
    border: none;
  }
`;

const googleSignInStyles = css`
  color: ${WHITE};
  background-color: #4285f4;
  border: 1px solid #4285f4;
  &:hover {
    color: #4285f4;
    background-color: ${WHITE};
    border: 1px solid #4285f4;
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
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
  &:disabled {
    color: ${WHITE};
    background-color: gray;
    cursor: default;
    border: none;
  }
`;
