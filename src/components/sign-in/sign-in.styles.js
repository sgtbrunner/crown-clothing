import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const SignInWithGoogleDialogButton = styled.button`
  border: none;
  padding: 0;
  font-size: 18px;
  font-family: var(--default-font-family);
  background: none;
  color: var(--secondary-color);
  cursor: pointer;
`;
