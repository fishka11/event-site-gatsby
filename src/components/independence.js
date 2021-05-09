import React from 'react';
// import { graphql } from 'gatsby';
// import { Img } from 'gatsby-image';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as independenceStyles from './independence.module.scss';

const Independence = () => (
  <Row>
    <Col xs="12">
      {/* <Img fixed={data.file.fixed} /> */}
      <img
        className={independenceStyles.logo}
        src="./logo_pl_alternatywny.png"
        alt="logo Niepodległa"
      />
    </Col>
    <Col xs="12">
      <p className={independenceStyles.text}>
        Projekt realizowany w ramach obchodów stulecia odzyskania niepodległości
        oraz odbudowy polskiej państwowości
      </p>
    </Col>
  </Row>
);

// export const query = graphql`
//   query logoIndependenceQuery {
//     file: imageSharp(id: { regex: "/logo_pl_alternatywny/" }) {
//       fixed(width: 170, height: 50) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `;

export default Independence;
