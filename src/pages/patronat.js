import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';

import SiteTemplate from '../templates/siteTemplate';
import PatronsGroup from '../components/patronsGroup';
import { PATRONS_ROLE_PRIORITY } from '../const';

import * as patronatStyles from './patronat.module.scss';

const Sponsors = ({ data, pageContext }) => {
  const currentEvent = data.graphcms.events[0];
  const filteredPatrons = data.graphcms.patrons.filter(patron =>
    patron.events.find(
      event => event.toLowerCase() === pageContext.currentEvent.toLowerCase()
    )
  );
  const goupedPatrons = [];
  filteredPatrons.forEach(patron => {
    const currentEventKey = `role${pageContext.currentEvent}`;
    if (!goupedPatrons.find(group => group.name === patron[currentEventKey])) {
      const patronsGroup = {};
      const related = PATRONS_ROLE_PRIORITY.find(
        i => i.role === patron[currentEventKey]
      );
      patronsGroup.name = patron[currentEventKey];
      patronsGroup.list = [patron];
      patronsGroup.priority = related.priority;
      patronsGroup.header = related.polishName;
      goupedPatrons.push(patronsGroup);
    } else {
      goupedPatrons
        .find(i => i.name === patron[currentEventKey])
        .list.push(patron);
    }
  });
  const collator = new Intl.Collator('pl', {
    numeric: true,
    sensitivity: 'base',
  });
  const sortedPatrons = goupedPatrons.sort((a, b) =>
    collator.compare(a.priority, b.priority)
  );
  return (
    <SiteTemplate slug="patronat" currentEventName={currentEvent.eventName}>
      <Container>
        <h1>Patronat</h1>
        {sortedPatrons.map(patronGroup => (
          <section key={patronGroup.priority}>
            <Container>
              <h3 className={patronatStyles.groupName}>
                {patronGroup.header.toUpperCase()}
              </h3>
              <PatronsGroup partnersList={patronGroup.list} />
            </Container>
          </section>
        ))}
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
      patrons {
        ...Patrons
      }
    }
  }
`;

Sponsors.propTypes = {
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventName: PropTypes.string,
        })
      ),
      patrons: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          name: PropTypes.string,
          logo: PropTypes.shape({ url: PropTypes.string }),
          events: PropTypes.arrayOf(PropTypes.string),
          roleKBB: PropTypes.PropTypes.string,
          roleKBN: PropTypes.PropTypes.string,
          roleKOIN: PropTypes.PropTypes.string,
          roleZPO: PropTypes.PropTypes.string,
        })
      ),
    }),
  }),
  pageContext: PropTypes.shape({ currentEvent: PropTypes.string.isRequired })
    .isRequired,
};

Sponsors.defaultProps = {
  data: {},
};

export default Sponsors;
