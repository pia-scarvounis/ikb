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
    tag: 'Foreldreundersøkelse',
    title: 'Foreldre er fornøyde',
    lead: 'Resultater fra foreldreundersøkelsen for våre barnehager.',
    responsesLabel: 'Svarprosent',
    outOf: 'av 5,0',
    nationalAverage: 'Nasjonalt gjennomsnitt',
    showMore: 'Se mer',
    showLess: 'Se mindre',
    source: 'Kilde',
    categories: [
      'Tilfredshet',
      'Barnets utvikling',
      'Barnets trivsel',
      'Informasjon',
      'Ute- og innemiljø'
    ]
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
    title: 'Informasjon, samarbeid og tilvenning',
    lead:
      'I tett samarbeid med foreldrene legger vi til rette for en trygg, god og positiv start for hvert barn.',
    readMore: 'Les mer',
    close: 'Lukk',
    cards: [
      {
        title: 'Åpen dag',
        text: 'Kom på åpen dag før oppstart og bli kjent med hverdagen i barnehagen.',
        bullets: [
          'Se lokalene og få et inntrykk av hvordan dagene er bygget opp',
          'Møt ansatte og bli bedre kjent med barnehagen',
          'Still spørsmål om rutiner, tilvenning og praktiske forhold'
        ]
      },
      {
        title: 'Oppstartssamtale og foreldresamtaler',
        text: 'Vi legger vekt på tett og åpen dialog med familiene helt fra starten.',
        bullets: [
          'Alle nye barn får en oppstartssamtale kort tid etter at de har begynt',
          'Pedagogisk leder setter av tid til å bli kjent med barnet og familien',
          'Foreldre kan dele informasjon om barnets behov og rutiner',
          'Vi tilbyr to foreldresamtaler i løpet av barnehageåret',
          'Ved behov kan det avtales flere samtaler underveis'
        ]
      },
      {
        title: 'Tilvenning',
        text: 'Tilvenningen tilpasses hvert enkelt barn og hver familie.',
        bullets: [
          'Vi vet at barn reagerer ulikt på oppstart, og derfor tilpasses tilvenningen individuelt',
          'Vi legger vekt på trygghet, nærhet, forutsigbarhet og god tid i starten',
          'Arbeidet vårt bygger blant annet på trygghetssirkelen',
          'Målet er at både barn og foreldre skal føle seg trygge, sett og godt ivaretatt'
        ]
      },
      {
        title: 'Årsplaner og pedagogisk arbeid',
        text: 'Les mer om vår pedagogiske tilnærming i årsplanene våre.',
        bullets: [
          'Arbeidet vårt er forankret i rammeplanen for barnehagen og barnehageloven',
          'Årsplanene gir innsikt i verdier, mål, innhold og aktiviteter gjennom året',
          'De beskriver også tradisjoner, fagområder og hvordan vi jobber med barns utvikling i hverdagen'
        ],
        links: [
          {
            label: 'Årsplan Åkeberg',
            url: '/pdfs/arsplan-akeberg.pdf'
          },
          {
            label: 'Årsplan Enebakkveien',
            url: '/pdfs/arsplan-enebakkveien.pdf'
          }
        ]
      },
      {
        title: 'MyKid-appen',
        text: 'Følg barnets hverdag gjennom MyKid-appen.',
        bullets: [
          'Dagsreferater fra dagen',
          'Bilder fra aktiviteter',
          'Viktig og praktisk informasjon',
          'Registrering av søvn',
          'Registrering av aktiviteter'
        ],
        details: [
          'MyKid fungerer som et viktig bindeledd mellom barnehagen og hjemmet.',
          'Appen gir foreldre innblikk i barnets hverdag og gjør kommunikasjonen enkel og tilgjengelig.'
        ]
      },
      {
        title: 'Pris og betaling',
        text: 'Samme foreldrebetaling som i kommunale barnehager.',
        bullets: [
          'Barnehageplass: 1200 kr per måned',
          'Kostpenger: 250 kr per måned',
          
        ],
        details: [
          'Vi følger de samme satsene og reglene som kommunale barnehager.',
          'For oppdatert informasjon om foreldrebetaling viser vi til Oslo kommune.'
        ],
        links: [
          {
            label: 'Se priser hos Oslo kommune',
            url: 'https://www.oslo.kommune.no/barnehage/pris-og-betaling/'
          }
        ]
      },
      {
        title: 'Klær og utstyr',
        text: 'Barna får sekker og utedresser av barnehagen.',
        details: [
          'Dette utstyret gjenbrukes og går videre når det blir for smått.',
          'Alt annet av klær og utstyr må merkes godt med barnets navn.'
        ],
        sections: [
          {
            heading: 'Ute (høst/vår)',
            items: [
              'Regntøy med strikk under støvlene',
              'Regnvotter og vanlige votter',
              'Lue (gjerne to)',
              'Ull- eller fleecedress',
              'Tynn utedress',
              'Støvler og sko'
            ]
          },
          {
            heading: 'Vinter',
            items: [
              'Vinterdress med strikk under skoene',
              'Regnvotter og ekstra votter',
              'Varm lue, gjerne med hals',
              'Vintersko og cherrox'
            ]
          },
          {
            heading: 'Inne',
            items: [
              'Body eller t-skjorte',
              'Genser',
              'Bukse',
              'Sokker og strømpebukse',
              'Bleier og våtservietter ved behov',
              'Ekstra skift'
            ]
          },
          {
            heading: 'Soving og annet',
            items: [
              'Vogn med vognpose, regntrekk og myggnetting',
              'Smokk eller koseklut ved behov',
              'Soveklær som tynn lue, ullvotter, ullsokker og fleece-/ulldress',
              'Solkrem eller kuldekrem etter sesong',
              'Solhatt, håndkle, vannflaske og kopp til de minste'
            ]
          }
        ]
      },
      {
        title: 'Sykdom',
        text: 'Barnets allmenntilstand avgjør om barnet bør være hjemme.',
        bullets: [
          'Barnet må være i form til å delta i vanlige aktiviteter',
          'Barnet bør være feberfritt',
          'Ved oppkast eller diaré skal barnet være hjemme og i 48 timer etter symptomfrihet'
        ],
        details: [
          'Barn i barnehage er mer utsatt for infeksjoner, og det er vanlig at sykdommer som forkjølelse, ørebetennelse og mageinfeksjoner forekommer oftere.',
          'Som hovedregel er det barnets allmenntilstand som avgjør om det bør være hjemme.',
          'Ved spørsmål om sykdom og tilbakevending anbefaler vi å følge rådene fra Folkehelseinstituttet.'
        ],
        links: [
          {
            label: 'Les FHIs råd',
            url: 'https://www.fhi.no/sm/barnehage/nar-bor-barnet-vare-hjemme-fra-barne/'
          }
        ]
      }
    ]
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