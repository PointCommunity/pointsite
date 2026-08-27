import type { ContentPage, FormDefinition } from '@/lib/types';

export const church = {
  name: 'Point Community Church',
  shortName: 'Point ATX',
  mission: 'We are a family of Jesus-followers empowered by the Holy Spirit to make disciples of Jesus in all of life for the glory of God',
  address: '11300 Old San Antonio Rd, Manchaca, TX 78652',
  addressLine1: '11300 Old San Antonio Rd',
  addressLine2: 'Manchaca, TX 78652',
  serviceTime: 'Sunday at 10:30 AM',
  email: 'connect@pointaustin.org',
  givingUrl: 'https://subsplash.com/u/-W69J2R/give',
  facebookUrl: 'https://www.facebook.com/pointatx/',
  instagramUrl: 'https://www.instagram.com/pointatx/',
};

export const navigation = [
  { label: 'About', href: '/who-we-are', children: [['Who We Are', '/who-we-are'], ['What We Believe', '/what-we-believe'], ['Leadership', '/leadership'], ['Next Generation', '/next-generation']] },
  { label: 'Connect', href: '/connect-card', children: [['Connect Card', '/connect-card'], ['Neighborhood Groups', '/neighborhood-groups'], ['Prayer Request', '/prayer-request']] },
  { label: 'Give', href: '/give' },
  { label: 'Contact', href: '/contact' },
] as const;

export const calendarEvents: { date: string; title: string; time?: string }[] = [];

export const archivedPages: ContentPage[] = [
  { slug: 'community-calendar', title: 'Community Calendar', eyebrow: 'Life together', intro: 'See what is happening in the life of Point Community Church.', kind: 'calendar' },
];

export const pages: ContentPage[] = [
  { slug: 'who-we-are', title: 'Who We Are', eyebrow: 'About Point', intro: 'We are a family of disciples on mission.', heroImage: '/assets/pages/who-we-are.jpeg', kind: 'about' },
  { slug: 'what-we-believe', title: 'Our Beliefs', eyebrow: 'What We Believe', intro: 'We hold to seven core beliefs as the foundation of our identity and practice as a local church. Regardless of your beliefs, you are welcome to learn with us.', kind: 'beliefs' },
  { slug: 'leadership', title: 'Leadership', eyebrow: 'Team & Staff', intro: 'Meet the elders, ministry leaders, and staff who equip our church family to be the church.', kind: 'leadership' },
  { slug: 'next-generation', title: 'Next Generation', eyebrow: 'Kids Ministry', intro: 'We believe kids are not the Church of tomorrow, but the Church today.', heroImage: '/assets/pages/kids-ministry-1.jpeg', kind: 'kids' },
  { slug: 'connect-card', title: 'Connect Card', eyebrow: 'Welcome to our family', intro: "We're glad you're here. Tell us a little about yourself so we can help you get connected.", kind: 'form' },
  { slug: 'neighborhood-groups', title: 'Neighborhood Groups', eyebrow: 'Church in everyday life', intro: 'Neighborhood Groups are smaller groups where we can be the church together in the places we live, work, play, and learn.', heroImage: '/assets/pages/neighborhood-map.png', kind: 'groups' },
  { slug: 'prayer-request', title: 'Prayer Requests', eyebrow: 'We would be honored to pray', intro: 'Our team prays for every request we receive on a regular basis.', kind: 'form' },
  { slug: 'give', title: 'Giving', eyebrow: 'Generosity', intro: 'God is generous, and so he calls us to be as well.', heroImage: '/assets/pages/giving.png', kind: 'giving' },
  { slug: 'contact', title: 'Contact Us', eyebrow: 'Get in touch', intro: 'If you have questions or would like more information about Point ATX, we would love to hear from you.', kind: 'contact' },
  { slug: 'building-rental', title: 'Building Rental', eyebrow: 'Request the space', intro: 'Tell us about your organization and the date, time, and length of your requested rental.', kind: 'form' },
];

export const beliefs = [
  ['Bible', 'We believe the Bible, as revealed to us in the Old and New Testaments, is our final authority and without error in its original manuscripts.', 'Isaiah 40:8; Psalm 19:7; 2 Timothy 3:16; 2 Peter 1:20–21'],
  ['God', 'We believe in one God who exists eternally as three co-equal, fully divine persons: the Father, Son, and Holy Spirit.', 'Deuteronomy 6:4; Matthew 28:19; John 10:30; 2 Corinthians 13:14'],
  ['Jesus', 'We believe that God incarnate, Jesus Christ, is both fully God and fully human at the same time.', 'Isaiah 9:6; Matthew 1:18–25; John 1:1–14; Colossians 2:9'],
  ['Humanity', 'We believe every person has inherent worth and value because they are created in the image of God, and yet every person is a sinner by nature and choice and unable to justify themselves before God by their own deeds.', 'Genesis 1:26–27; Psalm 139:14; Romans 7:18; Ephesians 2:1–3'],
  ['Jesus’ death & resurrection', 'We believe Jesus died in our place for our sins, was buried, and then was physically resurrected to new life.', 'Isaiah 52:13–53:12; John 11:25; Romans 8:11; 1 Peter 2:24'],
  ['Salvation', 'We believe people are reconciled to God and receive the gift of eternal life by the grace of God through faith in Jesus Christ, not as the result of human effort.', 'John 3:16–18; Romans 3:24; Ephesians 2:8–9; Titus 3:5'],
  ['The return of Christ', 'We believe Jesus Christ will return to the earth in the future to finalize his work of redemption and restoration.', 'Daniel 7:13–14; Acts 1:11; 1 Thessalonians 4:15; Revelation 19:11–16'],
] as const;

export const leaders = [
  ['Nick Shock', 'Leadership & Teaching Elder', '/assets/people/nick-shock.jpeg'],
  ['Josh Currer', 'Teaching Elder', '/assets/people/josh-currer.jpeg'],
  ['Gonzo Gonzales', 'Elder', '/assets/people/gonzo-gonzales.jpeg'],
  ['Laura Munoz', 'Head of Kids Ministry', '/assets/people/laura-munoz.jpeg'],
  ['Sandra Louviere', 'Administrator', '/assets/people/sandra-louviere.jpeg'],
] as const;

export const neighborhoodGroups = [
  ['Elm Grove NG', 'Mondays at 5:30pm', '673 Oyster Creek, Buda, TX 78610', 'Richard and Rose Paez'],
  ['Coves of Cimarron NG', 'Tuesdays at 6:00pm', 'Lantana Trail, Buda, TX 78610', 'Nick and Jada Shock'],
  ['Oak Parke NG', 'Thursdays at 6:00pm', 'Leadville Drive, Austin, TX 78749', 'Jase and Claire Michener'],
  ['Hillcrest NG', 'Sundays at 6:00pm', 'Coats Cove, Austin, TX 78748', 'Aaron and Haley Negron'],
  ['Shadow Creek NG', 'Wednesdays at 6:00pm', 'South First, Austin, TX 78748', 'Russel and Kristen Hutzler'],
  ['The Bend at Nuckol’s Crossing NG', 'Wednesdays at 6:00pm', 'Marble Creek Loop, Austin, TX 78747', 'Caleb Bryant'],
] as const;

export const groupFaqs = [
  ['What is a Neighborhood Group?', "A Neighborhood Group is a spiritual family living out Jesus’ mission to make disciples by helping one another grow in love for God and people. It is a family of Jesus followers on God’s mission."],
  ['Who is a Neighborhood Group for?', 'Neighborhood Groups are for everyone because everyone needs authentic friendships built on grace and truth. They are a safe place to ask hard questions, wrestle with doubts, and mobilize with others to love and serve our city.'],
  ['How should I decide which group to attend?', 'We recommend beginning with the group geographically closest to you, making it easier to share everyday life. If that group does not work for you, another group will gladly welcome you.'],
  ['What should I expect?', 'Groups are friendly, honest, mixed-demographic communities that typically meet in a home. They often share meals, discuss God’s word, and pray with and for each other. Groups are much more than a weekly meeting.'],
  ['What if I have kids?', 'Every Neighborhood Group has childcare, though each group manages it differently. Check with the leader before attending for the details.'],
  ['How can I get connected?', 'We have groups from South Austin to Kyle. Fill out the connection form and someone will contact you, or ask our host team or pastoral staff to introduce you to a group leader on Sunday morning.'],
] as const;

const basicContactFields = [
  { name: 'firstName', label: 'First Name', required: true },
  { name: 'lastName', label: 'Last Name', required: true },
  { name: 'email', label: 'Email', type: 'email' as const, required: true },
  { name: 'message', label: 'Message', type: 'textarea' as const, required: true },
];

export const forms: Record<string, FormDefinition> = {
  contact: { id: 'contact-form', title: 'Get In Touch', description: 'Fill out the form and we will get back to you as soon as possible.', submitLabel: 'Contact Us', fields: basicContactFields },
  beliefs: { id: 'beliefs-contact', title: 'Want to learn more?', description: "We'd love to hear from you. Fill out the form below to get started.", submitLabel: 'Contact Us', fields: basicContactFields },
  kids: { id: 'kids-contact', title: 'Contact Us', description: "We'd love to answer your questions about kids ministry.", submitLabel: 'Contact Us', fields: basicContactFields },
  giving: { id: 'giving-contact', title: 'Have questions or need help?', description: "We'd love to hear from you.", fields: basicContactFields },
  'connect-card': {
    id: 'connect-card-form', title: 'Connect Card', submitLabel: 'Send',
    fields: [
      { name: 'firstName', label: 'First Name', required: true }, { name: 'lastName', label: 'Last Name', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true }, { name: 'phone', label: 'Phone', type: 'tel' },
      { name: 'address1', label: 'Address 1' }, { name: 'address2', label: 'Address 2' }, { name: 'city', label: 'City' }, { name: 'state', label: 'State' }, { name: 'postalCode', label: 'Zip / Postal Code' },
      { name: 'visits', label: 'How many times have you visited?', type: 'radio', options: ['This is my first time', 'A few times', 'Regular attender'] },
      { name: 'interests', label: 'I would like to learn more about', type: 'checkbox', options: ['Baptism', 'Volunteering', 'Membership', 'Neighborhood Groups', 'Jesus'] },
      { name: 'heardAbout', label: 'How did you hear about us?' }, { name: 'message', label: "Anything else you'd like to share?", type: 'textarea' },
    ],
  },
  'prayer-request': {
    id: 'prayer-form', title: 'Prayer Request Form', submitLabel: 'Send',
    fields: [
      { name: 'request', label: 'How can we pray for you?', type: 'textarea', required: true },
      { name: 'followUp', label: 'Would you like someone to follow up?', type: 'radio', options: ['Yes', 'No'], required: true },
      { name: 'firstName', label: 'First Name (optional)' }, { name: 'lastName', label: 'Last Name (optional)' },
      { name: 'email', label: 'Email Address (optional)', type: 'email' }, { name: 'phone', label: 'Phone Number (optional)', type: 'tel' },
    ],
  },
  groups: {
    id: 'groups-form', title: 'Live in community with a mission', description: 'Submit this form and we will help you find a Neighborhood Group near you.',
    fields: [
      { name: 'firstName', label: 'First Name', required: true }, { name: 'lastName', label: 'Last Name', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true }, { name: 'phone', label: 'Phone Number', type: 'tel' },
      { name: 'location', label: 'Location', type: 'select', options: ['Southeast Austin', 'Southwest Austin', 'South Austin', 'West Buda', 'East Buda', 'Kyle'], required: true },
    ],
  },
  calendar: {
    id: 'calendar-updates', title: 'Get text & updates on upcoming events',
    fields: [{ name: 'firstName', label: 'First Name', required: true }, { name: 'phone', label: 'Mobile Phone', type: 'tel', required: true }],
  },
  'building-rental': {
    id: 'rental-form', title: 'Building Rental Request', submitLabel: 'Submit',
    fields: [
      { name: 'firstName', label: 'First Name', required: true }, { name: 'lastName', label: 'Last Name', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true }, { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'organization', label: 'Organization', required: true }, { name: 'schedule', label: 'Day, Time & Length of Rental', type: 'textarea', required: true },
    ],
  },
};
