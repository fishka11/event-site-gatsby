import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const HomeTemplate = ({ children, slug, currentEventName }) => (
  <Layout slug={slug} currentEventName={currentEventName}>
    <div>{children}</div>
  </Layout>
);

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape(),
  ]).isRequired,
  slug: PropTypes.string.isRequired,
  currentEventName: PropTypes.string.isRequired,
};

export default HomeTemplate;
