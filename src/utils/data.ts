import colors from 'color-name'

import { Piece, Clothing, Accessory} from './types'

const piece1: Clothing = {
  label: "Rotholz",
  acquiredFrom: "TK Maxx Bonn",
  chromatics: [colors.red],
  details: ["minimalistic", "print"],
  price: 30,
  laundry: "40",
  category: "Sweater",
  kind: "Clothing"
}

const piece2: Accessory = {
  label: "Nike Air Force",
  acquiredFrom: "Rheinaue Flohmarkt",
  chromatics: [colors.black, colors.yellow],
  details: ["high", "black laces"],
  price: 8,
  category: "Shoes",
  kind: "Accessory"
}

const piece3: Clothing = {
  label: "unknown",
  acquiredFrom: "Think Twice Bonn",
  chromatics: [colors.purple, colors.darkorchid, colors.darkgreen, colors.lightgreen, colors.gold, colors.silver],
  details: ["long-sleeve", "really fancy", "sparkly details", "unique buttons"],
  laundry: "unknown",
  category: "Shirt",
  kind: "Clothing"
}

const piece4: Clothing = {
  label: "Monsieur FALK",
  acquiredFrom: "Think Twice Bonn",
  chromatics: [colors.peachpuff],
  details: ["long-sleeve", "classy"],
  laundry: "40",
  category: "Shirt",
  kind: "Clothing",
}

const piece5: Clothing = {
  label: "Super Massive",
  acquiredFrom: "TK Maxx Bonn",
  chromatics: [colors.white, colors.black, colors.turquoise, colors.pink, colors.orange],
  details: ["short-sleeve", "fancy", "80s"],
  price: 30,
  laundry: "unknown",
  category: "Shirt",
  kind: "Clothing",
}

const piece6: Clothing = {
  label: "Super Massive",
  acquiredFrom: "TK Maxx Bonn",
  chromatics: [colors.black, colors.yellow, colors.hotpink, colors.lightblue],
  details: ["short-sleeve", "really fancy", "80s"],
  price: 30,
  laundry: "unknown",
  category: "Shirt",
  kind: "Clothing",
}

const piece7: Accessory = {
  label: "Linea Uomo H. Windsor",
  acquiredFrom: "Think Twice Bonn",
  chromatics: [colors.saddlebrown],
  details: ["for suits", "classy", "thin laces"],
  price: 15,
  acquiredAt: new Date("August 3, 2023"),
  category: "Shoes",
  kind: "Accessory",
}

const piece8: Clothing = {
  label: "Tommy Hilfiger",
  acquiredFrom: "Flohmarkt Hamburg Sternschanze",
  chromatics: [colors.midnightblue, colors.skyblue, colors.firebrick, colors.white],
  details: ["long-sleeve", "cozy", "casual", "simple"],
  price: 6,
  acquiredAt: new Date("August 5, 2023"),
  category: "Shirt",
  kind: "Clothing",
  laundry: "40",
}

export const data: Array<Piece> = [
  piece1, 
  piece2,
  piece3,
  piece4,
  piece5,
  piece6,
  piece7,
  piece8,
]
