export type PlaceCategory =
  | "bakery"
  | "lunch"
  | "dinner"
  | "bar"
  | "cafe"
  | "attraction"
  | "museum"
  | "sun-spot";

export interface Place {
  id: string;
  name: string;
  category: PlaceCategory;
  lat: number;
  lng: number;
  description: string;
  neighborhood: string;
  priceLevel?: 1 | 2 | 3; // € €€ €€€
  googleMapsUrl?: string;
  website?: string;
  tags?: string[];
}

export const CATEGORY_CONFIG: Record<
  PlaceCategory,
  { label: string; emoji: string; color: string }
> = {
  bakery: { label: "Bakery", emoji: "🥐", color: "hsl(35, 90%, 55%)" },
  lunch: { label: "Lunch / Brunch", emoji: "🥪", color: "hsl(145, 60%, 42%)" },
  dinner: { label: "Dinner", emoji: "🍽️", color: "hsl(0, 72%, 55%)" },
  bar: { label: "Bar", emoji: "🍺", color: "hsl(270, 60%, 55%)" },
  cafe: { label: "Café", emoji: "☕", color: "hsl(25, 70%, 48%)" },
  attraction: { label: "Attraction", emoji: "🏛️", color: "hsl(210, 70%, 50%)" },
  "sun-spot": { label: "Sun Spot", emoji: "☀️", color: "hsl(50, 90%, 50%)" },
};

export const places: Place[] = [
  // Bakeries
  {
    id: "hart-bageri",
    name: "Hart Bageri",
    category: "bakery",
    lat: 55.6686,
    lng: 12.5564,
    description:
      "One of the best places for pastries and the typical Danish breakfast — boller med ost (bread roll with cheese). Hart is popping up everywhere and for good reason.",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/hart-bageri",
    website: "https://hartbageri.com/",
    tags: ["pastries", "danish breakfast"],
  },
  {
    id: "juno-bakery",
    name: "Juno Bakery",
    category: "bakery",
    lat: 55.6637,
    lng: 12.5446,
    description:
      "You'll queue, but it's absolutely worth it for the cardamom buns. The pistachio croissant is the real star of the show though.",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    googleMapsUrl: "https://goo.gl/maps/zgmowSTKpC4QCP3i6",
    tags: ["cardamom buns", "croissants", "queue-worthy"],
  },
  {
    id: "andersen-maillard",
    name: "Andersen & Maillard",
    category: "bakery",
    lat: 55.6893,
    lng: 12.5536,
    description:
      "Three locations across Copenhagen. Highly recommended for their iconic square croissants.",
    neighborhood: "Nørrebro",
    priceLevel: 2,
    website: "https://www.andersenmaillard.dk/",
    tags: ["square croissants"],
  },
  {
    id: "brod",
    name: "Brød",
    category: "bakery",
    lat: 55.6653,
    lng: 12.5453,
    description:
      "A cute neighbourhood bakery in Enghave Plads. The almond croissant and cardamom bun are outstanding.",
    neighborhood: "Vesterbro",
    priceLevel: 1,
    googleMapsUrl: "https://maps.app.goo.gl/G4e16RDiT1KKxm7N6",
    tags: ["almond croissant", "neighbourhood gem"],
  },

  // Lunch / Brunch
  {
    id: "torvehallerne",
    name: "Torvehallerne",
    category: "lunch",
    lat: 55.6839,
    lng: 12.5711,
    description:
      "Covered food market near Nørreport station with tons of snack and lunch spots. Try Hav — a fishmonger where you can build your own delicious fish salad platter.",
    neighborhood: "Indre By",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/gizWhg7nLLBqGx829",
    tags: ["food market", "fish", "variety"],
  },
  {
    id: "palae-bar",
    name: "Palæ Bar",
    category: "lunch",
    lat: 55.6777,
    lng: 12.5857,
    description:
      "Central but not on the tourist trail. Walk into their kitchen and serve yourself authentic, inexpensive smørrebrød (open sandwiches). Warm service.",
    neighborhood: "Indre By",
    priceLevel: 1,
    googleMapsUrl: "https://maps.app.goo.gl/yaJNGmLeKZXbtdAN9",
    tags: ["smørrebrød", "self-serve", "hidden gem"],
  },
  {
    id: "mad-kaffe",
    name: "Mad & Kaffe",
    category: "lunch",
    lat: 55.6672,
    lng: 12.5533,
    description:
      "A solid choice for a hungover brunch in Vesterbro. Build your own brunch plate from a selection of small dishes.",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    googleMapsUrl: "https://goo.gl/maps/317oLjxXenaPGEjV8",
    tags: ["brunch", "build-your-own"],
  },
  {
    id: "helges-ost",
    name: "Helge's Ost",
    category: "lunch",
    lat: 55.6718,
    lng: 12.5509,
    description:
      "A really good deli serving excellent sandwiches on Værnedamsvej — a cute side street linking Frederiksberg and Vesterbro.",
    neighborhood: "Vesterbro/Frederiksberg",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/X2LXdLDLBZc9qTkq7",
    tags: ["deli", "sandwiches", "cheese"],
  },

  // Dinner
  {
    id: "osteria-16",
    name: "Osteria 16",
    category: "dinner",
    lat: 55.6651,
    lng: 12.5476,
    description:
      "The absolute best Italian in Copenhagen. Combines the typical Copenhagen tasting menu concept with perfectly executed, slightly rustic Italian fare. The original on Haderslevgade is the best.",
    neighborhood: "Vesterbro",
    priceLevel: 3,
    googleMapsUrl: "https://maps.app.goo.gl/2VyukSNLpNGxSwr48",
    tags: ["italian", "tasting menu", "reservation needed"],
  },
  {
    id: "gasoline-grill",
    name: "Gasoline Grill",
    category: "dinner",
    lat: 55.6787,
    lng: 12.5744,
    description:
      "Copenhagen's best burger spot — started out in a gas station, now has multiple locations. Simple, perfect burgers.",
    neighborhood: "Indre By",
    priceLevel: 1,
    website: "https://www.gasolinegrill.com/",
    tags: ["burgers", "casual", "iconic"],
  },
  {
    id: "restaurant-kronborg",
    name: "Restaurant Kronborg",
    category: "dinner",
    lat: 55.6796,
    lng: 12.5793,
    description:
      "Old-school Danish restaurant. Try the sild (herring), flæskesteg (roast pork) and don't say no to some schnapps!",
    neighborhood: "Indre By",
    priceLevel: 2,
    googleMapsUrl: "https://goo.gl/maps/aoG9GDeqHV1pgboS9",
    tags: ["traditional danish", "herring", "schnapps"],
  },
  {
    id: "restaurant-bouillon",
    name: "Restaurant Bouillon",
    category: "dinner",
    lat: 55.6762,
    lng: 12.5687,
    description:
      "A French bistro serving classics quickly and consistently well. Danes love it — a little fancy, but at a smart price. Great budget dinner pick.",
    neighborhood: "Indre By",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/vu1ff6zJwKs5BXG16",
    tags: ["french", "bistro", "budget-friendly"],
  },
  {
    id: "grimal",
    name: "Grimal",
    category: "dinner",
    lat: 55.6669,
    lng: 12.5539,
    description:
      "A favourite French bistro. They also serve a decent scotch egg — not sure how it made it onto the menu, but very glad it did.",
    neighborhood: "Vesterbro",
    priceLevel: 3,
    googleMapsUrl: "https://maps.app.goo.gl/iZChZNe6JgRJhYoc8",
    tags: ["french", "bistro", "scotch egg"],
  },
  {
    id: "kin-kin",
    name: "Kin Kin",
    category: "dinner",
    lat: 55.6756,
    lng: 12.5683,
    description:
      "The only Michelin-starred Thai restaurant outside of Thailand. One of the best dining experiences you can have. Reservation required.",
    neighborhood: "Indre By",
    priceLevel: 3,
    googleMapsUrl: "https://goo.gl/maps/pyrKP4v4XCaV11rD7",
    tags: ["thai", "michelin star", "reservation needed"],
  },

  // Bars
  {
    id: "riga",
    name: "Riga",
    category: "bar",
    lat: 55.6668,
    lng: 12.5530,
    description:
      "Absolute best vibe when the sun is out. Try their custom Pilsner or Spritz on tap. A Vesterbro classic.",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    googleMapsUrl: "https://goo.gl/maps/46HYVd1gsZAa87Aa8",
    tags: ["sun terrace", "pilsner", "spritz"],
  },
  {
    id: "fermentoren",
    name: "Fermentoren",
    category: "bar",
    lat: 55.6658,
    lng: 12.5495,
    description:
      "Almost unbeatable selection of beers and a slightly grungy vibe. The bar is candle-lit because the owner had decision paralysis about lighting!",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/TYGVhhSYd4jTnPrk8",
    tags: ["craft beer", "candle-lit", "grungy"],
  },
  {
    id: "warpigs",
    name: "Warpigs Brewpub",
    category: "bar",
    lat: 55.6635,
    lng: 12.5557,
    description:
      "Brewpub serving authentic BBQ alongside great craft beers. Industrial vibes in Kødbyen (the meatpacking district).",
    neighborhood: "Kødbyen",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/dpBvSNKaWXsTmSTJ6",
    tags: ["brewpub", "BBQ", "industrial"],
  },
  {
    id: "lidkoeb",
    name: "Lidkoeb",
    category: "bar",
    lat: 55.6673,
    lng: 12.5531,
    description:
      "Multi-level cocktail bar in a beautiful old pharmacy. Intimate whisky bar on the top floor. One of Copenhagen's best cocktail spots.",
    neighborhood: "Vesterbro",
    priceLevel: 3,
    googleMapsUrl: "https://goo.gl/maps/yCwtJPeKegLPVVDu9",
    tags: ["cocktails", "whisky", "atmospheric"],
  },
  {
    id: "bo-bi-bar",
    name: "Bo-Bi Bar",
    category: "bar",
    lat: 55.6788,
    lng: 12.5739,
    description:
      "Possibly the best bodega in Copenhagen. They sell boiled eggs. Taking photos is banned. Order beer by the bottle (flaske).",
    neighborhood: "Indre By",
    priceLevel: 1,
    googleMapsUrl: "https://maps.app.goo.gl/w49djh6ZBJPdKtK6A",
    tags: ["bodega", "boiled eggs", "no photos"],
  },
  {
    id: "mikkeller-baghaven",
    name: "Mikkeller Baghaven",
    category: "bar",
    lat: 55.6892,
    lng: 12.6108,
    description:
      "Best evening vibes as the sun sets over the harbour. Wild ales and sours in an industrial waterfront setting at Refshaleøen.",
    neighborhood: "Refshaleøen",
    priceLevel: 2,
    googleMapsUrl: "https://goo.gl/maps/Tc6ywRo5M25KzLQu5",
    tags: ["craft beer", "sunset", "waterfront"],
  },

  // Sun spots
  {
    id: "la-banchina",
    name: "La Banchina",
    category: "sun-spot",
    lat: 55.6888,
    lng: 12.6085,
    description:
      "Beyond idyllic. One of the best summer spots — sunbathe, swim, have a drink, enjoy fish from the charcoal grill. Gets packed because everyone knows about it now.",
    neighborhood: "Refshaleøen",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/Uw5sT3z411qdDAoWA",
    tags: ["swimming", "sun", "charcoal grill"],
  },
  {
    id: "reffen",
    name: "Reffen",
    category: "sun-spot",
    lat: 55.6930,
    lng: 12.6100,
    description:
      "The largest street food market in the Nordic region. Lots of street food vendors in containers by the water in an old industrial area. Wonderful summer vibes. Opens seasonally (March–October).",
    neighborhood: "Refshaleøen",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/8AdkHxfPwEvyJDj89",
    tags: ["street food", "waterfront", "seasonal"],
  },
  {
    id: "islands-brygge",
    name: "Islands Brygge Harbour Bath",
    category: "sun-spot",
    lat: 55.6633,
    lng: 12.5834,
    description:
      "Great for evening sun. Grab a cold 6-pack of Tuborg Grøn from any supermarket and sit on the harbour watching people swim. Quintessential Copenhagen.",
    neighborhood: "Islands Brygge",
    priceLevel: 1,
    googleMapsUrl: "https://maps.app.goo.gl/KZ5arMxkNBSeitNcA",
    tags: ["harbour bath", "swimming", "evening sun"],
  },
  {
    id: "kayak-bar",
    name: "Kayak Bar",
    category: "sun-spot",
    lat: 55.6740,
    lng: 12.5840,
    description:
      "A half-floating bar with great sun spots, kayak rental and seafood. Perfect for a sunny afternoon on the water.",
    neighborhood: "Indre By",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/T77mGWDSFsN7k8Ro8",
    tags: ["kayak", "floating bar", "seafood"],
  },

  // Attractions
  {
    id: "torvaldsen-museum",
    name: "Thorvaldsens Museum",
    category: "attraction",
    lat: 55.6759,
    lng: 12.5772,
    description:
      "A gem hidden in plain sight right next to parliament. Beautiful neoclassical building housing the works of sculptor Bertel Thorvaldsen.",
    neighborhood: "Indre By",
    priceLevel: 1,
    googleMapsUrl: "https://maps.app.goo.gl/nKGcY1ryMbL6NzLJ8",
    tags: ["museum", "sculpture", "neoclassical"],
  },
  {
    id: "louisiana",
    name: "Louisiana Museum of Modern Art",
    category: "attraction",
    lat: 55.8830,
    lng: 12.5420,
    description:
      "A world-class museum of modern art on the coast north of Copenhagen. The building and sculpture garden are as stunning as the art.",
    neighborhood: "Humlebæk",
    priceLevel: 2,
    googleMapsUrl: "https://maps.app.goo.gl/gxZQVRZpjpreZMWX8",
    tags: ["modern art", "coast", "world-class"],
  },
  {
    id: "copenhill",
    name: "Copenhill (Amager Bakke)",
    category: "attraction",
    lat: 55.6825,
    lng: 12.6118,
    description:
      "Free views of Copenhagen from the roof of a power station that doubles as a dry ski slope. A marvel of Danish design and sustainability.",
    neighborhood: "Amager",
    priceLevel: 1,
    googleMapsUrl: "https://maps.app.goo.gl/EBKfG68zz8bT7Xqj9",
    tags: ["views", "architecture", "ski slope"],
  },
];

export const COPENHAGEN_CENTER = { lat: 55.6761, lng: 12.5683 };
