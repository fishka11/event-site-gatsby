import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookies = () => (
  <CookieConsent
    location="bottom"
    buttonText="OK, rozumiem"
    cookieName="cookiesBar"
    style={{ background: '#333', color: '#ddd' }}
    buttonStyle={{
      color: '#ffffff',
      background: '#ca1818',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    }}
    expires={150}
  >
    Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach
    statystycznych, reklamowych oraz funkcjonalnych. Każdy może zaakceptować
    pliki cookies albo ma możliwość wyłączenia ich w przeglądarce.{' '}
    <a
      aria-label="dowiedz się więcej o ciasteczkach"
      role="button"
      rel="noopener noreferrer"
      tabIndex="0"
      className="cc-link"
      href="http://wszystkoociasteczkach.pl/"
      target="_blank"
      style={{ color: '#ca1818' }}
    >
      Dowiedz się więcej.
    </a>
  </CookieConsent>
);

export default Cookies;
