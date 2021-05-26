import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SiteTemplate from '../templates/siteTemplate';
import pointer from '../assets/agenda-pointer.png';

import * as tematykaStyles from './tematyka.module.scss';

const Agenda = ({ data }) => {
  const currentEvent = data.graphcms.events[0];
  const { agenda } = currentEvent;
  return (
    <SiteTemplate slug="tematyka" currentEventName={currentEvent.eventName}>
      <Container>
        <h1>Tematyka i Program</h1>
        <section>
          <Row>
            {/* <Col md={8} lg={9}> */}
            <Col lg={12}>
              {agenda.map(title => (
                <Row
                  key={agenda.indexOf(title)}
                  className={tematykaStyles.agendaItem}
                >
                  <Col xs={2} sm={1}>
                    <div>
                      <img
                        className={tematykaStyles.pointer}
                        fluid="true"
                        src={pointer}
                        alt="pointer"
                      />
                    </div>
                  </Col>
                  <Col
                    xs={10}
                    sm={11}
                    className={tematykaStyles.agendaItemTitle}
                  >
                    <h3>{title}</h3>
                  </Col>
                </Row>
              ))}
            </Col>
            {/* <Col md={4} lg={3}>
              <h4 className={tematykaStyles.header4}>
                Szczegółowy program Konferncji do pobrania
              </h4>
              <Link to="/plan-kbn-rynia-2020.pdf">
                <FontAwesomeIcon
                  icon="file-pdf"
                  className={tematykaStyles.icon}
                />
              </Link>
            </Col> */}
          </Row>
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
        ...Agenda
      }
    }
  }
`;

Agenda.propTypes = {
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          agenda: PropTypes.arrayOf(PropTypes.string),
          eventName: PropTypes.string,
        })
      ),
    }),
  }),
};

Agenda.defaultProps = {
  data: {},
};

export default Agenda;
