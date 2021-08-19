import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../../components/menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

Directory.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Directory);
