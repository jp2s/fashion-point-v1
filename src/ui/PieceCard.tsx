import { ChromaticsShowcase } from "./ChromaticShowcase"
import { Piece } from '../utils/types'
import { applyStylish } from '../utils/funcs'
 
interface PropertyProps {
  name: string, 
  value: string
}
interface PieceCardProps {
  piece: Piece
}
interface PieceCardGridProps {
  items: Array<Piece>
}

const stylish = applyStylish({
  propertyContainer: ["container", "row", "l3Container", "betweenCenter", "fullWidth"],
  propertyValue: ["regular", "endText"],
  pieceCardContainer: ["card", "container", "column", "l2Container", "startCenter", "fullWidth", "grid"],
  pieceCardGrid: ["container", "row", "l0Container", "wrap"]
})

const Property = ({name, value}: PropertyProps) => 
  <div className={stylish.propertyContainer}>
    <div>{name}:</div>

    <div className={stylish.propertyValue}>{value}</div>
  </div>

const PieceCard = ({ piece }: PieceCardProps) => {
  const {
    label,
    acquiredFrom,
    chromatics,
    price,
    acquiredAt,
    category,
    kind
  } = piece

  return (
    <div className={stylish.pieceCardContainer}>
      <ChromaticsShowcase chromatics={chromatics} />

      <Property name="Label" value={label} />
      
      <Property name="Acquired from" value={acquiredFrom} />

      {/* add component for details */}
      
      {price && (
        <Property name="Price" value={`${price.toString()}€`} />
      )}

      {acquiredAt && (
        <Property name="Acquired at" value={acquiredAt.toDateString()} />
      )}

      {piece.kind === "Clothing" && (
        <Property name="Laundry" value={piece.laundry} />
      )}
      
      <Property name="Kind" value={kind} />
      
      <Property name="Category" value={category} />
    </div>
  )
}

export const PieceCardGrid = ({items}: PieceCardGridProps) => 
  <div className={stylish.pieceCardGrid}>
    {items.map((item: Piece) => <PieceCard piece={item} />)}
  </div>
