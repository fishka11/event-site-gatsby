import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';
import SiteTemplate from '../templates/siteTemplate';

const Register = ({ data }) => {
  const currentEvent = data.graphcms.events[0];
  return (
    <SiteTemplate slug="rejestracja" currentEventName={currentEvent.eventName}>
      <Container>
        <h1>Zarejestruj się</h1>
        <section>
          <iframe
            src={`https://www.ksoin.pl/${currentEvent.eventName.toUpperCase()}-rejestracja/`}
            marginWidth="0"
            marginHeight="0"
            width="100%"
            height="2500px"
            frameBorder="0"
            title="Formularz rejestracyjny"
          />
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
      }
    }
  }
`;

Register.propTypes = {
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventName: PropTypes.string,
        })
      ),
    }),
  }),
};

Register.defaultProps = {
  data: {},
};

export default Register;
