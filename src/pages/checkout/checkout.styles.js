import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding-bottom: 40px;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 767px) {
    width: 22%
    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: var(--error-color);
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16;
  margin-top: 150px;
`;

export const EmptyCartMessage = styled.p`
  font-size: 36px;
`;

export const EmptyCartText = styled.p`
  font-size: 18px;
`;

export const EmptyCartLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
