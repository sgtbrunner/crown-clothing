import styled from 'styled-components';

const DEFAULT_SIZE = '40px';
const BLACK = 'black';
const WHITE = 'white';

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
  width: ${DEFAULT_SIZE};
  height: ${DEFAULT_SIZE};
`;

export const AlertContentButton = styled.button`
  padding: 5px 15px;
  letter-spacing: 0.5px;
  font-size: 13px;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  background-color: ${WHITE};
  color: ${BLACK};
  border: 1px solid ${BLACK};
  cursor: pointer;
  &:hover {
    background-color: ${BLACK};
    color: ${WHITE};
    border: 1px solid ${WHITE};
  }
`;
