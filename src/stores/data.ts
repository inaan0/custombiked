export interface Model {
  id: string
  tag: string
  name: string
  priceFrom: string
  blurb: string
  long: string
  specs: string[]
  convs: string[]
}

export interface Review {
  id: string
  type: 'photo' | 'video'
  rating: number
  name: string
  bike: string
  when: string
  initial: string
  quote: string
}

export const MODELS: Model[] = [
  {
    id: 'nmax',
    tag: 'City commuter',
    name: 'NMAX',
    priceFrom: 'From $4,200',
    blurb: 'A low, flat floor and easy step-through frame make the NMAX our most-loved base for trike conversions.',
    long: 'The 155cc automatic NMAX is light, smooth and supremely manageable. Its step-through layout and low seat make mounting and dismounting effortless — the ideal canvas for an outrigger or full trike build for city and suburban riding.',
    specs: ['Auto / CVT', 'Low step-through', 'Trike-ready'],
    convs: ['Retractable outrigger wheels', 'Full trike conversion', 'Hand throttle & brake', 'Lowered seat height'],
  },
  {
    id: 'adv',
    tag: 'Adventure tourer',
    name: 'ADV',
    priceFrom: 'From $5,600',
    blurb: 'Taller stance and long-travel suspension. We add reverse gear and outriggers for confident stops anywhere.',
    long: 'The ADV brings a commanding ride height and rugged suspension for riders who want to go further than the high street. We fit a powered reverse and stability outriggers so uneven ground and inclines never catch you out.',
    specs: ['Long-travel suspension', 'Reverse gear', 'All-terrain'],
    convs: ['Stability outriggers', 'Powered reverse gear', 'Hand controls', 'Adaptive grip switches'],
  },
  {
    id: 'aerox',
    tag: 'Sport & agile',
    name: 'AEROX',
    priceFrom: 'From $4,800',
    blurb: 'Light and nimble. A hand-control conversion keeps the sporty feel with full, easy control.',
    long: 'For riders who want something quicker and more spirited, the lightweight AEROX responds beautifully to a hand-control conversion. Throttle and braking move to the bars, tuned precisely to your strength and reach.',
    specs: ['Lightweight', 'Sporty', 'Hand controls'],
    convs: ['Bar-mounted hand controls', 'Outrigger stability wheels', 'Custom braking', 'Tailored grip & reach'],
  },
  {
    id: 'click',
    tag: 'Compact city',
    name: 'Click',
    priceFrom: 'From $3,900',
    blurb: 'A small, featherweight scooter — easy to handle and one of our most affordable conversion bases.',
    long: 'The Click is compact, light and wonderfully easy to manage in traffic. Its low weight makes it forgiving to ride and a budget-friendly starting point for outriggers, a lowered seat, or a full set of hand controls.',
    specs: ['Featherweight', 'Affordable', 'Easy handling'],
    convs: ['Retractable outriggers', 'Lowered step-through', 'Hand controls', 'Tailored grip & reach'],
  },
  {
    id: 'benelli',
    tag: 'Classic & roomy',
    name: 'Benelli',
    priceFrom: 'From $5,200',
    blurb: 'A larger, planted ride with plenty of presence — well suited to a confident full trike conversion.',
    long: 'With its roomy frame and reassuring weight, the Benelli makes a stable, comfortable base for longer rides. We pair it with a full trike conversion, powered reverse and bespoke controls for riders who want room to stretch out.',
    specs: ['Roomy frame', 'Stable & planted', 'Trike-ready'],
    convs: ['Full trike conversion', 'Powered reverse gear', 'Hand controls', 'Adaptive grip switches'],
  },
]

export const HOME_FEATURES = [
  { title: 'Trike & outriggers', desc: 'Two planted rear wheels or retractable stabilisers — never a foot down at a stop.' },
  { title: 'Hand controls', desc: 'Throttle and braking moved to the bars and tuned to your grip and strength.' },
  { title: 'Step-through frames', desc: 'Lowered seats and open frames make mounting and dismounting effortless.' },
  { title: 'Reverse gear', desc: 'Back out of any parking spot or incline with a powered reverse.' },
]

export const CONVERSIONS = [
  { title: 'Outrigger stability wheels', desc: 'Retractable wheels deploy at low speed and at stops, then tuck away as you ride.' },
  { title: 'Full trike conversion', desc: 'Two rear wheels for a rock-solid stance that stays upright at a standstill.' },
  { title: 'Hand controls', desc: 'Throttle and braking relocated to the handlebars for riders with limited leg mobility.' },
  { title: 'Lowered step-through', desc: 'Reduced seat height and an open frame for easy, confident mounting.' },
  { title: 'Powered reverse gear', desc: 'Reverse out of parking spots, driveways and inclines without putting a foot down.' },
  { title: 'Adaptive grips & switches', desc: 'Controls reshaped and repositioned to your reach, grip strength and dexterity.' },
]

export const STEPS = [
  { n: '01', title: 'Conversation', desc: 'We talk through how you ride today, what gets in the way, and where you want to go.' },
  { n: '02', title: 'Fitting', desc: 'A hands-on session to measure reach, grip and posture against the right base bike.' },
  { n: '03', title: 'Build', desc: 'Our workshop fits and tunes your conversion — outriggers, controls and frame.' },
  { n: '04', title: 'Handover', desc: 'A guided first ride, final adjustments, and a 2-year conversion warranty.' },
]

export const TESTIMONIALS = [
  { quote: '"I hadn\'t ridden in eleven years. CustomBiked had me back on the road in a single weekend."', name: 'Marcus R.', detail: 'NMAX · Trike conversion', initial: 'M' },
  { quote: '"The outrigger wheels gave my mum the confidence to ride to the shops on her own again."', name: 'Priya S.', detail: 'ADV · Outriggers', initial: 'P' },
  { quote: '"They listened to exactly what my hands could and couldn\'t do, then built around it."', name: 'Daniel K.', detail: 'AEROX · Hand controls', initial: 'D' },
]

export const BASE_REVIEWS: Review[] = [
  { id: 'rv-1', type: 'video', rating: 5, name: 'Aisha N.', bike: 'NMAX · Trike conversion', when: '2 weeks ago', initial: 'A', quote: 'Took my NMAX trike up the coast road for the first time — first proper ride in three years. Cried a little, not gonna lie.' },
  { id: 'rv-2', type: 'photo', rating: 5, name: 'Tom B.', bike: 'AEROX · Outriggers', when: '1 month ago', initial: 'T', quote: 'The outriggers are witchcraft. Stop at the lights, both feet stay on the pegs, zero wobble. Total game-changer.' },
  { id: 'rv-3', type: 'photo', rating: 5, name: 'Daniel K.', bike: 'AEROX · Hand controls', when: '1 month ago', initial: 'D', quote: 'The workshop spent a whole afternoon getting the hand controls right for my grip. Worth every single minute.' },
  { id: 'rv-4', type: 'video', rating: 4, name: 'Priya S.', bike: 'ADV · Reverse + outriggers', when: '2 months ago', initial: 'P', quote: 'Reverse gear completely changed parking on my sloped street. Should have done this years ago.' },
  { id: 'rv-5', type: 'photo', rating: 5, name: 'Liam O.', bike: 'Click · Trike conversion', when: '3 months ago', initial: 'L', quote: "My dad's 71 and back on two-and-a-bit wheels. The whole family turned up for the handover." },
  { id: 'rv-6', type: 'photo', rating: 5, name: 'Grace M.', bike: 'Benelli · Lowered + hand controls', when: '3 months ago', initial: 'G', quote: 'The lowered step-through means I can get on without help now. Independence, basically. Thank you.' },
]

export const RATING_BARS = [
  { label: '5★', pct: '86%' },
  { label: '4★', pct: '10%' },
  { label: '3★', pct: '3%' },
  { label: '2★', pct: '1%' },
  { label: '1★', pct: '0%' },
]
