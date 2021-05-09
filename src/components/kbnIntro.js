import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import * as introStyles from './intro.module.scss';

import PicturesStrap from './picturesStrap';

const Intro = ({ pictures }) => (
  <section>
    <Container className={introStyles.container}>
      <h2 className={introStyles.sectionTitle}>
        Bezpieczeństwo Polski i Polaków to wspólna sprawa wszystkich obywateli i
        władz naszego kraju.
      </h2>
      <p>
        Serdecznie zapraszamy na X Konferencję Bezpieczeństwa Narodowego i
        Gospodarczego, podczas której poruszymy tematykę zagrożeń pandemią dla
        bezpieczeństwa państwa i obywateli. Konferencja skierowana jest do kadry
        kierowniczej i zarządzającej przedsiębiorstw:
      </p>
      <ul>
        <li>zobowiązanych do ochrony infrastruktury krytycznej,</li>
        <li>operatorów usług kluczowych i dostawców usług cyfrowych,</li>
        <li>podlegających obowiązkowej ochronie,</li>
        <li>
          szczególnie ważnych dla bezpieczeństwa państwa oraz jego obywateli,
        </li>
        <li>o dużym znaczeniu gospodarczo-obronnym,</li>
      </ul>
      <p>oraz:</p>
      <ul>
        <li>
          właścicieli firm i osób funkcyjnych MŚP odpowiedzialnych za
          organizację i bezpieczeństwo biznesu
        </li>
        <li>
          jednostek organizacyjnych administracji rządowej i samorządowej
          odpowiedzialnych za zarządzanie kryzysowe i cyberbezpieczeństwo, a
          także zapewnienie odpowiedniego poziomu bezpieczeństwa, porządku
          publicznego i obrony cywilnej
        </li>
      </ul>
      <p>
        Zapraszamy pełnomocników ds. ochrony infrastruktury krytycznej,
        dyrektorów/kierowników działów IT, osoby odpowiedzialne za
        cyberbezpieczeństwo, pracowników pionów bezpieczeństwa, ochrony
        fizycznej i technicznej, osób i mienia, pracowników spraw obronnych,
        bezpieczeństwa i zarządzania kryzysowego.
      </p>

      <div className="text-center">
        <Button className={introStyles.callToAction} size="lg" href="/tematyka">
          Zapoznaj się
          <br />z tematyką Konferncji
        </Button>
      </div>
      <h2 className={introStyles.sectionTitle}>Cele Konferencji</h2>
      <ol>
        <li>
          Pokazanie międzynarodowych i krajowych determinantów narodowego
          bezpieczeństwa w czasie pandemii.
        </li>
        <li>
          Przedstawienie nowych wyzwań i zagrożeń mających wpływ na
          bezpieczeństwo państwa.
        </li>
        <li>
          Podniesienie poziomu świadomości, wiedzy i kompetencji osób
          zarządzających bezpieczeństwem.
        </li>
        <li>
          Wymiana doświadczeń wynikających z realizacji zadań związanych z
          bezpieczeństwem narodowym i gospodarczym, ochroną infrastruktury
          krytycznej i cyberbezpieczeństwem.
        </li>
        <li>
          Aktualności dot. opracowania planów ochrony fizycznej i technicznej
          obszarów, obiektów i urządzeń podlegających obowiązkowej ochronie.
        </li>
        <li>
          Analiza i ocena stanu potencjalnych zagrożeń, rozpoznawanie,
          wykrywanie i zapobieganie zagrożeniom chronionej jednostki
          organizacyjnej, w tym również koronawirusem COVID-19.
        </li>
        <li>
          Zapoznanie z najlepszymi praktykami i procedurami mającymi na celu
          zapobieganie sytuacjom kryzysowym.
        </li>
        <li>
          Wymiana myśli i poglądów z zaproszonymi ekspertami nt. naszego
          wspólnego bezpieczeństwa.
        </li>
      </ol>
    </Container>
    {pictures.length ? <PicturesStrap pictures={pictures} /> : null}
  </section>
);

Intro.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, url: PropTypes.string })
  ),
};

Intro.defaultProps = { pictures: [] };

export default Intro;
