import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer data-testid="collection-item">
      <BackgroundImage role="img" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <span>{`$${price}`}</span>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
