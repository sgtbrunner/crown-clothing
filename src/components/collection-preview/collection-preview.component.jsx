import React from 'react'

import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleLink,
  PreviewContainer,
} from './collection-preview.styles';

const ColletionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
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

export default ColletionPreview;
