import { ChromaticsShowcase } from "./ChromaticsShowcase"
import { Piece } from '../utils/types'
import { applyStylish } from '../utils/funcs'
import { DetailsShowcase } from "./DetailsShowcase"
 
interface PropertyProps {
  name: string, 
  value: string
}
interface PieceCardProps {
  piece: Piece
  mapKey?: string,
}
interface PieceCardGridProps {
  items: Array<Piece>
}

const stylish = applyStylish({
  propertyContainer: ["container", "row", "l3Container", "betweenCenter", "fullWidth"],
  pieceCardWrapper: ["card", "container", "column", "l2Container", "betweenCenter", "fullWidth", "grid"],
  propertyValue: ["regular", "endText"],
  pieceCardContainer: ["container", "column", "l2Container", "startCenter", "fullWidth", "grid"],
  pieceCardGrid: ["container", "row", "l0Container", "wrap"]
})

const Property = ({name, value}: PropertyProps) => 
  <div className={stylish.propertyContainer}>
    <div>{name}:</div>

    <div className={stylish.propertyValue}>{value}</div>
  </div>

const PieceCard = ({ piece, mapKey}: PieceCardProps) => {
  const {
    label,
    acquiredFrom,
    chromatics,
    details,
    price,
    acquiredAt,
    category,
    kind,
  } = piece

  return (
    <div className={stylish.pieceCardWrapper} key={mapKey}>
      <div className={stylish.pieceCardContainer}>
        <ChromaticsShowcase chromatics={chromatics} />

        <Property name="Label" value={label} />
      
        <Property name="Acquired from" value={acquiredFrom} />
      
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
      
      <div>
        <DetailsShowcase details={details} />
      </div>
    </div>
  )
}

export const PieceCardGrid = ({items}: PieceCardGridProps) => 
  <div className={stylish.pieceCardGrid}>
    {items.map((item: Piece, index: number) => 
      <PieceCard 
        mapKey={`${item.label}-${item.category}-${item.acquiredFrom}-${index}`} 
        piece={item} 
      />
    )}
  </div>
