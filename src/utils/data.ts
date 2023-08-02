import { Piece, Clothing, Accessory} from './types'

const piece1: Clothing = {
  label: "Rotholz",
  acquiredFrom: "TK Maxx",
  colors: ["lightred"],
  details: ["minimalistic", "print"],
  price: 30,
  laundry: "40",
  category: "Sweater",
  kind: "Clothing"
}

const piece2: Accessory = {
  label: "Nike Air Force",
  acquiredFrom: "Rheinaue Flohmarkt",
  colors: ["black", "yellow"],
  details: ["high"],
  price: 8,
  category: "Shoes",
  kind: "Accessory"
}

export const data: Array<Piece> = [
  piece1, piece2
]
