import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer className="name">{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <TextContainer className="value">{quantity}</TextContainer>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer className="price">{`$${price}`}</TextContainer>
      <RemoveButtonContainer
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10006;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
