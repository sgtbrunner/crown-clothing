import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state),
});

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(CollectionsOverview);
