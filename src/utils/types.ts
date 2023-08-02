export interface BasePiece {
  label: string
  acquiredFrom: string
  colors: Array<string>
  details: Array<string>
  price?: number
  acquiredAt?: Date
  category: ClothingCategory | AccessoryCategory
}

export type Clothing = BasePiece & {
  kind: "Clothing"
  laundry: Laundry
}

export type Accessory = BasePiece & {
  kind: "Accessory"
}

export type Piece = Clothing | Accessory

export type ClothingCategory =
  | "Socks"
  | "Pants"
  | "Shirt"
  | "Tee"
  | "Jacket"
  | "Sweater"

export type AccessoryCategory =
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
