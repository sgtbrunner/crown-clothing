import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 15px;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 36px;
  height: 36px;
`;
