import styled from 'styled-components';

export const AlertContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlertContentMessage = styled.span`
  margin: 20px 0;
  font-size: 18px;
  text-align: center;
`;

export const AlertContentImage = styled.img`
  width: var(--icon-length);
  height: var(--icon-length);
`;

export const AlertContentButton = styled.button`
  padding: 5px 15px;
  letter-spacing: 0.5px;
  font-size: 13px;
  font-family: var(--default-font-family);
  font-weight: bolder;
  background-color: var(--white-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  cursor: pointer;
  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
    border: 1px solid var(--white-color);
  }
`;
