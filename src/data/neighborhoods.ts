export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  color: string;
  polygon: [number, number][];
  labelOffset?: [number, number]; // [lat offset, lng offset] from centroid
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: "christianshavn",
    name: "Christianshavn",
    description: "Ön med bl.a. Christiania och promenad längs vattnet. Lite utanför centralaste Köpenhamn.",
    color: "hsl(170, 60%, 45%)",
    polygon: [
      [55.6780, 12.5870],
      [55.6810, 12.5900],
      [55.6790, 12.6050],
      [55.6730, 12.6100],
      [55.6680, 12.6020],
      [55.6660, 12.5920],
      [55.6700, 12.5850],
      [55.6740, 12.5830],
    ],
  },
  {
    id: "indre-by",
    name: "Indre By",
    description: "Centralaste Köpenhamn med bl.a. Ströget och Rådhusplatsen. Många secondhandbutiker nordöst om Rådhusplatsen.",
    color: "hsl(220, 65%, 55%)",
    polygon: [
      [55.6840, 12.5630],
      [55.6870, 12.5750],
      [55.6850, 12.5900],
      [55.6810, 12.5920],
      [55.6780, 12.5870],
      [55.6740, 12.5830],
      [55.6730, 12.5750],
      [55.6740, 12.5650],
      [55.6770, 12.5600],
      [55.6810, 12.5590],
    ],
  },
  {
    id: "norrebro",
    name: "Nørrebro",
    description: "Norr om sjöarna. Hipt område med många bra barer och en hel del secondhandbutiker.",
    color: "hsl(340, 65%, 55%)",
    polygon: [
      [55.6840, 12.5440],
      [55.6840, 12.5630],
      [55.6870, 12.5650],
      [55.6920, 12.5650],
      [55.6960, 12.5580],
      [55.6960, 12.5440],
      [55.6920, 12.5380],
      [55.6870, 12.5380],
    ],
  },
  {
    id: "vesterbro",
    name: "Vesterbro",
    description: "Västerut från centrala Köpenhamn. Kødbyen vimlar av restauranger och barer/klubbar. Gott om lugnare uteserveringar.",
    color: "hsl(35, 70%, 50%)",
    polygon: [
      [55.6770, 12.5600],
      [55.6740, 12.5650],
      [55.6730, 12.5750],
      [55.6700, 12.5720],
      [55.6620, 12.5620],
      [55.6610, 12.5430],
      [55.6650, 12.5350],
      [55.6710, 12.5350],
      [55.6770, 12.5440],
    ],
  },
  {
    id: "nordhavn",
    name: "Nordhavn",
    description: "Nordvästra Köpenhamn. Man kan ta tunnelbana hit.",
    color: "hsl(260, 55%, 55%)",
    polygon: [
      [55.7020, 12.5850],
      [55.7020, 12.6050],
      [55.7100, 12.6100],
      [55.7140, 12.6000],
      [55.7140, 12.5850],
      [55.7080, 12.5800],
    ],
  },
  {
    id: "osterbro",
    name: "Østerbro",
    description: "Residential neighbourhood northeast of the city centre. Parks, the lakes, and a relaxed vibe.",
    color: "hsl(140, 50%, 45%)",
    polygon: [
      [55.6870, 12.5650],
      [55.6920, 12.5650],
      [55.6960, 12.5700],
      [55.6980, 12.5850],
      [55.7020, 12.5850],
      [55.7020, 12.6050],
      [55.6950, 12.6050],
      [55.6900, 12.5950],
      [55.6850, 12.5900],
    ],
  },
  {
    id: "christiania",
    name: "Christiania",
    description: "The famous freetown — a self-governing community within Christianshavn. Unique architecture, art, and green spaces.",
    color: "hsl(90, 55%, 45%)",
    labelOffset: [-0.003, 0.005],
    polygon: [
      [55.6735, 12.5950],
      [55.6755, 12.5965],
      [55.6760, 12.6020],
      [55.6745, 12.6060],
      [55.6715, 12.6050],
      [55.6705, 12.5990],
      [55.6715, 12.5955],
    ],
  },
];
