export const MAIN_ORGANIZER = 'glowny';
export const HELPER_ORGANIZER = 'pomocniczy';
export const ROLE_SPEAKER = 'Speaker';
export const ROLE_GUEST = 'Geust';
export const PATRONS_ROLE_PRIORITY = [
  { role: 'Main_Patron', polishName: 'Patronat Główny', priority: 1 },
  {
    name: 'Strategic_Patron',
    polishName: 'Patronat Strategiczny',
    priority: 2,
  },
  { role: 'Patron', polishName: 'Patronat', priority: 3 },
  { role: 'Partner', polishName: 'Partnerzy', priority: 4 },
  { role: 'Media_Patron', polishName: 'Patronat Medialny', priority: 5 },
];
export const TYPE_CONGRESS = 'Kongres';
export const TYPE_CONFERENCE = 'Konferencja';
export const TYPE_CONVENTION = 'Zjazd';
export const FLECTION = [
  { eventType: TYPE_CONGRESS, genitive: 'Kongresu', locative: 'Kongresie' },
  {
    eventType: TYPE_CONFERENCE,
    genitive: 'Konferencji',
    locative: 'Konferencji',
  },
  { eventType: TYPE_CONVENTION, genitive: 'Zajazdu', locative: 'Zjeździe' },
];
export const POLISH_MONTHS = [
  'styczeń',
  'luty',
  'marzec',
  'kwieceń',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpień',
  'wrzesień',
  'październik',
  'listopad',
  'grudzień',
];
