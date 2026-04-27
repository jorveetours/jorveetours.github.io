export interface IndiaCityDestination {
  countrySlug: 'india';
  stateSlug: string;
  stateName: string;
  citySlug: string;
  cityName: string;
  tagline: string;
  description: string;
  highlights: string[];
  foodToTry: string[];
  bestTimeToTravel: string;
  nearestAirport: string;
  nearestRailway: string;
  heroImage: string;
  culture: IndiaCityCulture;
}

export interface IndiaCityCulture {
  temple: string;
  mosque: string;
  church: string;
  gurudwara: string;
  park: string;
  historicalSite: string;
  annualCulturalEvent: string;
}

interface IndiaStateSeed {
  stateSlug: string;
  stateName: string;
  cities: Array<{ cityName: string; tagline: string }>;
}

const heroImage = '/images/destinations/world-travel-destinations-hero-banner.jpg';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const cityCultureOverrides: Record<string, IndiaCityCulture> = {
  'uttar-pradesh/lucknow': {
    temple: 'Mankameshwar Temple',
    mosque: 'Asafi (Bara Imambara) Mosque',
    church: 'St. Joseph Cathedral',
    gurudwara: 'Gurudwara Yahiyaganj',
    park: 'Janeshwar Mishra Park',
    historicalSite: 'Bara Imambara',
    annualCulturalEvent: 'Lucknow Mahotsav',
  },
  'uttar-pradesh/varanasi': {
    temple: 'Kashi Vishwanath Temple',
    mosque: 'Gyanvapi Mosque',
    church: 'St. Mary Church (Cantonment)',
    gurudwara: 'Gurudwara Guru Bagh',
    park: 'Beniya Park',
    historicalSite: 'Ramnagar Fort',
    annualCulturalEvent: 'Dev Deepawali',
  },
  'uttar-pradesh/noida': {
    temple: 'ISKCON Noida',
    mosque: 'Noida Jama Masjid (Sector 8)',
    church: 'St. Gregorios Indian Orthodox Church',
    gurudwara: 'Gurudwara Singh Sabha Noida',
    park: 'Botanical Garden of Indian Republic',
    historicalSite: 'Okhla Bird Sanctuary (heritage ecology zone)',
    annualCulturalEvent: 'Noida Flower Show',
  },
  'uttar-pradesh/gorakhpur': {
    temple: 'Gorakhnath Temple',
    mosque: 'Mubarak Khan Shaheed Dargah Mosque',
    church: 'St. Joseph Cathedral',
    gurudwara: 'Gurudwara Jatashankar',
    park: 'Ambedkar Park',
    historicalSite: 'Gorakhpur Rail Museum',
    annualCulturalEvent: 'Gorakhpur Mahotsav',
  },
  'uttar-pradesh/khusi-nagar': {
    temple: 'Ramabhar Stupa Temple Complex',
    mosque: 'Jama Masjid Kasya',
    church: 'St. Paul Church Kushinagar',
    gurudwara: 'Gurudwara Singh Sabha Kushinagar',
    park: 'Buddha Park Kushinagar',
    historicalSite: 'Mahaparinirvana Temple and Stupa',
    annualCulturalEvent: 'Buddha Purnima Celebrations (Kushinagar)',
  },
  'uttar-pradesh/kanpur': {
    temple: 'JK Temple',
    mosque: 'Jama Masjid (Bekanganj)',
    church: 'All Souls Cathedral',
    gurudwara: 'Gurudwara Kalgidhar Sabha',
    park: 'Nana Rao Park',
    historicalSite: 'Kanpur Memorial Church Complex',
    annualCulturalEvent: 'Ganga Mela',
  },
  'uttar-pradesh/allahabad': {
    temple: 'Alopi Devi Mandir',
    mosque: 'Jama Masjid (Atala area)',
    church: 'All Saints Cathedral',
    gurudwara: 'Gurudwara Pakki Sangat',
    park: 'Chandrashekhar Azad Park',
    historicalSite: 'Allahabad Fort',
    annualCulturalEvent: 'Magh Mela',
  },
  'uttar-pradesh/badaun': {
    temple: 'Nawabganj Temple Complex',
    mosque: 'Shamsi Jama Masjid',
    church: 'Sacred Heart Church Badaun',
    gurudwara: 'Gurudwara Guru Singh Sabha Badaun',
    park: 'City Park Badaun',
    historicalSite: 'Ikhlas Khan Tomb',
    annualCulturalEvent: 'Badaun Mahotsav',
  },
  'maharashtra/mumbai': {
    temple: 'Siddhivinayak Temple',
    mosque: 'Haji Ali Dargah Mosque',
    church: 'Mount Mary Basilica',
    gurudwara: 'Gurudwara Dadar Sahib',
    park: 'Hanging Gardens',
    historicalSite: 'Gateway of India',
    annualCulturalEvent: 'Kala Ghoda Arts Festival',
  },
  'delhi/new-delhi': {
    temple: 'Akshardham Temple',
    mosque: 'Jama Masjid',
    church: 'Sacred Heart Cathedral',
    gurudwara: 'Gurudwara Bangla Sahib',
    park: 'Lodhi Garden',
    historicalSite: 'Red Fort',
    annualCulturalEvent: 'Phool Walon Ki Sair',
  },
  'tamil-nadu/chennai': {
    temple: 'Kapaleeshwarar Temple',
    mosque: 'Wallajah Mosque',
    church: 'San Thome Basilica',
    gurudwara: 'Gurudwara Sri Guru Nanak Sat Sangh Sabha',
    park: 'Semmozhi Poonga',
    historicalSite: 'Fort St. George',
    annualCulturalEvent: 'Margazhi Music Season',
  },
};

const getCityCulture = (
  stateSlug: string,
  citySlug: string,
  cityName: string,
  stateName: string
): IndiaCityCulture => {
  const key = `${stateSlug}/${citySlug}`;
  const override = cityCultureOverrides[key];
  if (override) return override;

  return {
    temple: `${cityName} Temple`,
    mosque: `${cityName} Jama Masjid`,
    church: `${cityName} Cathedral Church`,
    gurudwara: `Gurudwara Singh Sabha ${cityName}`,
    park: `${cityName} City Park`,
    historicalSite: `${cityName} Fort / Heritage Complex`,
    annualCulturalEvent: `${stateName} Utsav (${cityName} Chapter)`,
  };
};

const stateCuisineMap: Record<string, string[]> = {
  'andhra-pradesh': ['Andhra thali', 'Pesarattu', 'Gongura pachadi', 'Pootharekulu'],
  'arunachal-pradesh': ['Thukpa', 'Momos', 'Zan', 'Smoked meats'],
  assam: ['Assam thali', 'Khaar', 'Masor tenga', 'Pitha'],
  bihar: ['Litti chokha', 'Sattu paratha', 'Thekua', 'Khaja'],
  chhattisgarh: ['Chila', 'Faraa', 'Bafauri', 'Muthia'],
  goa: ['Goan fish curry', 'Prawn balchao', 'Bebinca', 'Vindaloo'],
  gujarat: ['Gujarati thali', 'Dhokla', 'Khandvi', 'Undhiyu'],
  haryana: ['Bajra khichdi', 'Kachri ki sabzi', 'Hara dhania cholia', 'Mithe chawal'],
  'himachal-pradesh': ['Dham', 'Siddu', 'Madra', 'Babru'],
  jharkhand: ['Dhuskas', 'Rugra', 'Pitha', 'Thekua'],
  karnataka: ['Bisi bele bath', 'Mysore pak', 'Neer dosa', 'Ragi mudde'],
  kerala: ['Appam and stew', 'Puttu kadala', 'Kerala sadya', 'Malabar biryani'],
  'madhya-pradesh': ['Poha jalebi', 'Bhutte ka kees', 'Dal bafla', 'Mawa bati'],
  maharashtra: ['Vada pav', 'Misal pav', 'Puran poli', 'Bombil fry'],
  manipur: ['Eromba', 'Chamthong', 'Nga thongba', 'Paknam'],
  meghalaya: ['Jadoh', 'Dohneiiong', 'Tungrymbai', 'Pukhlein'],
  mizoram: ['Bai', 'Sawhchiar', 'Vawksa rep', 'Chhum han'],
  nagaland: ['Smoked pork', 'Bamboo shoot dishes', 'Axone preparations', 'Sticky rice'],
  odisha: ['Dalma', 'Pakhala bhata', 'Chhena poda', 'Rasabali'],
  punjab: ['Amritsari kulcha', 'Sarson da saag', 'Makki di roti', 'Lassi'],
  rajasthan: ['Dal bati churma', 'Gatte ki sabzi', 'Laal maas', 'Ghewar'],
  sikkim: ['Momos', 'Thukpa', 'Phagshapa', 'Sel roti'],
  'tamil-nadu': ['Idli sambar', 'Chettinad curry', 'Pongal', 'Filter coffee'],
  telangana: ['Hyderabadi biryani', 'Haleem', 'Sakinalu', 'Sarva pindi'],
  tripura: ['Mui borok', 'Chakhwi', 'Mosdeng serma', 'Wahan mosdeng'],
  'uttar-pradesh': ['Tunday kebab', 'Bedai kachori', 'Banarasi chaat', 'Peda'],
  uttarakhand: ['Kafuli', 'Aloo ke gutke', 'Bhatt ki churkani', 'Bal mithai'],
  'west-bengal': ['Macher jhol', 'Kosha mangsho', 'Mishti doi', 'Rosogolla'],
};

const stateClimateMap: Record<string, string> = {
  'andhra-pradesh': 'October to February',
  'arunachal-pradesh': 'October to April',
  assam: 'November to April',
  bihar: 'October to March',
  chhattisgarh: 'November to February',
  goa: 'November to February',
  gujarat: 'November to February',
  haryana: 'October to March',
  'himachal-pradesh': 'March to June and September to November',
  jharkhand: 'October to March',
  karnataka: 'October to March',
  kerala: 'September to March',
  'madhya-pradesh': 'October to March',
  maharashtra: 'October to March',
  manipur: 'October to March',
  meghalaya: 'October to April',
  mizoram: 'October to March',
  nagaland: 'October to May',
  odisha: 'October to February',
  punjab: 'October to March',
  rajasthan: 'October to March',
  sikkim: 'March to June and September to November',
  'tamil-nadu': 'November to February',
  telangana: 'October to February',
  tripura: 'October to March',
  'uttar-pradesh': 'October to March',
  uttarakhand: 'March to June and September to November',
  'west-bengal': 'October to March',
};

export const indiaStates: IndiaStateSeed[] = [
  {
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    cities: [
      { cityName: 'Visakhapatnam', tagline: 'Coastal City of Beaches and Hills' },
      { cityName: 'Vijayawada', tagline: 'Gateway to the Krishna Region' },
      { cityName: 'Tirupati', tagline: 'Sacred Temple City of Andhra' },
      { cityName: 'Kurnool', tagline: 'Historic Gateway to Rayalaseema' },
    ],
  },
  {
    stateSlug: 'arunachal-pradesh',
    stateName: 'Arunachal Pradesh',
    cities: [
      { cityName: 'Itanagar', tagline: 'Capital Surrounded by Green Hills' },
      { cityName: 'Tawang', tagline: 'Monastery Town in the Eastern Himalayas' },
      { cityName: 'Pasighat', tagline: 'Oldest Town of Arunachal Pradesh' },
      { cityName: 'Ziro', tagline: 'Valley Town of Tribal Heritage' },
    ],
  },
  {
    stateSlug: 'assam',
    stateName: 'Assam',
    cities: [
      { cityName: 'Guwahati', tagline: 'Heart of North East India' },
      { cityName: 'Dibrugarh', tagline: 'Tea City on the Brahmaputra' },
      { cityName: 'Silchar', tagline: 'Barak Valley Commercial Hub' },
      { cityName: 'Jorhat', tagline: 'Cultural Capital of Assam' },
    ],
  },
  {
    stateSlug: 'bihar',
    stateName: 'Bihar',
    cities: [
      { cityName: 'Patna', tagline: 'Historic City on the Ganga' },
      { cityName: 'Gaya', tagline: 'Spiritual Center of Bihar' },
      { cityName: 'Muzaffarpur', tagline: 'Litchi City of Bihar' },
      { cityName: 'Bhagalpur', tagline: 'Silk City by the Ganga' },
    ],
  },
  {
    stateSlug: 'chhattisgarh',
    stateName: 'Chhattisgarh',
    cities: [
      { cityName: 'Raipur', tagline: 'Modern Capital with Tribal Heritage' },
      { cityName: 'Jagdalpur', tagline: 'Gateway to Bastar Culture' },
      { cityName: 'Bilaspur', tagline: 'Cultural Center of Chhattisgarh' },
      { cityName: 'Durg', tagline: 'Industrial Twin City of Bhilai Region' },
    ],
  },
  {
    stateSlug: 'goa',
    stateName: 'Goa',
    cities: [
      { cityName: 'Panaji', tagline: 'Riverside Capital with Portuguese Charm' },
      { cityName: 'Margao', tagline: 'Cultural Hub of South Goa' },
      { cityName: 'Vasco da Gama', tagline: 'Port City of Coastal Goa' },
      { cityName: 'Mapusa', tagline: 'Market Town of North Goa' },
    ],
  },
  {
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    cities: [
      { cityName: 'Ahmedabad', tagline: 'Heritage City of Gujarat' },
      { cityName: 'Surat', tagline: 'Diamond and Textile City' },
      { cityName: 'Vadodara', tagline: 'Cultural City of Royal Legacy' },
      { cityName: 'Rajkot', tagline: 'Vibrant Heart of Saurashtra' },
    ],
  },
  {
    stateSlug: 'haryana',
    stateName: 'Haryana',
    cities: [
      { cityName: 'Gurugram', tagline: 'India\'s Corporate Powerhouse' },
      { cityName: 'Faridabad', tagline: 'Industrial and Cultural Center' },
      { cityName: 'Panipat', tagline: 'Historic City of Great Battles' },
      { cityName: 'Karnal', tagline: 'Green Belt City of Haryana' },
    ],
  },
  {
    stateSlug: 'himachal-pradesh',
    stateName: 'Himachal Pradesh',
    cities: [
      { cityName: 'Shimla', tagline: 'Queen of the Hills' },
      { cityName: 'Dharamshala', tagline: 'Mountain Retreat of Serenity' },
      { cityName: 'Manali', tagline: 'Adventure Hub in the Himalayas' },
      { cityName: 'Kullu', tagline: 'Valley of Gods and Scenic Routes' },
    ],
  },
  {
    stateSlug: 'jharkhand',
    stateName: 'Jharkhand',
    cities: [
      { cityName: 'Ranchi', tagline: 'City of Waterfalls' },
      { cityName: 'Jamshedpur', tagline: 'Planned Steel City' },
      { cityName: 'Dhanbad', tagline: 'Coal Capital of India' },
      { cityName: 'Deoghar', tagline: 'Spiritual Destination of Jharkhand' },
    ],
  },
  {
    stateSlug: 'karnataka',
    stateName: 'Karnataka',
    cities: [
      { cityName: 'Bengaluru', tagline: 'India\'s Tech Capital' },
      { cityName: 'Mysuru', tagline: 'Royal Heritage City' },
      { cityName: 'Mangaluru', tagline: 'Coastal Trade and Culture City' },
      { cityName: 'Hubballi', tagline: 'Commercial Hub of North Karnataka' },
    ],
  },
  {
    stateSlug: 'kerala',
    stateName: 'Kerala',
    cities: [
      { cityName: 'Kochi', tagline: 'Port City of Backwaters and Culture' },
      { cityName: 'Thiruvananthapuram', tagline: 'Temple City by the Coast' },
      { cityName: 'Kozhikode', tagline: 'Historic Spice Coast City' },
      { cityName: 'Alappuzha', tagline: 'Backwater Venice of Kerala' },
    ],
  },
  {
    stateSlug: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    cities: [
      { cityName: 'Bhopal', tagline: 'City of Lakes' },
      { cityName: 'Indore', tagline: 'Commercial Heart of Central India' },
      { cityName: 'Gwalior', tagline: 'Fort City of Musical Legacy' },
      { cityName: 'Jabalpur', tagline: 'Marble Rocks and Riverfront City' },
    ],
  },
  {
    stateSlug: 'maharashtra',
    stateName: 'Maharashtra',
    cities: [
      { cityName: 'Mumbai', tagline: 'City of Dreams' },
      { cityName: 'Pune', tagline: 'Cultural and Education Hub' },
      { cityName: 'Nagpur', tagline: 'Orange City of Central India' },
      { cityName: 'Nashik', tagline: 'Wine Capital and Pilgrimage Hub' },
    ],
  },
  {
    stateSlug: 'manipur',
    stateName: 'Manipur',
    cities: [
      { cityName: 'Imphal', tagline: 'Gateway to Manipur\'s Valleys' },
      { cityName: 'Churachandpur', tagline: 'Cultural Mosaic of Hills' },
      { cityName: 'Thoubal', tagline: 'Valley Town of Cultural Traditions' },
      { cityName: 'Bishnupur', tagline: 'Historic Temple Town of Manipur' },
    ],
  },
  {
    stateSlug: 'meghalaya',
    stateName: 'Meghalaya',
    cities: [
      { cityName: 'Shillong', tagline: 'Scotland of the East' },
      { cityName: 'Tura', tagline: 'Garo Hills Adventure Base' },
      { cityName: 'Cherrapunji', tagline: 'Land of Living Root Bridges' },
      { cityName: 'Jowai', tagline: 'Pnar Cultural Center in the Hills' },
    ],
  },
  {
    stateSlug: 'mizoram',
    stateName: 'Mizoram',
    cities: [
      { cityName: 'Aizawl', tagline: 'Mountain Capital of Mizoram' },
      { cityName: 'Lunglei', tagline: 'Southern Hill Town' },
      { cityName: 'Champhai', tagline: 'Border Town of Scenic Vineyards' },
      { cityName: 'Serchhip', tagline: 'Quiet Plateau Town of Mizoram' },
    ],
  },
  {
    stateSlug: 'nagaland',
    stateName: 'Nagaland',
    cities: [
      { cityName: 'Kohima', tagline: 'Cultural Capital of Nagaland' },
      { cityName: 'Dimapur', tagline: 'Commercial Gateway of the State' },
      { cityName: 'Mokokchung', tagline: 'Ao Cultural Heartland Town' },
      { cityName: 'Mon', tagline: 'Hill District of Tribal Heritage' },
    ],
  },
  {
    stateSlug: 'odisha',
    stateName: 'Odisha',
    cities: [
      { cityName: 'Bhubaneswar', tagline: 'Temple City of India' },
      { cityName: 'Puri', tagline: 'Sacred Beach Destination' },
      { cityName: 'Cuttack', tagline: 'Historic City on Mahanadi Delta' },
      { cityName: 'Rourkela', tagline: 'Steel City of Odisha' },
    ],
  },
  {
    stateSlug: 'punjab',
    stateName: 'Punjab',
    cities: [
      { cityName: 'Amritsar', tagline: 'Spiritual Heart of Punjab' },
      { cityName: 'Ludhiana', tagline: 'Industrial Capital of Punjab' },
      { cityName: 'Jalandhar', tagline: 'Sports Goods and Heritage City' },
      { cityName: 'Patiala', tagline: 'Royal City of Punjabi Culture' },
    ],
  },
  {
    stateSlug: 'rajasthan',
    stateName: 'Rajasthan',
    cities: [
      { cityName: 'Jaipur', tagline: 'The Pink City' },
      { cityName: 'Udaipur', tagline: 'City of Lakes and Palaces' },
      { cityName: 'Jodhpur', tagline: 'Blue City of Marwar' },
      { cityName: 'Bikaner', tagline: 'Desert Fortress and Camel Heritage City' },
    ],
  },
  {
    stateSlug: 'sikkim',
    stateName: 'Sikkim',
    cities: [
      { cityName: 'Gangtok', tagline: 'Himalayan Capital with Monastic Charm' },
      { cityName: 'Namchi', tagline: 'Scenic Town of South Sikkim' },
      { cityName: 'Pelling', tagline: 'Mountain Viewpoint Town of Sikkim' },
      { cityName: 'Lachung', tagline: 'Alpine Village Gateway to North Sikkim' },
    ],
  },
  {
    stateSlug: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    cities: [
      { cityName: 'Chennai', tagline: 'Gateway to South India' },
      { cityName: 'Coimbatore', tagline: 'Manchester of South India' },
      { cityName: 'Madurai', tagline: 'Temple City of Tamil Heritage' },
      { cityName: 'Tiruchirappalli', tagline: 'Rock Fort City on the Kaveri' },
    ],
  },
  {
    stateSlug: 'telangana',
    stateName: 'Telangana',
    cities: [
      { cityName: 'Hyderabad', tagline: 'City of Nizams and Biryani' },
      { cityName: 'Warangal', tagline: 'Historic City of Kakatiya Legacy' },
      { cityName: 'Nizamabad', tagline: 'Agricultural Hub of Telangana' },
      { cityName: 'Karimnagar', tagline: 'Historic City of Northern Telangana' },
    ],
  },
  {
    stateSlug: 'tripura',
    stateName: 'Tripura',
    cities: [
      { cityName: 'Agartala', tagline: 'Royal Capital of Tripura' },
      { cityName: 'Udaipur', tagline: 'Temple Town of Tripura' },
      { cityName: 'Dharmanagar', tagline: 'Northern Trade Center of Tripura' },
      { cityName: 'Kailashahar', tagline: 'Cultural Town of Unakoti Region' },
    ],
  },
  {
    stateSlug: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    cities: [
      { cityName: 'Lucknow', tagline: 'City of Nawabs' },
      { cityName: 'Varanasi', tagline: 'Spiritual Capital on the Ganga' },
      { cityName: 'Noida', tagline: 'Modern NCR Business Hub' },
      { cityName: 'Gorakhpur', tagline: 'Cultural Gateway of Eastern UP' },
      { cityName: 'Khusi Nagar', tagline: 'Buddhist Heritage Destination' },
      { cityName: 'Kanpur', tagline: 'Historic Industrial City on the Ganga' },
      { cityName: 'Allahabad', tagline: 'Confluence City of Faith and History' },
      { cityName: 'Badaun', tagline: 'Historic Heartland of Rohilkhand' },
    ],
  },
  {
    stateSlug: 'uttarakhand',
    stateName: 'Uttarakhand',
    cities: [
      { cityName: 'Dehradun', tagline: 'Gateway to the Garhwal Himalayas' },
      { cityName: 'Nainital', tagline: 'Lake District of Kumaon' },
      { cityName: 'Haridwar', tagline: 'Sacred Ganga Pilgrimage City' },
      { cityName: 'Rishikesh', tagline: 'Yoga Capital on the Ganga' },
    ],
  },
  {
    stateSlug: 'west-bengal',
    stateName: 'West Bengal',
    cities: [
      { cityName: 'Kolkata', tagline: 'City of Joy' },
      { cityName: 'Darjeeling', tagline: 'Tea and Toy Train Mountain Town' },
      { cityName: 'Siliguri', tagline: 'Gateway to North Bengal and Himalayas' },
      { cityName: 'Durgapur', tagline: 'Planned Industrial City of Bengal' },
    ],
  },
];

const getDefaultHighlights = (cityName: string, stateName: string) => [
  `Explore iconic neighborhoods and cultural landmarks across ${cityName}`,
  `Experience regional art, markets, and local traditions of ${stateName}`,
  `Discover nearby heritage sites, viewpoints, and day-trip attractions`,
  `Enjoy authentic cuisine and evening walks in popular city districts`,
];

export const indiaCityDestinations: IndiaCityDestination[] = indiaStates.flatMap((state) =>
  state.cities.map((city) => {
    const citySlug = slugify(city.cityName);

    return {
      countrySlug: 'india' as const,
      stateSlug: state.stateSlug,
      stateName: state.stateName,
      citySlug,
      cityName: city.cityName,
      tagline: city.tagline,
      description: `${city.cityName}, located in ${state.stateName}, is one of India's major urban destinations known for its unique blend of local culture, food, landmarks, and modern life. Whether you are visiting for heritage, spirituality, nature, business, or leisure, ${city.cityName} offers a well-rounded travel experience with easy access, diverse attractions, and welcoming hospitality.`,
      highlights: getDefaultHighlights(city.cityName, state.stateName),
      foodToTry: stateCuisineMap[state.stateSlug] || ['Regional thali', 'Street snacks', 'Local sweets', 'Seasonal specialties'],
      bestTimeToTravel: stateClimateMap[state.stateSlug] || 'October to March',
      nearestAirport: `${city.cityName} Airport`,
      nearestRailway: `${city.cityName} Junction`,
      heroImage,
      culture: getCityCulture(state.stateSlug, citySlug, city.cityName, state.stateName),
    };
  })
);

export const getIndiaStateBySlug = (stateSlug: string) =>
  indiaStates.find((state) => state.stateSlug === stateSlug);

export const getIndiaCitiesByState = (stateSlug: string) =>
  indiaCityDestinations.filter((city) => city.stateSlug === stateSlug);

export const getIndiaCityDestination = (stateSlug: string, citySlug: string) =>
  indiaCityDestinations.find(
    (city) => city.stateSlug === stateSlug && city.citySlug === citySlug
  );

export const getIndiaCityPath = (city: IndiaCityDestination) =>
  `/destinations/india/${city.stateSlug}/${city.citySlug}`;
