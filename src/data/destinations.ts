export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  history: string;
  heroImage: string;
  images: { url: string; caption: string }[];
  placesToVisit: string[];
  foodToTry: string[];
  mustSee: string[];
  bestTimeToTravel: string;
  nearestAirport: string;
  nearestRailway: string;
  sisterCities: string[];
}

export const destinations: Destination[] = [
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    tagline: 'The City of Light',
    description:
      'Paris, the capital of France, is one of the most iconic and beloved cities in the world. Renowned for its art, fashion, gastronomy, and culture, Paris offers an unparalleled experience for every traveler. From the sparkling Eiffel Tower to the charming cobblestone streets of Montmartre, the city is a living masterpiece of architecture, history, and joie de vivre. The Seine River winds gracefully through the city, connecting world-famous landmarks and neighborhoods that each have their own distinct character.',
    history:
      'Paris was founded in the 3rd century BC by a Celtic tribe known as the Parisii. The city grew under Roman rule as Lutetia before becoming the capital of the Frankish kingdom in the 6th century. Through the medieval period and Renaissance, Paris emerged as a center of education, commerce, and culture. The French Revolution of 1789 reshaped the city and the nation. Baron Haussmann\'s 19th-century renovation gave Paris its iconic boulevards and architectural harmony that visitors admire today.',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&q=80', caption: 'Eiffel Tower at Sunset' },
      { url: 'https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=800&q=80', caption: 'Champs-Élysées' },
      { url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80', caption: 'Sacré-Cœur Basilica' },
      { url: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80', caption: 'Louvre Museum' },
      { url: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80', caption: 'Notre-Dame Cathedral' },
      { url: 'https://images.unsplash.com/photo-1551634979-2b11f8c946fe?w=800&q=80', caption: 'Seine River Cruise' },
    ],
    placesToVisit: [
      'Eiffel Tower — Iconic iron lattice tower offering panoramic city views',
      'Louvre Museum — World\'s largest art museum, home to the Mona Lisa',
      'Notre-Dame Cathedral — Masterpiece of French Gothic architecture',
      'Montmartre & Sacré-Cœur — Bohemian hilltop neighborhood and basilica',
      'Champs-Élysées & Arc de Triomphe — Famous avenue leading to the triumphal arch',
      'Musée d\'Orsay — Impressionist and Post-Impressionist art collection',
      'Palace of Versailles — Opulent royal residence with stunning gardens',
      'Luxembourg Gardens — Beautiful formal gardens for strolling',
    ],
    foodToTry: [
      'Croissants & Pain au Chocolat — Flaky, buttery breakfast pastries',
      'Crêpes — Thin pancakes with sweet or savory fillings',
      'Coq au Vin — Classic braised chicken in red wine',
      'French Onion Soup — Rich caramelized onion soup with gruyère',
      'Macarons — Delicate almond meringue sandwich cookies',
      'Escargot — Buttery garlic-herb snails, a true delicacy',
    ],
    mustSee: [
      'Sunset from the Trocadéro overlooking the Eiffel Tower',
      'A performance at the Palais Garnier opera house',
      'The stained glass windows at Sainte-Chapelle',
      'A morning walk through Le Marais district',
      'Street artists at Place du Tertre in Montmartre',
    ],
    bestTimeToTravel: 'April to June and September to November — pleasant weather, fewer crowds, and the city at its most charming.',
    nearestAirport: 'Charles de Gaulle Airport (CDG) — 25 km northeast of central Paris',
    nearestRailway: 'Gare du Nord — Major international railway hub serving Eurostar and Thalys',
    sisterCities: ['tokyo', 'rome', 'london', 'new-york'],
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    tagline: 'Where Tradition Meets Tomorrow',
    description:
      'Tokyo, Japan\'s bustling capital, is a city where ultramodern skyscrapers stand alongside ancient temples. This megacity of over 13 million people is a mesmerizing blend of cutting-edge technology, world-class cuisine, vibrant pop culture, and centuries-old traditions. From the serene Meiji Shrine to the electric energy of Shibuya Crossing, Tokyo offers an endlessly fascinating experience that captivates every visitor.',
    history:
      'Originally known as Edo, Tokyo grew from a small fishing village to become the seat of the Tokugawa Shogunate in 1603. For over 250 years, Edo was the political center of Japan. In 1868, with the Meiji Restoration, Emperor Meiji moved the capital from Kyoto and renamed the city Tokyo, meaning "Eastern Capital." The city survived the Great Kanto Earthquake of 1923 and devastating World War II bombings, rebuilding each time into an ever more dynamic metropolis.',
    heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80', caption: 'Shibuya Crossing' },
      { url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', caption: 'Sensō-ji Temple' },
      { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', caption: 'Mount Fuji View' },
      { url: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80', caption: 'Cherry Blossoms' },
      { url: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80', caption: 'Tokyo Skyline at Night' },
      { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80', caption: 'Meiji Shrine' },
    ],
    placesToVisit: [
      'Sensō-ji Temple — Tokyo\'s oldest and most colorful Buddhist temple in Asakusa',
      'Shibuya Crossing — The world\'s busiest pedestrian crossing',
      'Meiji Shrine — Serene Shinto shrine surrounded by lush forest',
      'Tsukiji Outer Market — Fresh seafood and street food paradise',
      'Akihabara — Electric Town, hub of anime, manga, and electronics',
      'Shinjuku Gyoen — Stunning garden blending Japanese, English, and French styles',
      'Tokyo Tower & Skytree — Iconic observation decks with panoramic views',
      'Imperial Palace — Official residence of Japan\'s Emperor',
    ],
    foodToTry: [
      'Sushi & Sashimi — Fresh, world-class raw fish preparations',
      'Ramen — Rich noodle soups in countless regional styles',
      'Tempura — Lightly battered and perfectly fried seafood and vegetables',
      'Wagyu Beef — Melt-in-your-mouth Japanese beef experience',
      'Takoyaki — Crispy octopus balls, a beloved street food',
      'Matcha Desserts — Green tea flavored sweets and ice cream',
    ],
    mustSee: [
      'Cherry blossoms in Ueno Park during spring',
      'The neon-lit streets of Kabukichō at night',
      'A traditional tea ceremony experience',
      'Robot Restaurant show in Shinjuku',
      'Sunrise view of Tokyo from Skytree observation deck',
    ],
    bestTimeToTravel: 'March to May (cherry blossom season) and October to November (autumn foliage) — mild temperatures and stunning natural beauty.',
    nearestAirport: 'Narita International Airport (NRT) — 60 km east; Haneda Airport (HND) — 15 km south',
    nearestRailway: 'Tokyo Station — Central hub for Shinkansen (bullet trains) connecting all of Japan',
    sisterCities: ['paris', 'dubai', 'london', 'rome'],
  },
  {
    slug: 'rome',
    name: 'Rome',
    country: 'Italy',
    tagline: 'The Eternal City',
    description:
      'Rome, the capital of Italy, is a city where ancient history comes alive at every turn. With nearly 3,000 years of globally influential art, architecture, and culture, Rome is an open-air museum unlike any other. The city seamlessly blends its glorious ancient past with a vibrant modern life, where you can walk from a 2,000-year-old amphitheater to a trendy café in the same neighborhood.',
    history:
      'According to legend, Rome was founded in 753 BC by Romulus and Remus. The city grew to become the heart of the Roman Republic and later the vast Roman Empire that dominated the Mediterranean world for centuries. After the fall of the Western Roman Empire in 476 AD, Rome became the center of the Catholic Church and the Papal States. The Renaissance brought a new golden age of art and architecture, with masters like Michelangelo and Raphael leaving their mark on the city.',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=800&q=80', caption: 'The Colosseum' },
      { url: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80', caption: 'Vatican City' },
      { url: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80', caption: 'Trevi Fountain' },
      { url: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80', caption: 'Roman Forum' },
      { url: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80', caption: 'Pantheon' },
      { url: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80', caption: 'Spanish Steps' },
    ],
    placesToVisit: [
      'Colosseum — Massive ancient amphitheater, icon of Imperial Rome',
      'Vatican Museums & Sistine Chapel — Michelangelo\'s ceiling masterpiece',
      'St. Peter\'s Basilica — Largest church in the world with stunning art',
      'Roman Forum — Heart of ancient Roman public life',
      'Trevi Fountain — Baroque fountain where legends say your wishes come true',
      'Pantheon — Perfectly preserved ancient Roman temple',
      'Piazza Navona — Elegant square with Bernini\'s fountains',
      'Trastevere — Charming neighborhood with narrow cobblestone streets',
    ],
    foodToTry: [
      'Carbonara — Creamy pasta with guanciale, egg, and pecorino',
      'Cacio e Pepe — Simple, divine pasta with cheese and pepper',
      'Supplì — Fried rice balls with a melted mozzarella center',
      'Gelato — Italy\'s signature frozen treat in countless flavors',
      'Pizza al Taglio — Roman-style rectangular pizza by the slice',
      'Tiramisu — Classic coffee-flavored layered dessert',
    ],
    mustSee: [
      'The Sistine Chapel ceiling at golden hour lighting',
      'A sunset view from Pincian Hill terrace',
      'The Mouth of Truth at Santa Maria in Cosmedin',
      'An evening passeggiata along Via del Corso',
      'The Appian Way, one of the oldest Roman roads',
    ],
    bestTimeToTravel: 'April to mid-June and September to October — warm weather, manageable crowds, and ideal for walking the city.',
    nearestAirport: 'Leonardo da Vinci–Fiumicino Airport (FCO) — 30 km southwest of central Rome',
    nearestRailway: 'Roma Termini — Main train station connecting to all major Italian cities',
    sisterCities: ['paris', 'tokyo', 'london', 'dubai'],
  },
  {
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    tagline: 'A City Steeped in History',
    description:
      'London, the capital of England and the United Kingdom, is a city that needs no introduction. A global center for finance, culture, fashion, and the arts, London combines centuries of history with a constantly evolving modern edge. From the Tower of London to the West End theatres, from the museums of South Kensington to the street markets of Camden, London offers a world of experiences in one extraordinary city.',
    history:
      'London was founded by the Romans as Londinium around 43 AD. It grew into an important commercial settlement and survived Viking invasions, the Norman Conquest of 1066, the Great Plague of 1665, and the Great Fire of 1666. The city became the heart of the British Empire, the largest empire in history, and shaped global commerce, law, and culture. During World War II, London endured the Blitz but emerged resilient, continuing to grow into the diverse, cosmopolitan metropolis it is today.',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80', caption: 'Big Ben & Parliament' },
      { url: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80', caption: 'Tower Bridge' },
      { url: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&q=80', caption: 'Buckingham Palace' },
      { url: 'https://images.unsplash.com/photo-1526256035811-d7c64312da47?w=800&q=80', caption: 'London Eye' },
      { url: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&q=80', caption: 'Piccadilly Circus' },
      { url: 'https://images.unsplash.com/photo-1534695215921-52f8a19e7909?w=800&q=80', caption: 'The Shard' },
    ],
    placesToVisit: [
      'Tower of London — Historic castle and home to the Crown Jewels',
      'Buckingham Palace — Official residence of the British monarch',
      'British Museum — World-class collection spanning 2 million years of history',
      'Big Ben & Houses of Parliament — Iconic Gothic Revival landmark',
      'Tower Bridge — Victorian engineering marvel with glass walkways',
      'Westminster Abbey — Gothic church, coronation site of British monarchs',
      'Hyde Park — London\'s largest royal park for relaxation',
      'Camden Market — Eclectic shops, street food, and live music',
    ],
    foodToTry: [
      'Fish & Chips — Classic battered fish with thick-cut fries',
      'Full English Breakfast — Hearty morning meal with eggs, bacon, and beans',
      'Sunday Roast — Traditional roast meat with Yorkshire pudding',
      'Afternoon Tea — Elegant tea service with finger sandwiches and scones',
      'Pie & Mash — Traditional East London comfort food',
      'Sticky Toffee Pudding — Rich, indulgent British dessert',
    ],
    mustSee: [
      'Changing of the Guard at Buckingham Palace',
      'A West End theatre show in the evening',
      'Views from the Sky Garden at the Walkie Talkie building',
      'The Rosetta Stone at the British Museum',
      'A walk along the South Bank at sunset',
    ],
    bestTimeToTravel: 'May to September — longest days, warmest weather, and outdoor festivals and events in full swing.',
    nearestAirport: 'Heathrow Airport (LHR) — 24 km west of central London',
    nearestRailway: 'London King\'s Cross & St Pancras International — connecting to UK and Europe via Eurostar',
    sisterCities: ['paris', 'tokyo', 'new-york', 'dubai'],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    tagline: 'City of the Future',
    description:
      'Dubai is a dazzling city of superlatives, where the world\'s tallest building, largest mall, and most luxurious hotels create a skyline that seems pulled from science fiction. This desert metropolis has transformed from a small trading port into a global hub of tourism, commerce, and innovation in just a few decades. Dubai offers golden beaches, world-class shopping, thrilling desert adventures, and a melting pot of cultures from around the globe.',
    history:
      'Dubai\'s history stretches back to the early 18th century when the Al Maktoum dynasty established rule. For centuries, the area thrived on fishing, pearl diving, and maritime trade. The discovery of oil in 1966 transformed Dubai\'s fortunes, but visionary leadership diversified the economy beyond oil. Sheikh Rashid bin Saeed Al Maktoum and his successor Sheikh Mohammed bin Rashid Al Maktoum built Dubai into a modern marvel of architecture, tourism, and global commerce.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80', caption: 'Burj Khalifa' },
      { url: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80', caption: 'Palm Jumeirah' },
      { url: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80', caption: 'Dubai Marina' },
      { url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80', caption: 'Dubai Desert Safari' },
      { url: 'https://images.unsplash.com/photo-1597659840241-37e2b7883595?w=800&q=80', caption: 'Dubai Mall' },
      { url: 'https://images.unsplash.com/photo-1548041347-390744c58da8?w=800&q=80', caption: 'Gold Souk' },
    ],
    placesToVisit: [
      'Burj Khalifa — World\'s tallest building with observation decks at 124th & 148th floors',
      'Dubai Mall — One of the world\'s largest shopping and entertainment destinations',
      'Palm Jumeirah — Iconic palm-shaped artificial island',
      'Dubai Marina — Stunning waterfront promenade with dining and yachts',
      'Old Dubai & Gold Souk — Traditional markets in the historic Deira district',
      'Dubai Miracle Garden — World\'s largest natural flower garden',
      'Jumeirah Mosque — Beautiful mosque open to visitors of all faiths',
      'Dubai Frame — Architectural landmark framing old and new Dubai',
    ],
    foodToTry: [
      'Al Harees — Traditional Emirati wheat and meat slow-cooked dish',
      'Shawarma — Middle Eastern wrap with seasoned meat and tahini',
      'Luqaimat — Sweet fried dumplings drizzled with date syrup',
      'Camel Burger — A unique local delicacy, surprisingly mild and lean',
      'Machboos — Spiced rice with meat, a Gulf States staple',
      'Kunafa — Sweet cheese pastry soaked in sugary syrup',
    ],
    mustSee: [
      'The Dubai Fountain show at Burj Khalifa Lake',
      'Sunset over the desert dunes on a safari',
      'A traditional abra (water taxi) ride across Dubai Creek',
      'The view from At.mosphere restaurant on Burj Khalifa\'s 122nd floor',
      'The aquarium and underwater zoo inside Dubai Mall',
    ],
    bestTimeToTravel: 'November to March — cooler temperatures perfect for outdoor exploration, festivals, and beach activities.',
    nearestAirport: 'Dubai International Airport (DXB) — 5 km east of city center',
    nearestRailway: 'Dubai Metro — Modern urban rail; nearest inter-city rail is Etihad Rail (expanding)',
    sisterCities: ['tokyo', 'rome', 'london', 'new-york'],
  },
  {
    slug: 'new-york',
    name: 'New York City',
    country: 'United States',
    tagline: 'The City That Never Sleeps',
    description:
      'New York City is the cultural, financial, and media capital of the world. Spread across five boroughs, this iconic metropolis is home to world-renowned landmarks, a dazzling arts scene, incredible diversity, and an energy that is impossible to replicate. From the bright lights of Times Square to the tranquil paths of Central Park, NYC is a city of infinite contrasts and experiences.',
    history:
      'Originally inhabited by the Lenape people, the area was first explored by Giovanni da Verrazzano in 1524. The Dutch established New Amsterdam in 1626, which was later seized by the English and renamed New York in 1664. The city played a pivotal role in the American Revolution and served as the first capital of the United States. Through waves of immigration in the 19th and early 20th centuries, New York became the ultimate melting pot, building the diverse cultural tapestry visitors experience today.',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80', caption: 'Statue of Liberty' },
      { url: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&q=80', caption: 'Central Park' },
      { url: 'https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=800&q=80', caption: 'Times Square' },
      { url: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80', caption: 'Brooklyn Bridge' },
      { url: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80', caption: 'Empire State Building' },
      { url: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80', caption: 'Manhattan Skyline' },
    ],
    placesToVisit: [
      'Statue of Liberty & Ellis Island — Symbol of freedom and the immigrant experience',
      'Central Park — 843-acre urban oasis in the heart of Manhattan',
      'Times Square — The dazzling crossroads of the world',
      'Empire State Building — Art Deco icon with 86th-floor observatory',
      'Brooklyn Bridge — Historic suspension bridge with stunning views',
      'Metropolitan Museum of Art — One of the world\'s greatest art museums',
      'Broadway — The pinnacle of live theatre and musicals',
      '9/11 Memorial & Museum — Moving tribute at the World Trade Center site',
    ],
    foodToTry: [
      'New York-Style Pizza — Thin crust, foldable slices with tangy tomato sauce',
      'Bagels — Dense, chewy, and best served with cream cheese and lox',
      'Pastrami on Rye — Iconic deli sandwich at legendary delis like Katz\'s',
      'Cheesecake — Rich, creamy New York-style cheesecake',
      'Dollar Slice — Budget-friendly pizza available at every corner',
      'Cronuts — The croissant-donut hybrid that launched a food craze',
    ],
    mustSee: [
      'Sunrise from the Top of the Rock observation deck',
      'A Broadway show in the Theatre District',
      'The view from the Brooklyn Bridge at dusk',
      'Street performers in Washington Square Park',
      'The Vessel at Hudson Yards',
    ],
    bestTimeToTravel: 'April to June and September to early November — pleasant weather, blooming parks in spring, and stunning fall foliage.',
    nearestAirport: 'John F. Kennedy International Airport (JFK) — 23 km southeast of Manhattan',
    nearestRailway: 'Penn Station — Major Amtrak hub connecting the East Coast of the US',
    sisterCities: ['paris', 'tokyo', 'london', 'dubai'],
  },
  {
    slug: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    tagline: 'Where East Meets West',
    description:
      'Istanbul straddles two continents, Europe and Asia, making it one of the most unique cities on Earth. This former capital of three great empires — Roman, Byzantine, and Ottoman — is a mesmerizing tapestry of ancient mosques, bustling bazaars, modern art galleries, and waterfront dining along the Bosphorus. The city pulses with an energy that bridges centuries of history and a dynamic contemporary culture.',
    history:
      'Founded as Byzantium in the 7th century BC by Greek colonists, the city was refounded as Constantinople by Roman Emperor Constantine the Great in 330 AD, serving as the capital of the Eastern Roman (Byzantine) Empire for over a thousand years. In 1453, Ottoman Sultan Mehmed II conquered the city, making it the capital of the Ottoman Empire. Known as Istanbul since the Republic of Turkey was established in 1923, the city remains Turkey\'s cultural and economic heartbeat.',
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80', caption: 'Hagia Sophia' },
      { url: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80', caption: 'Blue Mosque' },
      { url: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', caption: 'Grand Bazaar' },
      { url: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80', caption: 'Bosphorus View' },
      { url: 'https://images.unsplash.com/photo-1558383817-3f0bfd35c1ae?w=800&q=80', caption: 'Galata Tower' },
      { url: 'https://images.unsplash.com/photo-1575661294899-69a70ddfe99e?w=800&q=80', caption: 'Spice Bazaar' },
    ],
    placesToVisit: [
      'Hagia Sophia — 1,500-year-old architectural marvel, once a cathedral, then a mosque',
      'Blue Mosque (Sultan Ahmed Mosque) — Stunning mosque with six minarets and blue tilework',
      'Grand Bazaar — One of the oldest and largest covered markets in the world',
      'Topkapi Palace — Opulent Ottoman palace overlooking the Bosphorus',
      'Basilica Cistern — Underground Byzantine water reservoir with 336 columns',
      'Galata Tower — Medieval stone tower with panoramic views across Istanbul',
      'Bosphorus Cruise — Scenic boat ride between Europe and Asia',
      'Süleymaniye Mosque — Masterpiece of architect Mimar Sinan',
    ],
    foodToTry: [
      'Kebab — Turkey\'s most famous dish in dozens of regional varieties',
      'Baklava — Layered phyllo pastry with nuts and honey syrup',
      'Turkish Breakfast — Lavish spread of cheeses, olives, eggs, and fresh bread',
      'Simit — Sesame-crusted ring bread, Istanbul\'s street food staple',
      'Lahmacun — Thin, crispy Turkish flatbread with seasoned minced meat',
      'Turkish Tea & Coffee — Traditional beverages served throughout the day',
    ],
    mustSee: [
      'The call to prayer echoing across the Sultanahmet district at sunset',
      'A traditional Turkish bath (hammam) experience',
      'The whirling dervishes ceremony',
      'Sunset from a rooftop restaurant overlooking the Golden Horn',
      'Fish sandwiches at the Galata Bridge',
    ],
    bestTimeToTravel: 'April to May and September to November — perfect weather for exploring on foot with comfortable temperatures.',
    nearestAirport: 'Istanbul Airport (IST) — 35 km northwest of city center',
    nearestRailway: 'Sirkeci Station (historic) and Halkalı Station — connections to European rail network',
    sisterCities: ['rome', 'dubai', 'paris', 'new-york'],
  },
  {
    slug: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    tagline: 'Harbour City of Dreams',
    description:
      'Sydney, Australia\'s largest and most iconic city, is famous for its stunning harbour, world-class beaches, and a relaxed yet sophisticated lifestyle. The Sydney Opera House and Harbour Bridge form one of the world\'s most recognizable skylines. With its multicultural population, thriving food scene, lush national parks, and golden beaches like Bondi and Manly, Sydney offers a perfect blend of natural beauty and urban excitement.',
    history:
      'The Sydney area has been home to Aboriginal Australians for at least 30,000 years. The Gadigal people of the Eora Nation are the traditional custodians of the land. In 1788, Captain Arthur Phillip led the First Fleet to establish a British penal colony at Sydney Cove, making it the first European settlement in Australia. From its convict origins, Sydney grew into a prosperous city, particularly during the gold rush era of the 1850s. Today it stands as a cosmopolitan world city.',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80', caption: 'Sydney Opera House' },
      { url: 'https://images.unsplash.com/photo-1524820197278-540916411e20?w=800&q=80', caption: 'Harbour Bridge' },
      { url: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80', caption: 'Bondi Beach' },
      { url: 'https://images.unsplash.com/photo-1598948485421-33a1655d3c38?w=800&q=80', caption: 'The Rocks District' },
      { url: 'https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=800&q=80', caption: 'Darling Harbour' },
      { url: 'https://images.unsplash.com/photo-1571438500241-40c91a8a92e5?w=800&q=80', caption: 'Blue Mountains' },
    ],
    placesToVisit: [
      'Sydney Opera House — UNESCO World Heritage Site and performing arts icon',
      'Sydney Harbour Bridge — Climb the bridge for breathtaking harbour panoramas',
      'Bondi Beach — World-famous surf beach with coastal walks',
      'The Rocks — Sydney\'s oldest neighborhood with cobblestone laneways',
      'Royal Botanic Garden — Lush gardens with harbour views',
      'Taronga Zoo — Wildlife park with stunning harbour backdrop',
      'Darling Harbour — Waterfront precinct with museums and dining',
      'Blue Mountains — UNESCO-listed mountain range just outside Sydney',
    ],
    foodToTry: [
      'Barramundi — Australia\'s iconic flaky white fish',
      'Meat Pie — Savory pastry filled with minced meat and gravy',
      'Pavlova — Meringue dessert topped with cream and fresh fruit',
      'Vegemite Toast — Iconic Australian breakfast spread, an acquired taste',
      'Flat White — Smooth, velvety espresso-based coffee perfected in Australia',
      'Lamingtons — Sponge cake coated in chocolate and coconut',
    ],
    mustSee: [
      'New Year\'s Eve fireworks over Sydney Harbour',
      'The Bondi to Coogee coastal walk',
      'A performance inside the Sydney Opera House',
      'Sunset from Mrs Macquarie\'s Chair lookout',
      'Weekend markets at The Rocks',
    ],
    bestTimeToTravel: 'September to November and March to May — pleasant, mild weather ideal for outdoor activities and beach visits.',
    nearestAirport: 'Sydney Kingsford Smith Airport (SYD) — 8 km south of the city center',
    nearestRailway: 'Sydney Central Station — Main intercity and suburban rail hub',
    sisterCities: ['tokyo', 'london', 'dubai', 'new-york'],
  },
];

export const getDestination = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};

export const getSisterCities = (slugs: string[]): Destination[] => {
  return destinations.filter((d) => slugs.includes(d.slug));
};
