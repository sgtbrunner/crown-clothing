import styled, { css } from 'styled-components';

const mainColor = 'black';
const subColor = 'gray';
const errorColor = 'red';

const errorContainerStyles = css`
  border-color: ${errorColor};
`;

const errorLabelStyles = css`
  color: ${errorColor};
`;

const shrinkLabelStyles = css`
  top: -6px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
  &.error {
    ${errorContainerStyles};
  }
`;

FormInputContainer.displayName = 'FormInputContainer';

export const FormInputError = styled.p`
  color: ${errorColor};
  position: absolute;
  margin-top: -20px;
  margin-left: 5px;
`;

FormInputError.displayName = 'FormInputError';

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
  &.error {
    ${errorLabelStyles};
  }
`;

FormInputLabel.displayName = 'FormInputLabel';

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

GroupContainer.displayName = 'GroupContainer';
