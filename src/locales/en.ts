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
    tag: 'National parent survey',
    title: 'Parents are satisfied',
    responses: 'responses',
    avg: 'Average',
    source: 'Source: Norwegian Directorate for Education parent survey',
    categories: [
      'The child thrives',
      'Staff are engaged',
      'Play and learning',
      'Information and communication',
      'Participation',
    ],
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
    title: 'Collaboration and settling in',
    lead:
      'The kindergarten, in collaboration with parents, should ensure that children get a safe and good start.',
    cards: [
      {
        title: 'Open day',
        text: 'Information meeting with new parents and the opportunity to visit the kindergarten before start.',
      },
      {
        title: 'Start-up conversation',
        text: 'All new children receive a start-up conversation shortly after they begin.',
      },
      {
        title: 'Settling in',
        text: 'Good routines, high staff density, small groups and presence. Circle of Security',
      },
      {
        title: 'Annual plans',
        text: 'Read about our pedagogical approach in the annual plans for Åkeberg and Enebakkveien.',
      },
      {
        title: 'MyKid app',
        text: 'Follow your child throughout the day via the MyKid app. Here we share daily reports and photos',
      },
      {
        title: 'Pricing and payment',
        text: 'Food fee 250 NOK/month. Full price overview at Oslo municipality.',
      },
    ],
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