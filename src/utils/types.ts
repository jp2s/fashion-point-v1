import { RGB as Color } from "color-name"

export interface Piece {
  label: string
  acquiredFrom: string
  chromatics: Array<Color>
  details: Array<string>
  price?: number
  acquiredAt?: Date
  laundry?: Laundry
  category: Category
}

export type Category =
  | "Socks"
  | "Pants"
  | "Shirt"
  | "Tee"
  | "Jacket"
  | "Sweater"
  | "Tie"
  | "Hat"
  | "Belt"
  | "Shoes"
  | "Jewelry"

  export type Laundry =
  | "60"
  | "40"
  | "30"
  | "Wool"
  | "unknown"
