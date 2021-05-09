import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';

import * as confereeStyles from '../pages/conferee.module.scss';

const Conferee = ({ speaker }) => (
  <Col key={speaker.id} md={4}>
    <div className={confereeStyles.speaker}>
      <img
        className={confereeStyles.photo}
        fluid="true"
        src={speaker.photo.url}
        alt={`${speaker.title ? speaker.title : ''} ${speaker.firstName} ${
          speaker.lastName
        }`}
      />
      <h2 className={confereeStyles.name}>{`${
        speaker.title ? speaker.title : ''
      } ${speaker.firstName} ${speaker.lastName}`}</h2>
      <p className={confereeStyles.description}>{speaker.description}</p>
    </div>
  </Col>
);

Conferee.propTypes = {
  speaker: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.shape({ url: PropTypes.string }),
    events: PropTypes.arrayOf(PropTypes.string),
    roleKBB: PropTypes.string,
    roleKBN: PropTypes.string,
    roleKOIN: PropTypes.string,
    roleZPO: PropTypes.string,
  }),
};

Conferee.defaultProps = {
  speaker: {},
};

export default Conferee;
