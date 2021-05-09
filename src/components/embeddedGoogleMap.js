import React from 'react';
import PropTypes from 'prop-types';

const GoogleMap = ({ location, title }) => {
  return (
    <div>
      <iframe
        src={location.googleMapsCode}
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        title={title}
      />
    </div>
  );
};

GoogleMap.propTypes = {
  location: PropTypes.shape({
    googleMapsCode: PropTypes.string,
  }),
  title: PropTypes.string,
};

GoogleMap.defaultProps = {
  location: {},
  title: '',
};

export default GoogleMap;
