import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import * as layoutStyles from './siteTemplate.module.scss';

const SiteTemplate = ({ children, slug, currentEventName }) => (
  <Layout slug={slug} currentEventName={currentEventName}>
    <div className={layoutStyles.content}>{children}</div>
  </Layout>
);

SiteTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape(),
  ]).isRequired,
  slug: PropTypes.string.isRequired,
  currentEventName: PropTypes.string.isRequired,
};

export default SiteTemplate;
