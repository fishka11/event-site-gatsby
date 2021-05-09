import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import * as introStyles from './intro.module.scss';

import PicturesStrap from './picturesStrap';

const Intro = props => {
  const { pictures } = props;

  return (
    <section>
      <Container className={introStyles.container}>
        <p className="lead">
          Kongres jest najważniejszym i najbardziej prestiżowym przedsięwzięciem
          w Polsce odbywającym się nieprzerwanie od 2005 roku, mającym istotne
          znaczenie i wpływ na stan bezpieczeństwa państwa, firm, instytucji i
          obywateli.
        </p>
        <p>
          XVI Kongres to możliwość spotkania z wieloma wybitnymi gośćmi i
          ekspertami z zakresu ochrony informacji niejawnych, biznesowych i
          danych osobowych, a także okazja do dyskusji, bezpośredniej wymiany
          doświadczeń, kuluarowych spotkań, przekazania uwag i wyjaśnienia
          wątpliwości dotyczących organizacji i funkcjonowania pionów ochrony,
          obowiązków i zadań kierowników jednostek organizacyjnych,
          pełnomocników ochrony, administratorów bezpieczeństwa informacji,
          inspektorów ochrony danych osobowych oraz współpracy i podziału
          kompetencji między nimi.
        </p>
        <p>
          Obrady Kongresu kierujemy do kierowników jednostek organizacyjnych,
          prezesów, dyrektorów, właścicieli firm, przedstawicieli organów
          administracji publicznej, pełnomocników i pracowników pionów ochrony,
          ABI/inspektorów, dyrektorów i pracowników pionów bezpieczeństwa,
          infrastruktury krytycznej i działów IT, a także innych osób
          interesujących się tą tematyką.
        </p>
        <p>
          XVI Kongres będzie miał wyjątkowe znaczenie dla bezpieczeństwa
          gospodarczego z uwagi na poniesione straty z powodu pandemii i
          możliwość zwiększonych zagrożeń konkurencji, wrogich służ specjalnych
          i wyspecjalizowanych grup przestępczych.
        </p>
        <div className="text-center">
          <Button
            className={introStyles.callToAction}
            size="lg"
            href="/tematyka"
          >
            Zapoznaj się
            <br />z tematyką Kongresu
          </Button>
        </div>
        <div className="video">
          <Row className="justify-content-sm-center">
            <Col xs={12} sm={10} lg={8}>
              <h4 className={introStyles.sectionTitle}>
                Reportaż TV Silesia z XV Kongresu Ochrony Informacji Niejawnych,
                Biznesowych i Danych Osobowych
              </h4>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col
              xs={12}
              sm={10}
              lg={8}
              className="embed-responsive embed-responsive-16by9"
            >
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/nS4hihsyn1Q"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Reportaż TV Silesia z XV Kongresu Ochrony Informacji Niejawnych,
            Biznesowych i Danych Osobowych"
              />
            </Col>
          </Row>
        </div>
      </Container>
      {pictures.length ? <PicturesStrap pictures={pictures} /> : null}
    </section>
  );
};

Intro.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, url: PropTypes.string })
  ),
};

Intro.defaultProps = { pictures: [] };

export default Intro;
