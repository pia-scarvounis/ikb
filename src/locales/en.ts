import type { Translation } from '../types'

const en: Translation = {
  nav: {
    departments: 'Departments',
    everyday: 'Daily life',
    gallery: 'Gallery',
    parents: 'For parents',
    contact: 'Contact',
    apply: 'Apply for a place',
  },

  hero: {
    badge: 'Gamlebyen · Oslo · Since 2003',
    title: 'Where the world meets',
    titleEm: 'and children thrive',
    subtitle:
      'We are a kindergarten in Gamle Oslo with places for the youngest (1–2 years) and the older children (3–6 years). We bring together children and families from many cultures in a warm, safe and stimulating learning environment.',
    applyBtn: 'Apply for a place',
    stats: { children: 'Total children', departments: 'Departments', score: 'Average score' },
  },

  infoStrip: {
    hours: 'Opening hours:',
    hoursVal: '07:30 – 16:45',
    hotFood: 'Hot meals',
    hotFoodVal: '2 times per week',
    foodFee: 'Food fee:',
    foodFeeVal: '250 NOK/month',
  },

  departments: {
    tag: 'Our departments',
    title: 'Two houses, one kindergarten',
    lead:
      'We have two great locations in the Gamlebyen area: a cosy wooden house for the youngest on Vålerenga, and a beautiful manor for the older children in Åkebergveien.',
    akebergBadge: '3–6 years',
    akebergTitle: 'Åkeberg - for the oldest',
    akebergDesc:
      'The older children departments Sølvpilen and Månestråle are located in a beautiful manor with a large garden. Creativity is central. The school group ends with a trip to the zoo and Kardemomme Town.',
    enebakkBadge: '1–2 years',
    enebakkTitle: 'Enebakkveien - for the youngest',
    enebakkDesc:
      'A cosy wooden house with a clear and safe garden on Vålerenga. Three departments with 9 children and 3 adults in each. A high staff-to-child ratio and closeness to each child are our priorities.',
    chips: {
      akeberg: ['42 children', 'Sølvpilen · Månestråle', 'Weekly excursion day'],
      enebakk: ['27 children', 'Askeladden · Tommeliten · Veslefrikk', 'Weekly excursion day'],
    },
    addresses: {
      akeberg: 'Åkebergveien 23, 0657 Oslo',
      enebakk: 'Enebakkveien 22, 0657 Oslo',
    },
    imageAlts: {
      akeberg: 'IKB Åkeberg kindergarten',
      enebakk: 'IKB Enebakkveien kindergarten',
    },
  },

  dailySchedule: {
    tag: 'Our daily life',
    title: 'Daily life in the kindergarten',
    lead:
      'A small insight into what our days look like and what shapes everyday life in the kindergarten.',
    scheduleTitle: 'Daily routine',
    schedule: [
      {
        time: '07:30',
        title: 'Kindergarten opens',
        text: 'We start the day together with shared departments. Packed breakfast is eaten, followed by free play.',
      },
      {
        time: '09:30',
        title: 'Core time begins',
        text: 'Children are divided into play groups with different activities. Toddlers: outdoor time.',
      },
      {
        time: '10:30',
        title: 'Circle time and lunch',
        text: 'Clean-up time, circle time, diaper changes and hand washing. Lunch is served by the kindergarten.',
      },
      {
        time: '11:30',
        title: 'Outdoor time and nap',
        text: 'Older children are outside. Toddlers sleep outdoors in prams with supervision.',
      },
      {
        time: '14:00',
        title: 'Packed lunch meal',
        text: 'Diaper changes, toilet visits and hand washing. Children eat their packed lunch.',
      },
      {
        time: '14:30',
        title: 'Play and rest time',
        text: 'Play in groups outdoors or indoors, rest time for older children with reading/audiobooks.',
      },
      {
        time: '16:45',
        title: 'Pick-up',
        text: 'Children should be picked up no later than 16:45 so staff have time to close the kindergarten.',
      },
      {
        time: '17:00',
        title: 'Kindergarten closes',
        text: '',
      },
    ],
    scheduleNote:
      'All times are approximate. The kindergarten serves 2 hot meals per week. We have gym sessions for two hours one day per week.',
    showMore: 'View full schedule',
    showLess: 'Hide schedule',
    imageAlt: 'Children in the kindergarten',
    aboutItems: [
      {
        title: 'Language and inclusion',
        text: 'We actively work with language from the age of one through play, concepts and reading. We use the Være Sammen programme for inclusion and early intervention.',
      },
      {
        title: 'Food and meals',
        text: 'We prepare one meal per day served at 11 – hot meals are offered 2 times per week. Packed lunch is eaten at 14',
      },
      {
        title: 'Outdoor life and excursions',
        text: 'We are outside every day in all kinds of weather. All departments have a fixed excursion day each week. The youngest children sleep outdoors in prams with supervision at all times.',
      },
      {
        title: 'Traditions and ending',
        text: 'Age-based groups. The school group is active throughout the final kindergarten year and ends with a trip to the zoo and an overnight stay in Kardemomme Town.',
      },
    ],
  },

  gallery: {
    tag: 'Our daily life',
    title: 'Small moments in pictures',
    lead: 'Photos from everyday life at Internasjonal Kulturbarnehage.',
  },

  survey: {
    tag: 'Parent survey',
    title: 'Parents are satisfied',
    lead: 'Results from the parent survey for our kindergartens.',
    responsesLabel: 'Response rate',
    outOf: 'out of 5.0',
    nationalAverage: 'National average',
    showMore: 'Show more',
    showLess: 'Show less',
    source: 'Source',
    categories: [
      'Satisfaction',
      'Child development',
      'Child well-being',
      'Information',
      'Outdoor and indoor environment'
    ]
  },

  staff: {
    tag: 'Our staff',
    title: 'Dedicated people with a heart for children',
    p1: 'Here, children meet teachers, child and youth workers, and kindergarten assistants who are passionate about what they do. We focus on safety, presence and strong relationships, and want every child to feel seen and met with warmth and respect.',
    p2: 'We facilitate professional development and further education, and we believe in learning together as a staff. Shared competence building creates a stronger community and a more cohesive everyday life for the children.',
    p3: 'Study trips and shared trips are also used for inspiration and learning. For us, it is not only about staff development, but also about gaining insight into how children live, learn and are cared for in other countries and cultures.',
    note: 'We aim to be a staff that combines professionalism, warmth and curiosity in meeting children every single day.',
  },

  parents: {
    tag: 'For parents',
    title: 'Information, collaboration and settling in',
    lead:
      'In close collaboration with parents, we aim to provide a safe, supportive and positive start for every child.',
    readMore: 'Read more',
    close: 'Close',
    cards: [
      {
        title: 'Open day',
        text: 'Join our open day before your child starts and get to know everyday life in the kindergarten.',
        bullets: [
          'Explore the facilities and get a sense of how the days are structured',
          'Meet our staff and become familiar with the kindergarten',
          'Ask questions about routines, settling in and practical matters'
        ]
      },
      {
        title: 'Start-up meeting and parent meetings',
        text: 'We prioritize close and open communication with families from the very beginning.',
        bullets: [
          'All new children are offered a start-up meeting shortly after they begin',
          'The pedagogical leader sets aside time to get to know the child and family',
          'Parents can share information about the child’s needs and routines',
          'We offer two parent meetings during the kindergarten year',
          'Additional meetings can be arranged if needed'
        ]
      },
      {
        title: 'Settling in',
        text: 'The settling-in period is adapted to each individual child and family.',
        bullets: [
          'We know children respond differently to starting kindergarten, so the process is tailored individually',
          'We emphasize safety, closeness, predictability and giving enough time in the beginning',
          'Our work is based on the Circle of Security approach',
          'Our goal is for both children and parents to feel safe, seen and well cared for'
        ]
      },
      {
        title: 'Annual plans and pedagogy',
        text: 'Learn more about our pedagogical approach through our annual plans.',
        bullets: [
          'Our work is based on the Norwegian Framework Plan for Kindergartens and the Kindergarten Act',
          'The annual plans provide insight into values, goals, content and activities throughout the year',
          'They also describe traditions, learning areas and how we support children’s development in everyday situations'
        ],
        links: [
          {
            label: 'Annual plan Åkeberg',
            url: '/pdfs/arsplan-akeberg.pdf'
          },
          {
            label: 'Annual plan Enebakkveien',
            url: '/pdfs/arsplan-enebakkveien.pdf'
          }
        ]
      },
      {
        title: 'MyKid app',
        text: 'Follow your child’s daily life through the MyKid app.',
        bullets: [
          'Daily reports',
          'Photos from activities',
          'Important and practical information',
          'Sleep tracking',
          'Activity tracking'
        ],
        details: [
          'MyKid serves as an important link between the kindergarten and home.',
          'The app gives parents insight into the child’s day and makes communication simple and accessible.'
        ]
      },
      {
        title: 'Fees and payment',
        text: 'Parent fees are the same as in municipal kindergartens.',
        bullets: [
          'Food fee: NOK 250 per month',
          'Full overview of prices is available from Oslo Municipality'
        ],
        details: [
          'We follow the same regulations and pricing as public kindergartens.',
          'For updated information about fees, please refer to Oslo Municipality.'
        ],
        links: [
          {
            label: 'See prices from Oslo Municipality',
            url: 'https://www.oslo.kommune.no/barnehage/pris-og-betaling/'
          }
        ]
      },
      {
        title: 'Clothing and equipment',
        text: 'Children are provided with backpacks and outdoor suits by the kindergarten.',
        details: [
          'This equipment is reused and passed on when children outgrow it.',
          'All personal clothing and equipment should be clearly labeled with the child’s name.'
        ],
        sections: [
          {
            heading: 'Outdoor (spring/autumn)',
            items: [
              'Rainwear with straps under boots',
              'Rain mittens and regular mittens',
              'Hat (preferably two)',
              'Wool or fleece suit',
              'Light outdoor suit',
              'Boots and shoes'
            ]
          },
          {
            heading: 'Winter',
            items: [
              'Winter suit with straps under shoes',
              'Rain mittens and extra mittens',
              'Warm hat, preferably with a neck cover',
              'Winter boots and insulated rubber boots'
            ]
          },
          {
            heading: 'Indoor',
            items: [
              'Body or t-shirt',
              'Sweater',
              'Pants',
              'Socks and tights',
              'Diapers and wet wipes if needed',
              'Extra clothing'
            ]
          },
          {
            heading: 'Sleep and other',
            items: [
              'Stroller with sleeping bag, rain cover and mosquito net',
              'Pacifier or comfort item if needed',
              'Sleepwear such as a thin hat, wool mittens, wool socks and fleece/wool suit',
              'Sunscreen or cold cream depending on the season',
              'Sun hat, towel, water bottle and cup for younger children'
            ]
          }
        ]
      },
      {
        title: 'Illness',
        text: 'The child’s general condition determines whether they should stay home.',
        bullets: [
          'The child should be well enough to participate in normal activities',
          'The child should be fever-free',
          'In case of vomiting or diarrhea, the child must stay home and for 48 hours after symptoms have stopped'
        ],
        details: [
          'Children in kindergarten are more exposed to infections, and it is common for illnesses such as colds, ear infections and stomach viruses.',
          'As a general rule, the child’s overall condition determines whether they should stay home.',
          'For guidance on illness and returning to kindergarten, we recommend following advice from the Norwegian Institute of Public Health.'
        ],
        links: [
          {
            label: 'Read official guidelines',
            url: 'https://www.fhi.no/sm/barnehage/nar-bor-barnet-vare-hjemme-fra-barne/'
          }
        ]
      }
    ]
  },
  contact: {
    tag: 'Get in touch',
    title: 'We respond quickly',
    lead: 'Do you have questions about a place, settling in or daily life? Feel free to contact us directly.',
    director: 'Director',
    owner: 'Owner',
    practical: 'Practical information',
    hours: 'Opening hours:',
    hoursVal: '07:30 – 16:45',
    address: 'Enebakkveien 22 · Åkebergveien 23 · 0657 Oslo',
    orgNo: 'Org.no: 985 865 086 / 987 146 192',
  },

  footer: {
    tagline:
      'We give children a vibrant everyday life, inspired by seasons, nature, people and culture. Openness, curiosity and respect.',
    departmentsHeading: 'Departments',
    infoHeading: 'Information',
    contactHeading: 'Contact',
    links: {
      akeberg: 'Åkeberg (3–6 years)',
      enebakk: 'Enebakkveien (1–2 years)',
      mykid: 'MyKid login',
      apply: 'Apply for a place',
      pricing: 'Pricing and payment',
      facts: 'Kindergarten facts',
    },
    copyright: 'Internasjonal Kulturbarnehage',
    orgNo: 'Org.no: 985 865 086 / 987 146 192',
  },
}

export default en