// src/lib/data.ts — Single source of truth for all brand content

export const NAV_LINKS = [
  { href: '/',              label: 'Home' },
  { href: '/about',         label: 'About' },
  { href: '/tees',          label: 'The Tees' },
  { href: '/track-order',   label: 'Track Order' },
  { href: '/jobs',          label: 'Jobs' },
  { href: '/compliance',    label: 'Compliance' },
  { href: '/contact',       label: 'Contact' },
]

export const TEES = [
  {
    id: 'original',
    num: '01',
    name: 'The Original',
    tag: 'Classic · Unisex · Heavy Cotton',
    desc: 'Bark brown. Cream chest print. Understated enough for people who get it — loud enough for everyone else to ask. The one that started this quiet riot.',
    price: 420,
    swatch: 'linear-gradient(135deg, #2c2416, #4a3a28)',
    status: 'available' as const,
  },
  {
    id: 'blank-canvas',
    num: '02',
    name: 'The Blank Canvas',
    tag: 'Cream · Unisex · Medium Weight',
    desc: "Cream on cream. Almost invisible branding. For the person who knows they had Gafle but doesn't feel the need to explain it to strangers on public transport.",
    price: 395,
    swatch: 'linear-gradient(135deg, #e8e0d0, #c4b99a)',
    swatchBorder: true,
    status: 'available' as const,
  },
  {
    id: 'statement',
    num: '03',
    name: 'The Statement',
    tag: 'Rust/Gold · Unisex · Premium Cotton',
    desc: 'For when you want the Gafle energy to precede you into the room. Rust base with gold type. Slightly louder. Slightly unsorry about it.',
    price: 450,
    swatch: 'linear-gradient(135deg, #b85c2a, #c9922a)',
    status: 'available' as const,
  },
]

export const JOBS = {
  entry: [
    {
      title: 'Brand Ambassador — Cape Town',
      type: 'Part-time',
      location: 'Cape Town',
      status: 'open' as const,
      desc: "Wear the brand. Talk about it naturally. Help us show up in spaces we haven't reached yet. No script, no sales targets. Just genuine representation of what iHadGafle means.",
    },
    {
      title: 'Photography Assistant',
      type: 'Freelance',
      location: 'Cape Town',
      status: 'open' as const,
      desc: "Assist on campaign shoots and product photography. No professional experience required — if you have an eye, we'll see it. Own transport preferred but not required.",
    },
    {
      title: 'Order Fulfilment & Packing',
      type: 'Casual',
      location: 'Cape Town',
      status: 'open' as const,
      desc: 'Pack orders carefully, correctly, and with the same energy we put into making them. Part-time and casual shifts available. Reliable, detail-oriented people only.',
    },
  ],
  experienced: [
    {
      title: 'Graphic Designer — Brand & Print',
      type: 'Freelance / Part-time',
      location: 'Remote',
      status: 'open' as const,
      desc: 'Design for tee graphics, campaign assets, and digital content. You understand restraint and know when not to add another element. 2+ years in brand or product design preferred.',
    },
    {
      title: 'Social Media Content Creator',
      type: 'Freelance',
      location: 'Remote',
      status: 'open' as const,
      desc: "Create content that sounds like us — dry, confident, honest, occasionally funny without trying too hard. Strong writing required. Photography a bonus. 1–3 years experience preferred.",
    },
    {
      title: 'Photographer — Products & Campaigns',
      type: 'Freelance',
      location: 'Cape Town',
      status: 'filled' as const,
      desc: 'This role is currently filled. Send your portfolio anyway — we keep a list of people with Gafle for when we need them next.',
    },
  ],
  professional: [
    {
      title: 'Brand Strategist',
      type: 'Consulting / Retainer',
      location: 'Remote',
      status: 'open' as const,
      desc: "Help us think clearly about where iHadGafle goes without losing what makes it worth following. You understand brand equity, restraint, and how to grow without diluting. 5+ years required.",
    },
    {
      title: 'Operations & Logistics Lead',
      type: 'Part-time',
      location: 'Cape Town',
      status: 'open' as const,
      desc: "Own the end-to-end fulfilment process — from supplier coordination to last-mile delivery. You've done this in a product or fashion brand before. You make complexity invisible.",
    },
    {
      title: 'General Expression of Interest',
      type: 'Open',
      location: 'Anywhere',
      status: 'open' as const,
      desc: "Don't see your role? Send us what you do and why you think you'd fit. We read every message. If the Gafle is there, we'll find a way to work together.",
    },
  ],
}

export const IDLE_TOASTS = [
  "Still here? <b>Bold.</b> We respect it.",
  "The tees aren't buying themselves. Just so you know.",
  "Idle hands had Gafle too, for what it's worth.",
  "Gafle recognizes Gafle. We see you.",
  "You've been still a while. The cursor needed the break.",
  "Taking your time? Good. Rushed decisions are how people get the wrong tee.",
  "Pro tip: tees look better when you're actually wearing them.",
  "At this point you're basically part of the brand. Welcome.",
  "No pressure. The Gafle isn't going anywhere.",
  "Browsing is a skill. You're doing great.",
  "We're not judging. We're observing. With affection.",
  "Every second you spend here, your Gafle compounds. Probably.",
  "The tee you're meant to wear is still right there. Whenever you're ready.",
  "Fun fact: indecision is just Gafle building up pressure.",
  "We made three tees. You've seen all three. And yet, here we are.",
  "Your cursor hasn't moved in a while. Everything okay? No pressure if not.",
]

export const TAB_TAUNTS = [
  "psst. you left.",
  "iHadGafle misses you.",
  "the tees are still here.",
  "come back. no pressure.",
  "your Gafle is waiting.",
  "did something better come up? fair.",
  "we're not going anywhere.",
  "still here when you're ready.",
]

export const GAFLE_DEFINITIONS = [
  { word: 'Gafle',     def: '"The quiet, stubborn ability to do — regardless of the noise around you."' },
  { word: 'ability',   def: '"The raw capacity to act, create, and move — without needing applause first."' },
  { word: 'potential', def: '"What you had before you knew you were supposed to doubt it."' },
  { word: 'shine',     def: '"The thing inside you that keeps going when everything else suggests otherwise."' },
  { word: 'fire',      def: '"An untranslatable force that other languages would need three words for."' },
  { word: 'drive',     def: '"The original version of you, before anyone got to edit it."' },
]

export const MARQUEE_ITEMS_1 = [
  'iHadGafle', '◆', 'You Already Had It', '◆',
  'The Ability To Shine', '◆', 'Three Tees Only', '◆',
  'iHadGafle', '◆', 'You Already Had It', '◆',
  'The Ability To Shine', '◆', 'Three Tees Only', '◆',
]

export const MARQUEE_ITEMS_2 = [
  'No Bias', '◇', 'Just Vibes', '◇',
  'All Gafle Reserved', '◇', 'Cape Town ZA', '◇',
  'No Bias', '◇', 'Just Vibes', '◇',
  'All Gafle Reserved', '◇', 'Cape Town ZA', '◇',
]
