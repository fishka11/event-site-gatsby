import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as pictureStrapsStyles from './picturesStrap.module.scss';

const PicturesStrap = props => {
  const { pictures } = props;

  return (
    <section>
      <Row className="justify-content-sm-center" noGutters>
        {pictures.map(picture => (
          <Col key={picture.id} xs={4} md={2}>
            <img
              className={pictureStrapsStyles.picture}
              src={picture.url}
              alt="obrazek dekoracyjny"
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

PicturesStrap.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, url: PropTypes.string })
  ),
};

PicturesStrap.defaultProps = { pictures: [] };

export default PicturesStrap;
