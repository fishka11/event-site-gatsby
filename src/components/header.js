import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import * as headerStyles from './header.module.scss';

const Header = ({ currentEventName = '' }) => {
  const data = useStaticQuery(
    graphql`
      query {
        graphcms {
          events {
            ...PageHeader
          }
        }
      }
    `
  );
  const currentEvent = data.graphcms.events.find(
    item => item.eventName.toLowerCase() === currentEventName.toLowerCase()
  );
  const menuItems = currentEvent.eventSiteMenu.filter(
    item => item.visibleInMenu === true
  );
  const brandLogo = currentEvent.brand;
  return (
    <header className="navigation">
      <Navbar
        className={headerStyles.navbar}
        fixed="top"
        collapseOnSelect
        expand="xl"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand>
            <Link to="/" activeClassName="active">
              <img
                src={brandLogo.url}
                width={brandLogo.width}
                height={brandLogo.height}
                alt={`Logo - ${currentEvent.eventFullName}`}
              />
              <span className="sr-only">(current)</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={headerStyles.nav}>
              {menuItems.map(item =>
                !item.button ? (
                  <Nav.Item key={item.id}>
                    <Link
                      to={`/${item.path}`}
                      className={`nav-link ${headerStyles.navLink}`}
                      activeClassName={headerStyles.navLinkActive}
                    >
                      {item.displayName}
                    </Link>
                  </Nav.Item>
                ) : (
                  <Nav.Item key={item.id} className={headerStyles.navBtn}>
                    <Link
                      to={`/${item.path}`}
                      className="btn btn-primary"
                      activeClassName="active"
                    >
                      {item.displayName}
                    </Link>
                  </Nav.Item>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  currentEventName: PropTypes.string.isRequired,
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventFullName: PropTypes.string.isRequired,
          eventName: PropTypes.string.isRequired,
          brand: PropTypes.shape({
            url: PropTypes.string.isRequired,
            width: PropTypes.number,
            height: PropTypes.number,
          }),
          eventSiteMenu: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              itemOrder: PropTypes.number,
              displayName: PropTypes.string,
              title: PropTypes.string,
              description: PropTypes.string,
              path: PropTypes.PropTypes.string,
              visibleInMenu: PropTypes.bool,
              button: PropTypes.bool,
            })
          ),
        })
      ),
    }),
  }),
};

Header.defaultProps = {
  data: {},
};

export default Header;
