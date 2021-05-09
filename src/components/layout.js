import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt,
  faAt,
  faPhone,
  faFax,
  faGlobe,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import Cookies from './cookies';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

import '../styles/layout.scss';
import * as layoutStyles from './layout.module.scss';

library.add(faMapMarkerAlt, faAt, faPhone, faFax, faGlobe, faFilePdf);

const Layout = ({ children, slug, currentEventName }) => (
  <div className={layoutStyles.siteWrapper}>
    <div className={layoutStyles.headerWithContent}>
      <Header currentEventName={currentEventName} />
      <SEO slug={slug} currentEventName={currentEventName} />
      {children}
    </div>
    <Footer currentEventName={currentEventName} />
    <Cookies />
  </div>
);

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
  slug: PropTypes.string.isRequired,
  currentEventName: PropTypes.string.isRequired,
};

export default Layout;
