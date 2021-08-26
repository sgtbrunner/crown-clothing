import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

import CrownIcon from '../../assets/crown.svg';
import { clearCartItems } from '../../redux/cart/cart.actions';
import AlertContent, {
  SUCCESS,
} from '../dialog/alert-content/alert-content.component';
import { useDialog } from '../dialog/dialog.provider';

const StripeCheckoutButton = ({ price, clearCartItems }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XKUpwPvvEnNxMsSzoLm8H3i8';
  const { setDialog, unsetDialog } = useDialog();

  const onToken = (payment) => {
    setDialog(
      <AlertContent type={SUCCESS} onButtonClick={unsetDialog}>
        Payment Successful! Your order number is {payment.created}.
      </AlertContent>
    );
    clearCartItems();
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      image={CrownIcon}
      panelLabel="Pay Now"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe
      billingAddress
      shippingAddress
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItems: () => dispatch(clearCartItems()),
});

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
  clearCartItems: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
