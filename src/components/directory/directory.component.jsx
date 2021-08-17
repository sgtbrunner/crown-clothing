import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../../components/menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ ...sectionProps }) => {
      return <MenuItem key={sectionProps.id} {...sectionProps} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

Directory.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Directory);
