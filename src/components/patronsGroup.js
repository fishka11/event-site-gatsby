import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as patronsGroupStyles from './patronsGroupStyles.module.scss';

const PatronsGroup = ({ partnersList }) => (
  <Row className="justify-content-sm-center">
    {partnersList.map(item => (
      <Col key={item.id} xs={12} sm={6} lg={4}>
        <div className={patronsGroupStyles.logoContainer}>
          <img
            className={patronsGroupStyles.logo}
            fluid="true"
            src={item.logo.url}
            alt={item.name}
          />
        </div>
      </Col>
    ))}
  </Row>
);

PatronsGroup.propTypes = {
  partnersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.shape({ url: PropTypes.string }),
      events: PropTypes.arrayOf(PropTypes.string),
      roleKBB: PropTypes.string,
      roleKBN: PropTypes.string,
      roleKOIN: PropTypes.string,
      roleZPO: PropTypes.string,
    })
  ).isRequired,
};

export default PatronsGroup;
