import type { Translation } from '../types'

const no: Translation = {
  nav: {
    departments: 'Avdelinger',
    everyday: 'Hverdagen',
    gallery: 'Galleri',
    parents: 'For foreldre',
    contact: 'Kontakt',
    apply: 'Søk om plass',
  },

  hero: {
    badge: 'Gamlebyen · Oslo · Siden 2003',
    title: 'Der verden møtes',
    titleEm: 'og barn trives',
    subtitle:
      'Vi er en barnehage i Gamle Oslo med plass til de minste (1–2 år) og de store (3–6 år). Vi samler barn og familier fra mange kulturer i et varmt, trygt og stimulerende læringsmiljø.',
    applyBtn: 'Søk om plass',
    stats: { children: 'Barn totalt', departments: 'Avdelinger', score: 'Snitt score' },
  },

  infoStrip: {
    hours: 'Åpningstider:',
    hoursVal: '07:30 – 16:45',
    hotFood: 'Varmmat',
    hotFoodVal: '2 ganger i uken',
    foodFee: 'Kostpenger:',
    foodFeeVal: '250 kr/mnd',
  },

  departments: {
    tag: 'Våre avdelinger',
    title: 'To hus, én barnehage',
    lead:
      'Vi har to flotte anlegg i Gamlebyen-området: ett koselig trehus for de minste på Vålerenga, og et vakkert slott for de store i Åkebergveien.',
    akebergBadge: '3–6 år',
    akebergTitle: 'Åkeberg - for de eldste',
    akebergDesc:
      'Storebarnsavdelingene Sølvpilen og Månestråle ligger i et vakkert slott med stor hage. Kreativiteten er i høysetet. Skoleklubben avslutter med tur til Dyreparken og Kardemomme by.',
    enebakkBadge: '1–2 år',
    enebakkTitle: 'Enebakkveien - for de yngste',
    enebakkDesc:
      'Et koselig trehus med oversiktlig hage på Vålerenga. Tre avdelinger med 9 barn og 3 voksne på hver. Høy voksentetthet og nærhet til hvert barn er vår prioritet.',
    chips: {
      akeberg: ['42 barn', 'Sølvpilen · Månestråle', 'Tur-dag ukentlig'],
      enebakk: ['27 barn', 'Askeladden · Tommeliten · Veslefrikk', 'Tur-dag ukentlig'],
    },
    addresses: {
      akeberg: 'Åkebergveien 23, 0657 Oslo',
      enebakk: 'Enebakkveien 22, 0657 Oslo',
    },
    imageAlts: {
      akeberg: 'IKB Åkeberg barnehage',
      enebakk: 'IKB Enebakkveien barnehage',
    },
  },

  dailySchedule: {
    tag: 'Hverdagen vår',
    title: 'Hverdagen i barnehagen',
    lead:
      'Et lite innblikk i hvordan dagene våre ser ut, og hva som preger hverdagen i barnehagen.',
    scheduleTitle: 'Dagsrytme',
    schedule: [
      {
        time: '07:30',
        title: 'Barnehagen åpner',
        text: 'Vi starter dagen sammen med samarbeidsavdelinger. Medbrakt frokost spises, etterfulgt av frilek.',
      },
   
      {
        time: '09:30',
        title: 'Kjernetid starter',
        text: 'Barna deles i lekegrupper med ulike aktiviteter. Småbarn: utetid.',
      },
      {
        time: '10:30',
        title: 'Samlingsstund og lunsj',
        text: 'Ryddetid, samlingsstund, bleieskift og håndvask. Barnehagen serverer lunsj.',
      },
      {
        time: '11:30',
        title: 'Ute- og sovetid',
        text: 'Storebarn har utetid. Småbarn sover ute i vogn med sovevakt.',
      },
      {
        time: '14:00',
        title: 'Matpakke-måltid',
        text: 'Bleieskift, do-besøk og håndvask. Barna spiser medbrakt matboks.',
      },
      {
        time: '14:30',
        title: 'Lek og hvilestund',
        text: 'Lek i grupper ute eller inne, hvilestund for storebarnsavdelinger med høytlesning/lydbøk.',
      },
      
      {
        time: '16:45',
        title: 'Henting',
        text: 'Barna bør være hentet senest 16:45 så personalet får tid til å stenge barnehagen.',
      },
      {
        time: '17:00',
        title: 'Barnehagen låses',
        text: '',
      },
    ],
    scheduleNote:
      'Alle tider er veiledende. Barnehagen serverer 2 varmmåltid i uken. Vi har gymsal to timer én dag i uken.',
    showMore: 'Se hele dagsrytmen',
    showLess: 'Skjul dagsrytmen',
    imageAlt: 'Barn i barnehagen',
    aboutItems: [
      {
        title: 'Språk og inkludering',
        text: 'Vi jobber aktivt med språk fra barna er ett år gjennom lek, begreper og lesing. Vi bruker Være Sammen-programmet for inkludering og tidlig innsats.',
      },
      {
        title: 'Mat og måltider',
        text: 'Vi lager et måltid om dagen som barna spiser kl 11 – varmmat tilbys 2 ganger i uken. Medbragt matpakke spises kl 14',
      },
      {
        title: 'Friluft og turdager',
        text: 'Vi er ute hver dag i all slags vær. Alle avdelinger har en fast tur-dag i uken. De minste barna sover ute i vogn med sovevakt tilstede hele tiden.',
      },
      {
        title: 'Tradisjoner og avslutning',
        text: 'Aldersinndelte klubber. Skoleklubben er aktiv hele det siste barnehageåret og avslutter med tur til Dyreparken og overnatting i Kardemomme by.',
      },
    ],
  },

  gallery: {
    tag: 'Hverdagen vår',
    title: 'Små øyeblikk i bilder',
    lead: 'Bilder fra hverdagen i Internasjonal Kulturbarnehage.',
  },

  survey: {
    tag: 'Nasjonal foreldreundersøkelse',
    title: 'Foreldrene er fornøyde',
    responses: 'svar',
    avg: 'Snitt',
    source: 'Kilde: Utdanningsdirektoratets foreldreundersøkelse',
    categories: [
      'Barnet trives',
      'Ansatte er engasjerte',
      'Lek og læring',
      'Informasjon og kommunikasjon',
      'Medvirkning',
    ],
  },

  staff: {
    tag: 'Vårt personale',
    title: 'Engasjerte mennesker med hjerte for barna',
    p1: 'Hos oss møter barna pedagoger, barne- og ungdomsarbeidere og barnehagemedarbeidere som brenner for det de gjør. Vi er opptatt av trygghet, tilstedeværelse og gode relasjoner, og ønsker at hvert barn skal bli sett og møtt på en varm og respektfull måte.',
    p2: 'Vi legger til rette for faglig utvikling og videreutdanning, og vi tror på å lære sammen som personale. Felles kompetanseheving gir et sterkere fellesskap og en mer helhetlig hverdag for barna.',
    p3: 'Studieturer og felles turer brukes også som inspirasjon og læring. For oss handler det ikke bare om personalets utvikling, men også om å få innblikk i hvordan barn lever, lærer og blir møtt i andre land og kulturer.',
    note: 'Vi ønsker å være et personale som kombinerer faglighet, varme og nysgjerrighet i møte med barna hver eneste dag.',
  },

  parents: {
    tag: 'For foreldre',
    title: 'Samarbeid og tilvenning',
    lead:
      'Barnehagen skal i samarbeid med foreldrene legge til rette for at barna kan få en trygg og god start.',
    cards: [
      {
        title: 'Åpen dag',
        text: 'Informasjonsmøte med nye foreldre og mulighet til å besøke barnehagen før oppstart.',
      },
      {
        title: 'Oppstartssamtale',
        text: 'Alle nye barn får en oppstartssamtale kort tid etter at de har begynt.',
      },
      {
        title: 'Tilvenning',
        text: 'Gode faste rutiner, høy voksentetthet, små grupper og tilstedeværelse. Trygghetssirkelen',
      },
      {
        title: 'Årsplaner',
        text: 'Les om vår pedagogiske tilnærming i årsplan for Åkeberg og Enebakkveien.',
      },
      {
        title: 'MyKid-appen',
        text: 'Følg barnet ditt gjennom dagen via MyKid-appen. Her legger vi ut dagsreferat og bilder',
      },
      {
        title: 'Pris og betaling',
        text: 'Kostpenger 250 kr/mnd. Full prisoversikt hos Oslo kommune.',
      },
    ],
  },

  contact: {
    tag: 'Ta kontakt',
    title: 'Vi svarer deg raskt',
    lead: 'Har du spørsmål om plass, tilvenning eller hverdagen? Ta gjerne kontakt direkte.',
    director: 'Daglig leder',
    owner: 'Eier',
    practical: 'Praktisk informasjon',
    hours: 'Åpningstider:',
    hoursVal: '07:30 – 16:45',
    address: 'Enebakkveien 22 · Åkebergveien 23 · 0657 Oslo',
    orgNo: 'Org.nr: 985 865 086 / 987 146 192',
  },

  footer: {
    tagline:
      'Vi gir barna en levende hverdag, inspirert av årstidene, naturen, mennesket og kultur. Åpenhet, undring og respekt.',
    departmentsHeading: 'Avdelinger',
    infoHeading: 'Informasjon',
    contactHeading: 'Kontakt',
    links: {
      akeberg: 'Åkeberg (3–6 år)',
      enebakk: 'Enebakkveien (1–2 år)',
      mykid: 'MyKid-innlogging',
      apply: 'Søk om plass',
      pricing: 'Pris og betaling',
      facts: 'Barnehagefakta',
    },
    copyright: 'Internasjonal Kulturbarnehage',
    orgNo: 'Org.nr: 985 865 086 / 987 146 192',
  },
}

export default no