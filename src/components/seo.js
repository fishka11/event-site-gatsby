import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ currentEventName, slug }) => {
  const data = useStaticQuery(
    graphql`
      query {
        graphcms {
          events {
            ...EventName
            ...EventFullName
            ...EventMenuItems
          }
        }
      }
    `
  );
  const currentEvent = data.graphcms.events.find(
    item => item.eventName.toLowerCase() === currentEventName.toLowerCase()
  );
  const meta = currentEvent.eventSiteMenu.find(item =>
    slug ? String(item.path) === slug : item.path === null
  );
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <html lang="pl" />
    </Helmet>
  );
};

SEO.propTypes = {
  currentEventName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventFullName: PropTypes.string.isRequired,
          eventName: PropTypes.string.isRequired,
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

SEO.defaultProps = {
  data: {},
};

export default SEO;
