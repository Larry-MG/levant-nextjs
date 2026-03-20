export interface Location {
  slug: string
  name: string
  city: string
  address: string
  streetAddress: string
  postalCode: string
  phone: string
  hours: { days: string; hours: string }[]
  mapUrl: string
  description: string
  neighboringCities: string[]
}

export const locations: Location[] = [
  {
    slug: 'orange',
    name: 'Orange',
    city: 'Orange, CA',
    address: '419 N Tustin St, Orange, CA 92867',
    streetAddress: '419 N Tustin St',
    postalCode: '92867',
    phone: '(714) 213-4785',
    hours: [
      { days: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    mapUrl: 'https://maps.google.com/?q=419+N+Tustin+St+Orange+CA+92867',
    description:
      'Our Orange location is situated in the heart of Orange County, just minutes from the Outlets at Orange and easily reached from the 5, 22, and 57 freeways. Serving Orange, Santa Ana, Anaheim, Tustin, and Garden Grove.',
    neighboringCities: ['Santa Ana', 'Anaheim', 'Tustin', 'Garden Grove', 'Fullerton', 'Irvine', 'Costa Mesa', 'Fountain Valley'],
  },
  {
    slug: 'pomona',
    name: 'Pomona',
    city: 'Pomona, CA',
    address: '1565 W Holt Ave, Ste 6, Pomona, CA 91768',
    streetAddress: '1565 W Holt Ave, Suite 6',
    postalCode: '91768',
    phone: '(909) 784-7037',
    hours: [
      { days: 'Monday – Saturday', hours: '10:00 AM – 6:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    mapUrl: 'https://maps.google.com/?q=1565+W+Holt+Ave+Pomona+CA+91768',
    description:
      'Our Pomona store is located on W Holt Avenue, easily accessible from the 71 and 10 freeways. Serving Pomona, Claremont, La Verne, Chino, and Diamond Bar. Walk-ins welcome — free appraisal, no appointment needed.',
    neighboringCities: ['Claremont', 'La Verne', 'Chino', 'Diamond Bar', 'Ontario', 'Montclair', 'Upland', 'Chino Hills'],
  },
  {
    slug: 'san-bernardino',
    name: 'San Bernardino',
    city: 'San Bernardino, CA',
    address: '1292 W Mill St, Ste 107, San Bernardino, CA 92410',
    streetAddress: '1292 W Mill St, Suite 107',
    postalCode: '92410',
    phone: '(909) 656-2600',
    hours: [
      { days: 'Monday – Saturday', hours: '11:00 AM – 7:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    mapUrl: 'https://maps.google.com/?q=1292+W+Mill+St+San+Bernardino+CA+92410',
    description:
      'Our San Bernardino location is on W Mill Street, serving the greater Inland Empire — San Bernardino, Riverside, Colton, Redlands, and Rialto. Fast, discreet service in a safe and secure office.',
    neighboringCities: ['Riverside', 'Colton', 'Redlands', 'Rialto', 'Fontana', 'Highland', 'Loma Linda', 'Yucaipa'],
  },
  {
    slug: 'walnut',
    name: 'Walnut',
    city: 'Walnut, CA',
    address: '386 N Lemon Ave, Walnut, CA 91789',
    streetAddress: '386 N Lemon Ave',
    postalCode: '91789',
    phone: '(909) 784-7037',
    hours: [
      { days: 'Monday – Saturday', hours: '10:00 AM – 6:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    mapUrl: 'https://maps.google.com/?q=386+N+Lemon+Ave+Walnut+CA+91789',
    description:
      'Our Walnut store is on N Lemon Avenue, just minutes from the 10 and 57 freeways. Serving Walnut, Diamond Bar, Rowland Heights, West Covina, and Pomona. Walk-ins always welcome — free appraisal and same-day cash.',
    neighboringCities: ['Diamond Bar', 'Rowland Heights', 'West Covina', 'Industry', 'Hacienda Heights', 'La Puente', 'Baldwin Park', 'Covina'],
  },
]

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}
