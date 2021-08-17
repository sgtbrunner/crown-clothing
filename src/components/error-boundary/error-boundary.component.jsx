import React from 'react';
import PropTypes from 'prop-types';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError() {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ErrorBoundary;
