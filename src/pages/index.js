import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Hero from '../components/hero';
import HomeTemplate from '../templates/homeTemplate';

import Organizers from '../components/organizers';
import KOINIntro from '../components/koinIntro';
import KBNIntro from '../components/kbnIntro';

import { CURRENT_EVENT } from '../../page-config';

const IndexPage = ({ data, pageContext }) => {
  const currentEvent = data.graphcms.events.find(
    event => event.eventName === CURRENT_EVENT
  );
  const eventSwitch = () => {
    switch (pageContext.currentEvent.toLowerCase()) {
      case 'koin':
        return <KOINIntro pictures={currentEvent.picturesStrap} />;
      case 'kbn':
        return <KBNIntro pictures={currentEvent.picturesStrap} />;
      default:
        return null;
    }
  };
  return (
    // eslint-disable-next-line prettier/prettier
    <HomeTemplate slug="" currentEventName={currentEvent.eventName}>
      <Hero currentEvent={currentEvent} />
      <Organizers organizers={currentEvent.organizers} />
      {eventSwitch()}
    </HomeTemplate>
  );
};

export const data = graphql`
  query($currentEvent: GraphCMS_EventName) {
    graphcms {
      events(where: { eventName: $currentEvent }) {
        ...EventInformation
        ...EventPictureStrap
        ...EventLocation
        ...EventOrganizers
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventName: PropTypes.string,
          eventFullName: PropTypes.string,
          cancelled: PropTypes.bool,
          eventType: PropTypes.string,
          cite: PropTypes.string,
          citeAuthor: PropTypes.string,
          doubleRoomPrice: PropTypes.number,
          singleRoomPrice: PropTypes.number,
          eventStartDate: PropTypes.string,
          eventEndDate: PropTypes.string,
          picturesStrap: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              url: PropTypes.string,
            })
          ),
          eventLocation: PropTypes.shape({
            name: PropTypes.string,
            address: PropTypes.string,
            postalCode: PropTypes.string,
            city: PropTypes.string,
            webSite: PropTypes.string,
            googleMapsCode: PropTypes.string,
          }),
          organizers: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              name: PropTypes.string,
              shortName: PropTypes.string,
              organizerType: PropTypes.string,
              address: PropTypes.string,
              postalCode: PropTypes.string,
              city: PropTypes.string,
              webSite: PropTypes.string,
              eMail: PropTypes.arrayOf(PropTypes.string),
              phone: PropTypes.arrayOf(PropTypes.string),
              fax: PropTypes.arrayOf(PropTypes.string),
              nip: PropTypes.string,
              regon: PropTypes.string,
              bankAccount: PropTypes.string,
              bankName: PropTypes.string,
            })
          ),
        })
      ),
    }),
  }),
  pageContext: PropTypes.shape({ currentEvent: PropTypes.string.isRequired })
    .isRequired,
};

IndexPage.defaultProps = {
  data: {},
};

export default IndexPage;
