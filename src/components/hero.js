/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import gsap from 'gsap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Counter from './counter';
import Independence from './independence';

import { POLISH_MONTHS } from '../const';

import * as heroStyles from './hero.module.scss';

const Hero = ({ currentEvent }) => {
  const featuredRef = useRef(null);

  const multilineTitle = currentEvent.eventFullName.split('\n');
  const eventStartDate = new Date(currentEvent.eventStartDate);
  const eventEndDate = new Date(currentEvent.eventEndDate);
  const { cancelled } = currentEvent;

  // useEffect(() => {
  //   const element = featuredRef.current;
  //   gsap.set([element], { autoAlpha: 0 });
  //   const tl = gsap.timeline({ dafaults: { easae: 'power3.inOut' } });
  //   tl.fromTo(
  //     element,
  //     { y: '+=200' },
  //     { duration: 1, y: '-=200', autoAlpha: 1, delay: 0.5 }
  //   );
  // });

  return (
    <section>
      <Jumbotron fluid className={heroStyles.jumbo}>
        <Container>
          <Row>
            {/* <Col lg={7}> */}
            <Col lg={12} className={heroStyles.center}>
              <div>
                {currentEvent.cite ? (
                  <p className={heroStyles.cite}>
                    &bdquo;
                    {currentEvent.cite}
                    &rdquo;
                    <br />
                    <span className={heroStyles.author}>
                      {currentEvent.citeAuthor}
                    </span>
                  </p>
                ) : null}
              </div>
              <h1 className={heroStyles.title}>
                {multilineTitle.map(item => (
                  <span
                    key={multilineTitle.indexOf(item)}
                    className={
                      multilineTitle.indexOf(item) === 0
                        ? `d-block ${heroStyles.display2}`
                        : 'd-block display-5'
                    }
                  >
                    {item}
                  </span>
                ))}
              </h1>
              <div>
                <Link
                  className={`btn btn-danger btn-lg ${heroStyles.callToAction}`}
                  to="/rejestracja"
                >
                  Zarejestruj si??
                </Link>
              </div>
              <div>
                <p className={heroStyles.location}>
                  {currentEvent.eventLocation.city}
                </p>
                {!cancelled ? (
                  <p className={heroStyles.date}>
                    {`${eventStartDate.getDate()} ${
                      eventStartDate.getMonth() !== eventEndDate.getMonth()
                        ? POLISH_MONTHS[eventStartDate.getMonth()]
                        : ''
                    } - ${eventEndDate.getDate()} ${
                      POLISH_MONTHS[eventEndDate.getMonth()]
                    } ${eventEndDate.getFullYear()}`}
                  </p>
                ) : null}
              </div>
              <Counter eventStartDate={eventStartDate} cancelled={cancelled} />
              <Independence />
            </Col>
            {/* <Col ref={featuredRef} className={heroStyles.features} lg={5}>
              <div className={heroStyles.featuresContainer}>
                <p className={heroStyles.featureHeader}>Debata:</p>
                <h4>
                  Bezpiecze??stwo epidemiologiczne. ??wiat i Polska w czasach
                  pandemii, ??ycie na nowo?
                </h4>
                <p>
                  Moderator:{' '}
                  <span className={heroStyles.speaker}>red. Anita Czupryn</span>{' '}
                  <br />z udzia??em:
                </p>
                <dl>
                  <dt>prof. dr hab. Agnieszka Dobrzy??</dt>
                  <dd className={heroStyles.speakerDescription}>
                    Kierownik Projektu SONAR Anty-CoronaVirus, Dyrektor
                    Instytutu Biologii Do??wiadczalnej PAN.
                  </dd>
                  <dt>prof. dr hab. n. med. Robert Flisiak</dt>
                  <dd className={heroStyles.speakerDescription}>
                    Kierownik Kliniki Chor??b Zaka??nych i Hepatologii
                    Uniwersytetu Medycznego w Bia??ymstoku.
                  </dd>
                  <dt>dr hab. n. med. Jaros??aw Pinkas</dt>
                  <dd className={heroStyles.speakerDescription}>
                    G????wny Inspektor Sanitarny, konsultant krajowy w dziedzinie
                    zdrowia publicznego.
                  </dd>
                  <dt>Marek Posobkiewicz</dt>
                  <dd className={heroStyles.speakerDescription}>
                    b. G????wny Inspektor Sanitarny.
                  </dd>
                  <dt>prof. dr hab. n. med. Krzysztof Simon</dt>
                  <dd className={heroStyles.speakerDescription}>
                    Kierownik Kliniki Chor??b Zaka??nych i Hepatologii
                    Uniwersytetu Medycznego we Wroc??awiu.
                  </dd>
                  <dt>dr n. med. Andrzej So??nierz</dt>
                  <dd className={heroStyles.speakerDescription}>
                    Pose??, b. prezes Narodowego Funduszu Zdrowia.
                  </dd>
                  <dt>Beata Drzazga</dt>
                  <dd className={heroStyles.speakerDescription}>
                    Prezes BetaMed S.A., w??a??cicielka najwi??kszej firmy
                    medycznej w Polsce ??wiadcz??cej us??ugi piel??gniarskie w domu
                    pacjenta.
                  </dd>
                </dl>
                <p className={heroStyles.featureHeader}>Atrakcja wieczoru:</p>
                <Row>
                  <Col xs={6}>
                    <img
                      src="./dominika-zamara.jpg"
                      alt="Dominika Zamara"
                      height="160"
                    />
                  </Col>
                  <Col xs={6}>
                    <h4>Wyst??p znanej ??piewaczki operowej Dominiki Zamary</h4>
                  </Col>
                </Row>
              </div>
            </Col> */}
          </Row>
        </Container>
      </Jumbotron>
    </section>
  );
};

Hero.propTypes = {
  currentEvent: PropTypes.shape({
    eventFullName: PropTypes.string,
    eventStartDate: PropTypes.string,
    eventEndDate: PropTypes.string,
    cancelled: PropTypes.bool,
    cite: PropTypes.string,
    citeAuthor: PropTypes.string,
    eventLocation: PropTypes.shape({
      city: PropTypes.string,
    }),
  }).isRequired,
};

export default Hero;
