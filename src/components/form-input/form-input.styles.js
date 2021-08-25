import styled, { css } from 'styled-components';

const errorContainerStyles = css`
  border-color: var(--error-color);
`;

const errorLabelStyles = css`
  color: var(--error-color);
`;

const shrinkLabelStyles = css`
  top: -6px;
  font-size: 12px;
  color: var(--primary-color);
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: var(--primary-color);
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--disabled-color);
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
  color: var(--error-color);
  position: absolute;
  margin-top: -20px;
  margin-left: 5px;
`;

FormInputError.displayName = 'FormInputError';

export const FormInputLabel = styled.label`
  color: var(--disabled-color);
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
