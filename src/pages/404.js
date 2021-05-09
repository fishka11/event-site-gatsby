import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';
import SiteTemplate from '../templates/siteTemplate';

import * as notFoundStyles from './notFound.module.scss';

const GenericNotFound = ({ data }) => {
  const currentEvent = data.graphcms.events[0];
  return (
    <SiteTemplate slug="404" currentEventName={currentEvent.eventName}>
      <Container className={notFoundStyles.container}>
        <section>
          <h1 className={notFoundStyles.h1}>404</h1>
          <h2 className={notFoundStyles.h2}>
            Strona o takim adresie nie istnieje
          </h2>
          <p className={notFoundStyles.paragraph}>
            Zapraszamy na stronę główną
          </p>
          <p className={notFoundStyles.paragraph}>
            <a className={notFoundStyles.link} href="/">
              {currentEvent.eventFullName}
            </a>
          </p>
        </section>
      </Container>
    </SiteTemplate>
  );
};

export const data = graphql`
  query($currentEvent: GraphCMS_EventName) {
    graphcms {
      events(where: { eventName: $currentEvent }) {
        ...EventName
        ...EventFullName
      }
    }
  }
`;

GenericNotFound.propTypes = {
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventName: PropTypes.string,
          eventFullName: PropTypes.string,
        })
      ),
    }),
  }),
};

GenericNotFound.defaultProps = {
  data: {},
};

export default GenericNotFound;
