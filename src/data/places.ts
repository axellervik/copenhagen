export type PlaceCategory =
  | "bakery"
  | "lunch"
  | "dinner"
  | "bar"
  | "cafe"
  | "attraction"
  | "museum"
  | "swimming";

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
  museum: { label: "Museum", emoji: "🎨", color: "hsl(330, 65%, 50%)" },
  swimming: { label: "Swimming", emoji: "🏊", color: "hsl(195, 80%, 50%)" },
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

  // Dinner — Christianshavn
  {
    id: "no-2",
    name: "No. 2",
    category: "dinner",
    lat: 55.67248,
    lng: 12.58478,
    description: "Ny-nordisk gastronomi vid vattnet. 400–500 DKK för 4–5 rätters meny.",
    neighborhood: "Christianshavn",
    priceLevel: 2,
    tags: ["new nordic", "waterfront", "tasting menu"],
  },
  {
    id: "donda-khana",
    name: "Donda Khana",
    category: "dinner",
    lat: 55.67368,
    lng: 12.58952,
    description: "Indiskt/sydasiatiskt. Hört bra om. Mitt i Christianshavn. 500 DKK för 5 rätter, 100–200 per rätt à la carte.",
    neighborhood: "Christianshavn",
    priceLevel: 2,
    tags: ["indian", "south asian", "tasting menu"],
  },
  {
    id: "le-grand-rouge",
    name: "Le Grand Rouge",
    category: "dinner",
    lat: 55.67733,
    lng: 12.59533,
    description: "Klassiskt, lyxigt franskt brasserie. Åt här på nyår. Väldigt bra priser. Mittemot Nyhavn, nära ginbaren Two Socks. Ca 50 DKK per förrätt, 100–150 DKK per huvudrätt. 200–300 DKK för trerätters.",
    neighborhood: "Christianshavn",
    priceLevel: 2,
    tags: ["french", "brasserie", "nyhavn"],
  },
  {
    id: "sankt-annae-8",
    name: "Sankt Annae 8",
    category: "dinner",
    lat: 55.67386,
    lng: 12.59136,
    description: "Mysig liten restaurang med endast en kötträtt och en vegetarisk rätt per dag (samt några förrätter). Danskt/europeiskt, menyn varierar. Mittemot ginbaren Two Socks. 145–185 DKK per rätt.",
    neighborhood: "Christianshavn",
    priceLevel: 1,
    tags: ["danish", "european", "daily menu", "cozy"],
  },

  // Dinner — Nørrebro
  {
    id: "silberbauers-bistro",
    name: "Silberbauers Bistro",
    category: "dinner",
    lat: 55.69327,
    lng: 12.54343,
    description: "Mycket väl omtalad fransk fisk- och skaldjursbistro. Meny på svart tavla som varierar dag till dag. Ca 100 DKK per förrätt, 200 DKK per huvudrätt.",
    neighborhood: "Nørrebro",
    priceLevel: 2,
    tags: ["french", "seafood", "blackboard menu"],
  },
  {
    id: "selfish",
    name: "Selfish",
    category: "dinner",
    lat: 55.68950,
    lng: 12.55817,
    description: "Enligt Jonas bästa sushin i sin prisklass. 7 bitar för 135 DKK, 45 bitar för 765 DKK (17–20 DKK per bit).",
    neighborhood: "Nørrebro",
    priceLevel: 2,
    tags: ["sushi", "japanese", "great value"],
  },
  {
    id: "osteria-16",
    name: "Osteria 16",
    category: "dinner",
    lat: 55.68905,
    lng: 12.56273,
    description: "Intimt, enkelt och genuint italienskt. Finns även i Vesterbro. 8 rätter (7 antipasti + 1 primo) ca 400 DKK.",
    neighborhood: "Nørrebro",
    priceLevel: 2,
    tags: ["italian", "tasting menu", "intimate"],
  },
  {
    id: "baka-d-busk",
    name: "Baka d' Busk",
    category: "dinner",
    lat: 55.68729,
    lng: 12.54781,
    description: "Fullt vegetariskt där man gärna delar på ett antal rätter. 135–185 DKK per rätt.",
    neighborhood: "Nørrebro",
    priceLevel: 2,
    tags: ["vegetarian", "sharing plates"],
  },

  // Dinner — Indre By
  {
    id: "aamanns-1921",
    name: "Aamanns 1921",
    category: "dinner",
    lat: 55.68021,
    lng: 12.57591,
    description: "Smørrebrød, restaurang skapad av känd kock. 3-rätters lunchmeny 390 DKK, smörrebröd 135–195 DKK styck.",
    neighborhood: "Indre By",
    priceLevel: 2,
    tags: ["smørrebrød", "famous chef", "danish"],
  },
  {
    id: "norrlyst-taarnet",
    name: "Norrlyst i Tårnet",
    category: "dinner",
    lat: 55.67565,
    lng: 12.58004,
    description: "Klassisk dansk/europeisk mat uppe i Tårnet, Christiansborg. Ta hissen upp innan middagen för fin utsikt. 4-rätters ca 500 DKK, à la carte 150–350 DKK per rätt.",
    neighborhood: "Indre By",
    priceLevel: 3,
    tags: ["danish", "european", "views", "christiansborg"],
  },
  {
    id: "saji",
    name: "Saji",
    category: "dinner",
    lat: 55.67780,
    lng: 12.57000,
    description: "Modern indonesisk/asiatisk mat. Verkar vara Jonas favoritrestaurang. Ett kvarter från ginbaren Two Socks. 60–100 DKK per förrätt, 140–200 DKK per varmrätt.",
    neighborhood: "Indre By",
    priceLevel: 2,
    tags: ["indonesian", "asian", "modern"],
  },
  {
    id: "det-lille-apotek",
    name: "Det Lille Apotek",
    category: "dinner",
    lat: 55.68038,
    lng: 12.57463,
    description: "Köpenhamns äldsta restaurang, traditionell dansk husmanskost och smörrebröd. 100–150 DKK per rätt.",
    neighborhood: "Indre By",
    priceLevel: 1,
    tags: ["danish", "traditional", "oldest restaurant"],
  },
  {
    id: "schonnemann",
    name: "Schønnemann",
    category: "dinner",
    lat: 55.68282,
    lng: 12.57602,
    description: "Ikoniska och traditionella smørrebrød. 150–250 DKK per smörrebröd.",
    neighborhood: "Indre By",
    priceLevel: 2,
    tags: ["smørrebrød", "iconic", "traditional"],
  },
  {
    id: "marv-og-ben",
    name: "Marv & Ben",
    category: "dinner",
    lat: 55.67730,
    lng: 12.57694,
    description: "Modern dansk gastronomi. Beläget fint nära kanal och borgen. 520 DKK för 4 rätter.",
    neighborhood: "Indre By",
    priceLevel: 3,
    tags: ["modern danish", "gastronomy", "canal"],
  },
  {
    id: "hidden-dimsum",
    name: "Hidden Dimsum",
    category: "dinner",
    lat: 55.67707,
    lng: 12.57340,
    description: "Kinesisk dimsum där man delar på smårätter. Ca 80 DKK per rätt, större rätter 150–290 DKK.",
    neighborhood: "Indre By",
    priceLevel: 1,
    tags: ["chinese", "dimsum", "sharing"],
  },
  {
    id: "vaekst",
    name: "Vækst",
    category: "dinner",
    lat: 55.67883,
    lng: 12.56718,
    description: "Modern europeisk restaurang, ca ett kvarter från ginbaren Two Socks. 400 DKK för 3 rätters, 800 DKK för jättemånga rätter.",
    neighborhood: "Indre By",
    priceLevel: 2,
    tags: ["modern european", "greenhouse"],
  },
  {
    id: "bistro-boheme",
    name: "Bistro Boheme",
    category: "dinner",
    lat: 55.68734,
    lng: 12.59145,
    description: "Lyxigt franskinspirerat. Anbefallen varje gång jag frågar min matnördiga kollega. Rätt dyrt. 150–250 DKK förrätt, 250–500 DKK varmrätt.",
    neighborhood: "Indre By",
    priceLevel: 3,
    tags: ["french", "luxury", "highly recommended"],
  },
  {
    id: "skagen-fiskerestaurant",
    name: "Skagen Fiskerestaurant Esplanaden",
    category: "dinner",
    lat: 55.68744,
    lng: 12.59314,
    description: "Stor skagentallrik 575 DKK per person. Smörgåsar ca 150–200 DKK per person.",
    neighborhood: "Indre By",
    priceLevel: 3,
    tags: ["seafood", "fish", "danish"],
  },

  // Dinner — Vesterbro
  {
    id: "jah-izakaya",
    name: "Jah Izakaya & Sake Bar",
    category: "dinner",
    lat: 55.67071,
    lng: 12.55749,
    description: "Japansk gastropub, ska vara kul stämning. Omakase tasting 500 DKK, sake tasting 220 DKK, à la carte ca 100–200 per rätt.",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    tags: ["japanese", "izakaya", "sake", "omakase"],
  },
  {
    id: "gorilla",
    name: "Gorilla",
    category: "dinner",
    lat: 55.66771,
    lng: 12.56112,
    description: "Lite stökigt men med goda delningsrätter (Kødbyen). 140–225 DKK per rätt.",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    tags: ["sharing plates", "kødbyen", "lively"],
  },
  {
    id: "maya",
    name: "Maya",
    category: "dinner",
    lat: 55.66770,
    lng: 12.55794,
    description: "Sydamerikanskt som verkar ha bra stämning (Kødbyen). Ca 100–200 DKK per rätt.",
    neighborhood: "Vesterbro",
    priceLevel: 2,
    tags: ["south american", "kødbyen", "vibrant"],
  },

  // Dinner — Nordhavn
  {
    id: "vie",
    name: "VIE",
    category: "dinner",
    lat: 55.70738,
    lng: 12.59377,
    description: "Modern fin restaurang, fransk-nordisk med lite asiatiska inspirationer. 5-rätters för 690 DKK.",
    neighborhood: "Nordhavn",
    priceLevel: 3,
    tags: ["french-nordic", "asian fusion", "fine dining"],
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

  // Cafés
  {
    id: "andersen-bakery",
    name: "Andersen Bakery",
    category: "cafe",
    lat: 55.66723,
    lng: 12.57848,
    description:
      "Award-winning bakery on Islands Brygge founded by a Japanese baker who fell in love with Danish pastries. Beautiful cakes and pastries with a Japanese-Danish twist.",
    neighborhood: "Islands Brygge",
    priceLevel: 2,
    website: "https://andersenbakery.dk/",
    tags: ["pastries", "japanese-danish", "cakes"],
  },
  {
    id: "minor-coffee",
    name: "Coffee Minor",
    category: "cafe",
    lat: 55.66993,
    lng: 12.55547,
    description:
      "Cosy specialty coffee spot on Istedgade in Vesterbro. Small but perfectly formed — great espresso drinks and a relaxed neighbourhood vibe.",
    neighborhood: "Vesterbro",
    priceLevel: 1,
    tags: ["specialty coffee", "cosy", "neighbourhood"],
  },
  {
    id: "baaden",
    name: "Båden",
    category: "cafe",
    lat: 55.67573,
    lng: 12.59464,
    description:
      "A unique, colourful café right on the water in Christianshavn. Home-baked goods, great coffee, and a sunny terrace by the canal. The grilled cheese croissant is a game-changer.",
    neighborhood: "Christianshavn",
    priceLevel: 2,
    website: "https://www.baadencph.dk/",
    tags: ["waterfront", "home-baked", "sunny terrace"],
  },
  {
    id: "impact-roasters",
    name: "Impact Roasters",
    category: "cafe",
    lat: 55.68950,
    lng: 12.55543,
    description:
      "Specialty coffee roastery on Griffenfeldsgade in Nørrebro with a focus on ethical sourcing and direct trade. Great pour-overs in a welcoming space.",
    neighborhood: "Nørrebro",
    priceLevel: 1,
    website: "https://impactroasters.dk/",
    tags: ["specialty coffee", "roastery", "ethical"],
  },
  {
    id: "holy-bean",
    name: "Holy Bean Coffee & Cocktails",
    category: "cafe",
    lat: 55.68865,
    lng: 12.56228,
    description:
      "Where coffee meets cocktails — a playful, nerdy spot on Ravnsborggade in Nørrebro. Specialty coffee by day, creative cocktails by night. Zero snobbery.",
    neighborhood: "Nørrebro",
    priceLevel: 2,
    website: "https://holybean.dk/",
    tags: ["specialty coffee", "cocktails", "evening drinks"],
  },
  {
    id: "the-artisan",
    name: "The Artisan",
    category: "cafe",
    lat: 55.69181,
    lng: 12.56852,
    description:
      "Specialty coffee shop by the lakes (Sortedam Dossering) serving single-estate Peruvian beans roasted in-house. A beautiful spot for a morning coffee walk.",
    neighborhood: "Nørrebro",
    priceLevel: 2,
    website: "https://theartisan.dk/",
    tags: ["specialty coffee", "micro roastery", "lakeside"],
  },
  {
    id: "pods-of-beans",
    name: "Pods of Beans",
    category: "cafe",
    lat: 55.67370,
    lng: 12.57590,
    description:
      "Cosy café on Ny Kongensgade near the lakes. Great for a quiet coffee break in the city centre.",
    neighborhood: "Indre By",
    priceLevel: 1,
    tags: ["specialty coffee", "cosy"],
  },
  {
    id: "signature-coffee",
    name: "Signature Coffee",
    category: "cafe",
    lat: 55.67907,
    lng: 12.56899,
    description:
      "Coffee shop and bar on Sankt Peders Stræde. Specialty coffee by day, drinks by evening.",
    neighborhood: "Indre By",
    priceLevel: 2,
    tags: ["specialty coffee", "bar", "central"],
  },
  {
    id: "switch-coffee",
    name: "Switch Coffee",
    category: "cafe",
    lat: 55.67892,
    lng: 12.57060,
    description:
      "Specialty coffee on Studiestræde in the Latin Quarter. Simple, focused, excellent brews.",
    neighborhood: "Indre By",
    priceLevel: 1,
    tags: ["specialty coffee", "latin quarter"],
  },
  {
    id: "democratic-coffee",
    name: "Democratic Coffee",
    category: "cafe",
    lat: 55.68084,
    lng: 12.57342,
    description:
      "Popular café on Krystalgade near the university. Good coffee in a relaxed, studenty atmosphere.",
    neighborhood: "Indre By",
    priceLevel: 1,
    tags: ["specialty coffee", "university area"],
  },
  {
    id: "o12-coffee",
    name: "Ø12 Coffee & Eatery",
    category: "cafe",
    lat: 55.69013,
    lng: 12.57528,
    description:
      "Charming coffee spot on Øster Farimagsgade near the Botanical Garden. Great brunch and specialty coffee.",
    neighborhood: "Indre By",
    priceLevel: 2,
    tags: ["specialty coffee", "brunch", "botanical garden"],
  },
  {
    id: "prolog-papiroen",
    name: "Prolog Coffee Bar Papirøen",
    category: "cafe",
    lat: 55.67837,
    lng: 12.59874,
    description:
      "Prolog's waterfront location on Papirøen (Paper Island). Specialty coffee with harbour views in a vibrant, creative neighbourhood.",
    neighborhood: "Christianshavn",
    priceLevel: 2,
    website: "https://prologcoffee.com/",
    tags: ["specialty coffee", "waterfront", "papirøen"],
  },
  {
    id: "alaska-kaffe",
    name: "Alaska Kaffe",
    category: "cafe",
    lat: 55.67857,
    lng: 12.56965,
    description:
      "Coffee spot on Studiestræde in the Latin Quarter. A relaxed neighbourhood café in the heart of the city.",
    neighborhood: "Indre By",
    priceLevel: 1,
    tags: ["coffee", "latin quarter"],
  },
];

// Import and merge museum data
import { museums } from "./museums";
export const allPlaces: Place[] = [...places, ...museums];

export const COPENHAGEN_CENTER = { lat: 55.6761, lng: 12.5683 };
