import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_51Hcg4PHtiVplIjx70q5VliPMfaRuH57xr90a1bl1dYnbpDmA10MCU9mZTgn47CV76okeWBS8htbpVdRvg1RzOxXJ004Y6UU5F3`;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      image="https://sendeyo.com/up/d/f3eb2117da"
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

export default StripeCheckoutButton;
