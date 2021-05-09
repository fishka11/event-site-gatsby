/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const query = graphql`
  fragment EventName on GraphCMS_Event {
    eventName
  }

  fragment EventFullName on GraphCMS_Event {
    eventFullName
  }

  fragment EventInformation on GraphCMS_Event {
    eventName
    eventFullName
    eventType
    eventStartDate
    eventEndDate
    singleRoomPrice
    doubleRoomPrice
    cite
    citeAuthor
    cancelled
  }

  fragment Agenda on GraphCMS_Event {
    agenda
  }

  fragment PageHeader on GraphCMS_Event {
    eventName
    eventFullName
    brand {
      url
      height
      width
    }
    eventSiteMenu(orderBy: itemOrder_ASC) {
      displayName
      id
      visibleInMenu
      itemOrder
      path
      button
      description
      title
    }
  }

  fragment PageFooter on GraphCMS_Event {
    eventName
    eventFullName
    organizers {
      name
      shortName
      organizerType
      logo {
        url
      }
      webSite
      eMail
      address
      postalCode
      city
      phone
      fax
    }
  }

  fragment EventLocation on GraphCMS_Event {
    eventLocation {
      name
      address
      postalCode
      city
      webSite
      googleMapsCode
    }
  }

  fragment EventOrganizers on GraphCMS_Event {
    organizers {
      id
      name
      shortName
      organizerType
      logo {
        url
      }
      webSite
      eMail
      address
      postalCode
      city
      phone
      fax
      bankName
      bankAccount
      nip
      regon
    }
  }

  fragment EventBrandLogo on GraphCMS_Event {
    brand {
      url
      height
      width
    }
  }

  fragment EventPictureStrap on GraphCMS_Event {
    picturesStrap {
      id
      url
    }
  }

  fragment EventMenuItems on GraphCMS_Event {
    eventSiteMenu(orderBy: itemOrder_ASC) {
      displayName
      id
      visibleInMenu
      itemOrder
      path
      button
      description
      title
    }
  }

  fragment Conferees on GraphCMS_Conferee {
    id
    title
    firstName
    lastName
    description
    photo {
      url
    }
    events
    roleKBB
    roleKBN
    roleKOIN
    roleZPO
  }

  fragment Patrons on GraphCMS_Patron {
    id
    name
    logo {
      url
    }
    events
    roleKBB
    roleKBN
    roleKOIN
    roleZPO
  }

  fragment Discounts on GraphCMS_EventDiscount {
    id
    name
    discount
  }
`;
