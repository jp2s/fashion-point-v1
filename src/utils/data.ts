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

const piece3: Accessory = {
  label: "Linea Uomo H. Windsor",
  acquiredFrom: "Think Twice Bonn",
  chromatics: [colors.saddlebrown],
  details: ["for suits", "classy", "thin laces"],
    price: 15,
  category: "Shoes",
  kind: "Accessory",
}

export const data: Array<Piece> = [
  piece1, 
  piece2,
  piece3,
]
