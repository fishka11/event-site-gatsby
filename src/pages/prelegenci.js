import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as confereeStyles from './conferee.module.scss';

// import Conferee from '../components/conferee';
import SiteTemplate from '../templates/siteTemplate';
import { ROLE_SPEAKER } from '../const';

gsap.registerPlugin(ScrollTrigger);

const Speakers = ({ data, pageContext }) => {
  const currentEvent = data.graphcms.events[0];
  const filteredSpeakers = data.graphcms.conferees
    .filter(conferee =>
      conferee.events.find(
        event => event.toLowerCase() === pageContext.currentEvent.toLowerCase()
      )
    )
    .filter(
      conferee =>
        conferee[`role${pageContext.currentEvent}`].toLowerCase() ===
        ROLE_SPEAKER.toLowerCase()
    );
  const collator = new Intl.Collator('pl', {
    numeric: true,
    sensitivity: 'base',
  });
  const sortedEventSpeakers = filteredSpeakers.sort((a, b) =>
    collator.compare(a.lastName, b.lastName)
  );

  const confereeRefs = useRef([]);
  confereeRefs.current = [];
  const addToRefs = ref => {
    if (ref && !confereeRefs.current.includes(ref)) {
      confereeRefs.current.push(ref);
    }
  };

  const [conferees] = useState(sortedEventSpeakers);

  useEffect(() => {
    // if (typeof window !== `undefined`) {
    //   gsap.registerPlugin(ScrollTrigger);
    //   gsap.core.globals('ScrollTrigger', ScrollTrigger);
    // }
    confereeRefs.current.forEach((conferee, index) => {
      gsap.fromTo(
        conferee,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            id: `conferee-${index + 1}`,
            trigger: conferee,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      // gsap.set(conferee, { autoAlpha: 0 });
      // const tl = gsap.timeline({ dafaults: { ease: 'power3.inOut' } });
      // tl.fromTo(
      //   conferee,
      //   { y: '+=30' },
      //   {
      //     y: 0,
      //     autoAlpha: 1,
      //     duration: 1,
      //     scrollTrigger: {
      //       id: `conferee-${index + 1}`,
      //       trigger: conferee,
      //       start: 'top 80%',
      //       toggleActions: 'play none none reverse',
      //     },
      //   }
      // );
    });
  }, []);

  return (
    <SiteTemplate slug="prelegenci" currentEventName={currentEvent.eventName}>
      <Container>
        <h1>Prelegenci</h1>
        <section>
          <Row>
            {conferees.map(speaker => (
              // <Conferee key={speaker.id} speaker={speaker} ref={addToRefs} />
              <Col key={speaker.id} md={4} ref={addToRefs}>
                <div className={confereeStyles.speaker}>
                  <img
                    className={confereeStyles.photo}
                    fluid="true"
                    src={speaker.photo.url}
                    alt={`${speaker.title ? speaker.title : ''} ${
                      speaker.firstName
                    } ${speaker.lastName}`}
                  />
                  <h2 className={confereeStyles.name}>{`${
                    speaker.title ? speaker.title : ''
                  } ${speaker.firstName} ${speaker.lastName}`}</h2>
                  <p className={confereeStyles.description}>
                    {speaker.description}
                  </p>
                </div>
              </Col>
            ))}
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
      }
      conferees {
        ...Conferees
      }
    }
  }
`;

Speakers.propTypes = {
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventName: PropTypes.string,
        })
      ),
      conferees: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          firstName: PropTypes.string,
          lastName: PropTypes.string,
          description: PropTypes.string,
          photo: PropTypes.shape({ url: PropTypes.string }),
          events: PropTypes.arrayOf(PropTypes.string),
          roleKBB: PropTypes.string,
          roleKBN: PropTypes.string,
          roleKOIN: PropTypes.string,
          roleZPO: PropTypes.string,
        })
      ),
    }),
  }),
  pageContext: PropTypes.shape({ currentEvent: PropTypes.string.isRequired })
    .isRequired,
};

Speakers.defaultProps = {
  data: {},
};

export default Speakers;
