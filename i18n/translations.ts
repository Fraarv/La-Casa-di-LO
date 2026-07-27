/*
 * La Casa di LO - Dizionario delle traduzioni (IT / EN)
 * Copyright (c) 2026 La Casa di LO. Tutti i diritti riservati.
 *
 * Il dizionario italiano fa da "sorgente di verità": il tipo `TranslationKey`
 * viene derivato dalle sue chiavi, quindi il compilatore segnala subito
 * eventuali traduzioni inglesi mancanti o chiavi inesistenti usate nel codice.
 */

export const LANGUAGES = ['it', 'en'] as const;

export type Language = (typeof LANGUAGES)[number];

/** Locale usato per formattare le date in ciascuna lingua. */
export const DATE_LOCALES: Record<Language, string> = {
  it: 'it-IT',
  en: 'en-GB',
};

/** Etichette del selettore lingua (sempre nella lingua di destinazione). */
export const LANGUAGE_LABELS: Record<Language, string> = {
  it: 'IT',
  en: 'EN',
};

export const LANGUAGE_NAMES: Record<Language, string> = {
  it: 'Italiano',
  en: 'English',
};

const it = {
  /* --- Meta / documento --- */
  'meta.title': 'La Casa di LO - Casa Vacanze a Monopoli',
  'meta.htmlLang': 'it',

  /* --- Navigazione --- */
  'nav.about': 'La Casa',
  'nav.amenities': 'Servizi',
  'nav.gallery': 'Galleria',
  'nav.location': 'Posizione',
  'nav.book': 'Prenota',
  'nav.openMenu': 'Apri il menu',
  'nav.closeMenu': 'Chiudi il menu',
  'nav.backToTop': "Torna all'inizio",
  'nav.language': 'Lingua',
  'nav.switchToItalian': 'Passa alla versione italiana',
  'nav.switchToEnglish': 'Passa alla versione inglese',

  /* --- Hero --- */
  'hero.tagline': 'Il tuo autentico rifugio in pietra nel cuore di Monopoli',
  'hero.address': 'Vico Castelfidardo, 10, Monopoli (BA)',
  'hero.logoAlt': 'La Casa di LO',
  'hero.imageAlt': 'Interno de La Casa di LO con volte in tufo a vista',

  /* --- Sezione "La Casa" --- */
  'about.title': 'Benvenuti a Casa',
  'about.p1.before': 'Ristrutturata da poco, ',
  'about.p1.strong': 'La Casa di LO',
  'about.p1.after':
    ' è una graziosa casetta indipendente al piano terra, caratterizzata da suggestive volte in tufo a vista e pavimentazione storica.',
  'about.p2.before': 'Situata a soli ',
  'about.p2.strong1': '5 minuti',
  'about.p2.middle': ' dalla piazza centrale e dalla cattedrale, e a pochi passi dalla famosa ',
  'about.p2.strong2': 'Spiaggia di Porta Vecchia',
  'about.p2.after':
    '. La casa offre circa 30 m² di atmosfera autentica pugliese, composta da soggiorno, cucina, camera da letto e bagno.',
  'about.p3':
    'Possiamo ospitare 2 persone. Su richiesta possiamo fornire un lettino da viaggio per bambini.',

  /* --- Servizi --- */
  'amenities.title': 'Comfort e Servizi',
  'amenities.apartment.title': "L'Appartamento",
  'amenities.apartment.groundFloor': 'Piano Terra Indipendente',
  'amenities.apartment.vaults': 'Volte in tufo a vista',
  'amenities.apartment.expressCheckin': 'Check-in express',
  'amenities.apartment.minimarket': 'Minimarket sul posto',
  'amenities.comfort.title': 'Comfort',
  'amenities.comfort.wifi': 'WiFi Gratuito',
  'amenities.comfort.ac': 'Aria Condizionata',
  'amenities.comfort.tv': 'TV Schermo Piatto (Cavo)',
  'amenities.comfort.iron': 'Ferro e asse da stiro',
  'amenities.kitchen.title': 'Cucina e Bagno',
  'amenities.kitchen.stove': 'Piano cottura, Forno, Frigo',
  'amenities.kitchen.coffee': 'Macchina Caffè',
  'amenities.kitchen.hairdryer': 'Asciugacapelli',
  'amenities.kitchen.toiletries': 'Set cortesia',
  'amenities.badge.pets': 'Animali Ammessi (Gratis)',
  'amenities.badge.maxGuests': 'Max 2 Ospiti',
  'amenities.badge.noSmoking': 'No Fumatori',

  /* --- Galleria --- */
  'gallery.title': 'Galleria',
  'gallery.image.sala': 'Soggiorno con volte in tufo a vista e divano',
  'gallery.image.cameraKlimt': 'Camera da letto con quadro ispirato a Klimt',
  'gallery.image.cameraCuscini': 'Letto matrimoniale con cuscini decorativi',
  'gallery.image.bagnoPietra': 'Bagno rivestito in pietra con doccia',
  'gallery.image.esterno': 'Vicolo esterno del centro storico di Monopoli',
  'gallery.image.posta': 'Dettaglio della facciata con cassetta della posta',
  'gallery.openLightbox': 'Apri la foto a schermo intero',
  'gallery.lightbox.label': 'Galleria fotografica a schermo intero',
  'gallery.lightbox.close': 'Chiudi la galleria',
  'gallery.lightbox.prev': 'Foto precedente',
  'gallery.lightbox.next': 'Foto successiva',
  'gallery.lightbox.counter': 'Foto {current} di {total}',

  /* --- Posizione --- */
  'location.title': 'Posizione Privilegiata',
  'location.beaches.title': 'Spiagge',
  'location.beaches.portaVecchia': 'Porta Vecchia',
  'location.beaches.calaPortoRosso': 'Cala Porto Rosso',
  'location.beaches.lidoPantano': 'Lido Pantano',
  'location.around.title': 'Nei Dintorni',
  'location.around.ilRitrovo': 'Ristorante Il Ritrovo',
  'location.around.pizziamo': 'Ristorante Pizziamo',
  'location.around.caffeSport': 'Caffè dello Sport',
  'location.transport.title': 'Trasporti',
  'location.transport.station': 'Stazione Monopoli',
  'location.transport.bari': 'Bari',
  'location.transport.brindisi': 'Brindisi',
  'location.attractions.title': 'Attrazioni',
  'location.attractions.cathedral': 'Cattedrale',
  'location.attractions.egnazia': 'Museo Egnazia',
  'location.attractions.polignano': 'Polignano a Mare',
  'location.distance.lidoPantano': '1,5 km',
  'location.distance.cathedral': '5 min',

  /* --- Prenotazione --- */
  'book.title': 'Prenota il tuo soggiorno',
  'book.subtitle': 'Verifica la disponibilità sui portali',
  'book.checkIn': 'Check-in',
  'book.checkOut': 'Check-out',
  'book.selectDate': 'Seleziona data',
  'book.adults': 'Adulti',
  'book.adults.hint': 'Età 13+',
  'book.children': 'Bambini',
  'book.children.hint': 'Età 2-12',
  'book.infants': 'Neonati',
  'book.infants.hint': 'Meno di 2 anni',
  'book.decrease': 'Diminuisci',
  'book.increase': 'Aumenta',
  'book.airbnb': 'Verifica disponibilità su Airbnb',
  'book.bookingCom': 'Verifica disponibilità su Booking.com',
  'book.alert.missingDates': 'Seleziona le date di check-in e check-out.',

  /* --- DatePicker --- */
  'datepicker.month.0': 'Gennaio',
  'datepicker.month.1': 'Febbraio',
  'datepicker.month.2': 'Marzo',
  'datepicker.month.3': 'Aprile',
  'datepicker.month.4': 'Maggio',
  'datepicker.month.5': 'Giugno',
  'datepicker.month.6': 'Luglio',
  'datepicker.month.7': 'Agosto',
  'datepicker.month.8': 'Settembre',
  'datepicker.month.9': 'Ottobre',
  'datepicker.month.10': 'Novembre',
  'datepicker.month.11': 'Dicembre',
  'datepicker.day.0': 'Lun',
  'datepicker.day.1': 'Mar',
  'datepicker.day.2': 'Mer',
  'datepicker.day.3': 'Gio',
  'datepicker.day.4': 'Ven',
  'datepicker.day.5': 'Sab',
  'datepicker.day.6': 'Dom',
  'datepicker.prevMonth': 'Mese precedente',
  'datepicker.nextMonth': 'Mese successivo',
  'datepicker.close': 'Chiudi',

  /* --- Cookie banner --- */
  'cookie.label': 'Consenso cookie',
  'cookie.text.before': 'Questo sito utilizza ',
  'cookie.text.strong': 'Google Analytics',
  'cookie.text.after':
    ' per raccogliere statistiche di visita in forma aggregata, attivati solo previo tuo consenso. Puoi accettare o rifiutare: la scelta sarà ricordata su questo dispositivo.',
  'cookie.reject': 'Rifiuta',
  'cookie.accept': 'Accetta',

  /* --- Footer --- */
  'footer.instagram': 'Seguici su Instagram',
  'footer.address': 'Vico Castelfidardo, 10, 70043 Monopoli BA, Italia',
  'footer.languages': 'Lingue parlate: Italiano, Inglese, Francese, Spagnolo',
  'footer.license': 'Numero di licenza: 072030C200040067, IT072030C200040067',
  'footer.rights': 'Tutti i diritti riservati.',
} as const;

/** Chiavi valide per la funzione di traduzione. */
export type TranslationKey = keyof typeof it;

/** Struttura che ogni lingua deve rispettare per intero. */
export type TranslationDictionary = Record<TranslationKey, string>;

const en: TranslationDictionary = {
  /* --- Meta / document --- */
  'meta.title': 'La Casa di LO - Holiday Home in Monopoli',
  'meta.htmlLang': 'en',

  /* --- Navigation --- */
  'nav.about': 'The House',
  'nav.amenities': 'Amenities',
  'nav.gallery': 'Gallery',
  'nav.location': 'Location',
  'nav.book': 'Book',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.backToTop': 'Back to top',
  'nav.language': 'Language',
  'nav.switchToItalian': 'Switch to the Italian version',
  'nav.switchToEnglish': 'Switch to the English version',

  /* --- Hero --- */
  'hero.tagline': 'Your authentic stone retreat in the heart of Monopoli',
  'hero.address': 'Vico Castelfidardo, 10, Monopoli (BA), Italy',
  'hero.logoAlt': 'La Casa di LO',
  'hero.imageAlt': 'Interior of La Casa di LO with exposed tuff stone vaults',

  /* --- About --- */
  'about.title': 'Welcome Home',
  'about.p1.before': 'Recently renovated, ',
  'about.p1.strong': 'La Casa di LO',
  'about.p1.after':
    ' is a charming independent ground-floor house, featuring striking exposed tuff stone vaults and historic flooring.',
  'about.p2.before': 'Located just ',
  'about.p2.strong1': '5 minutes',
  'about.p2.middle': ' from the main square and the cathedral, and a short walk from the famous ',
  'about.p2.strong2': 'Porta Vecchia Beach',
  'about.p2.after':
    '. The house offers about 30 m² of authentic Apulian atmosphere, with a living room, kitchen, bedroom and bathroom.',
  'about.p3':
    'We can host 2 guests. A travel cot for children is available on request.',

  /* --- Amenities --- */
  'amenities.title': 'Comfort and Amenities',
  'amenities.apartment.title': 'The Apartment',
  'amenities.apartment.groundFloor': 'Independent Ground Floor',
  'amenities.apartment.vaults': 'Exposed tuff stone vaults',
  'amenities.apartment.expressCheckin': 'Express check-in',
  'amenities.apartment.minimarket': 'Minimarket on site',
  'amenities.comfort.title': 'Comfort',
  'amenities.comfort.wifi': 'Free WiFi',
  'amenities.comfort.ac': 'Air Conditioning',
  'amenities.comfort.tv': 'Flat-screen TV (Cable)',
  'amenities.comfort.iron': 'Iron and ironing board',
  'amenities.kitchen.title': 'Kitchen and Bathroom',
  'amenities.kitchen.stove': 'Hob, Oven, Fridge',
  'amenities.kitchen.coffee': 'Coffee Machine',
  'amenities.kitchen.hairdryer': 'Hairdryer',
  'amenities.kitchen.toiletries': 'Toiletries set',
  'amenities.badge.pets': 'Pets Allowed (Free)',
  'amenities.badge.maxGuests': 'Max 2 Guests',
  'amenities.badge.noSmoking': 'No Smoking',

  /* --- Gallery --- */
  'gallery.title': 'Gallery',
  'gallery.image.sala': 'Living room with exposed tuff stone vaults and sofa',
  'gallery.image.cameraKlimt': 'Bedroom with a Klimt-inspired painting',
  'gallery.image.cameraCuscini': 'Double bed with decorative cushions',
  'gallery.image.bagnoPietra': 'Stone-clad bathroom with shower',
  'gallery.image.esterno': 'Alley in the historic centre of Monopoli outside the house',
  'gallery.image.posta': 'Close-up of the façade with the letterbox',
  'gallery.openLightbox': 'Open the photo in fullscreen',
  'gallery.lightbox.label': 'Fullscreen photo gallery',
  'gallery.lightbox.close': 'Close the gallery',
  'gallery.lightbox.prev': 'Previous photo',
  'gallery.lightbox.next': 'Next photo',
  'gallery.lightbox.counter': 'Photo {current} of {total}',

  /* --- Location --- */
  'location.title': 'Prime Location',
  'location.beaches.title': 'Beaches',
  'location.beaches.portaVecchia': 'Porta Vecchia',
  'location.beaches.calaPortoRosso': 'Cala Porto Rosso',
  'location.beaches.lidoPantano': 'Lido Pantano',
  'location.around.title': 'Nearby',
  'location.around.ilRitrovo': 'Il Ritrovo Restaurant',
  'location.around.pizziamo': 'Pizziamo Restaurant',
  'location.around.caffeSport': 'Caffè dello Sport',
  'location.transport.title': 'Transport',
  'location.transport.station': 'Monopoli Station',
  'location.transport.bari': 'Bari',
  'location.transport.brindisi': 'Brindisi',
  'location.attractions.title': 'Attractions',
  'location.attractions.cathedral': 'Cathedral',
  'location.attractions.egnazia': 'Egnazia Museum',
  'location.attractions.polignano': 'Polignano a Mare',
  'location.distance.lidoPantano': '1.5 km',
  'location.distance.cathedral': '5 min',

  /* --- Booking --- */
  'book.title': 'Book your stay',
  'book.subtitle': 'Check availability on the booking portals',
  'book.checkIn': 'Check-in',
  'book.checkOut': 'Check-out',
  'book.selectDate': 'Select date',
  'book.adults': 'Adults',
  'book.adults.hint': 'Age 13+',
  'book.children': 'Children',
  'book.children.hint': 'Age 2-12',
  'book.infants': 'Infants',
  'book.infants.hint': 'Under 2 years',
  'book.decrease': 'Decrease',
  'book.increase': 'Increase',
  'book.airbnb': 'Check availability on Airbnb',
  'book.bookingCom': 'Check availability on Booking.com',
  'book.alert.missingDates': 'Please select your check-in and check-out dates.',

  /* --- DatePicker --- */
  'datepicker.month.0': 'January',
  'datepicker.month.1': 'February',
  'datepicker.month.2': 'March',
  'datepicker.month.3': 'April',
  'datepicker.month.4': 'May',
  'datepicker.month.5': 'June',
  'datepicker.month.6': 'July',
  'datepicker.month.7': 'August',
  'datepicker.month.8': 'September',
  'datepicker.month.9': 'October',
  'datepicker.month.10': 'November',
  'datepicker.month.11': 'December',
  'datepicker.day.0': 'Mon',
  'datepicker.day.1': 'Tue',
  'datepicker.day.2': 'Wed',
  'datepicker.day.3': 'Thu',
  'datepicker.day.4': 'Fri',
  'datepicker.day.5': 'Sat',
  'datepicker.day.6': 'Sun',
  'datepicker.prevMonth': 'Previous month',
  'datepicker.nextMonth': 'Next month',
  'datepicker.close': 'Close',

  /* --- Cookie banner --- */
  'cookie.label': 'Cookie consent',
  'cookie.text.before': 'This website uses ',
  'cookie.text.strong': 'Google Analytics',
  'cookie.text.after':
    ' to collect aggregated visit statistics, enabled only with your consent. You can accept or decline: your choice will be remembered on this device.',
  'cookie.reject': 'Decline',
  'cookie.accept': 'Accept',

  /* --- Footer --- */
  'footer.instagram': 'Follow us on Instagram',
  'footer.address': 'Vico Castelfidardo, 10, 70043 Monopoli BA, Italy',
  'footer.languages': 'Languages spoken: Italian, English, French, Spanish',
  'footer.license': 'Licence number: 072030C200040067, IT072030C200040067',
  'footer.rights': 'All rights reserved.',
};

export const translations: Record<Language, TranslationDictionary> = {
  it,
  en,
};

/** Verifica a runtime (e in fase di narrowing) che una stringa sia una lingua supportata. */
export const isLanguage = (value: string | null | undefined): value is Language =>
  !!value && (LANGUAGES as readonly string[]).includes(value);
