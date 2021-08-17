import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty!</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
