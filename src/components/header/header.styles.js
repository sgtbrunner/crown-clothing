import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    height: 60px;
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 12px;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const CustomDivider = styled.hr`
  margin-top: 0;
  margin-bottom: 25px;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;
