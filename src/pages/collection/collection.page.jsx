import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

CollectionPage.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(CollectionPage);
