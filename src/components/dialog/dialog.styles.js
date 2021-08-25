import styled from 'styled-components';

const spacing = '24px';

export const DialogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 10;
`;

export const DialogBackdrop = styled.button`
  display: block;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DialogInner = styled.div`
  position: absolute;
  width: calc(${spacing} * 28);
  max-width: 90%;
  padding: calc(${spacing} / 2) calc(${spacing} * 1.5);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 20px 32px -8px;
  bottom: calc(100% - ${spacing} * 15);
`;

export const DialogCloseButton = styled.button`
  position: absolute;
  top: ${spacing};
  right: ${spacing};
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const DialogCloseIcon = styled.svg`
  width: ${spacing};
  height: ${spacing};
  fill: currentColor;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
