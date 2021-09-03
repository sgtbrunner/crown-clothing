import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { EMPTY_CART_MESSAGE } from '../../utils/constants.utils';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  CheckoutCartTextContainer,
  CheckoutCartTextTitle,
  CheckoutCartTextWarn,
  CheckoutCartTextMessage,
  CheckoutCartTextLink,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, totalPrice, user }) => (
  <CheckoutPageContainer>
    {cartItems.length ? (
      <>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${totalPrice}</TotalContainer>
        {user?.id ? (
          <>
            <WarningContainer>
              * Please use the following test credit card for payments *
              <br />
              4242 4242 4242 4242 - Exp: 12/29 - CVC: 123
            </WarningContainer>
            <StripeCheckoutButton price={totalPrice} />
          </>
        ) : (
          <CheckoutCartTextContainer>
            <CheckoutCartTextWarn>
              Please{' '}
              <CheckoutCartTextLink to="/signin">
                sign in or sign up
              </CheckoutCartTextLink>{' '}
              to proceed
            </CheckoutCartTextWarn>
          </CheckoutCartTextContainer>
        )}
      </>
    ) : (
      <CheckoutCartTextContainer>
        <CheckoutCartTextTitle>{EMPTY_CART_MESSAGE}</CheckoutCartTextTitle>
        <CheckoutCartTextMessage>
          Go back to the{' '}
          <CheckoutCartTextLink to="/">homepage</CheckoutCartTextLink> or shop
          for{' '}
          <CheckoutCartTextLink to="/shop">other products</CheckoutCartTextLink>
        </CheckoutCartTextMessage>
      </CheckoutCartTextContainer>
    )}
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
  user: selectCurrentUser,
});

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    createdAt: PropTypes.object,
    displayName: PropTypes.string,
  }),
};

CheckoutPage.defaultProps = {
  userIsLoggedIn: {},
};

export default connect(mapStateToProps)(CheckoutPage);
