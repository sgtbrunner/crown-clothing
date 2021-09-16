import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleLink,
  PreviewContainer,
} from './collection-preview.styles';

const ColletionPreview = ({ title, items }) => (
  <CollectionPreviewContainer data-testid="collection-preview">
    <TitleLink to={`/shop/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </TitleLink>
    <PreviewContainer>
      {items
        .filter((element, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

ColletionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ColletionPreview;
