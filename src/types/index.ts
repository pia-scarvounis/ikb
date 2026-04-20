export type Lang = 'no' | 'en'

export interface DetailItem {
  title: string
  text: string
}

export interface HighlightItem {
  title: string
  text: string
}

export interface CardItem {
  title: string
  text: string
}

export interface ScheduleItem {
  time: string
  title: string
  text: string
}

export interface Translation {
  nav: {
    departments: string
    survey: string
    staff: string
    contact: string
    apply: string
  }

  hero: {
    badge: string
    title: string
    titleEm: string
    subtitle: string
    applyBtn: string
    stats: {
      children: string
      departments: string
      score: string
    }
  }

  infoStrip: {
    hours: string
    hoursVal: string
    hotFood: string
    hotFoodVal: string
    foodFee: string
    foodFeeVal: string
  }

  departments: {
    tag: string
    title: string
    lead: string
    akebergBadge: string
    akebergTitle: string
    akebergDesc: string
    enebakkBadge: string
    enebakkTitle: string
    enebakkDesc: string
    chips: {
      akeberg: string[]
      enebakk: string[]
    }
    addresses: {
      akeberg: string
      enebakk: string
    }
    imageAlts: {
      akeberg: string
      enebakk: string
    }
  }

  dailySchedule: {
    tag: string
    title: string
    lead: string
    scheduleTitle: string
    schedule: ScheduleItem[]
    scheduleNote: string
    showMore: string
    showLess: string
    imageAlt: string
    aboutItems: DetailItem[]
  }

  gallery: {
    tag: string
    title: string
    lead: string
  }

  survey: {
    tag: string
    title: string
    responses: string
    avg: string
    source: string
    categories: string[]
  }
  staff: {
    tag: string
    title: string
    p1: string
    p2: string
    p3: string
    note: string
  }

  parents: {
    tag: string
    title: string
    lead: string
    cards: CardItem[]
  }

  contact: {
    tag: string
    title: string
    lead: string
    director: string
    owner: string
    practical: string
    hours: string
    hoursVal: string
    address: string
    orgNo: string
  }

  footer: {
    tagline: string
    departmentsHeading: string
    infoHeading: string
    contactHeading: string
    links: {
      akeberg: string
      enebakk: string
      mykid: string
      apply: string
      pricing: string
      facts: string
    }
    copyright: string
    orgNo: string
  }
}