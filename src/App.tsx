import { Piece } from './utils/types'
import { PieceCardGrid } from './ui/PieceCard'
import { Header } from './ui/Header'
import { applyStylish } from "./utils/funcs"
import { data as items} from './utils/data'

const data: Array<Piece> = [...items, ...items, ...items]

const stylish = applyStylish({
  wrapper: ["container", "centerCenter", "column", "l0Container"],
})

export const App = () => {
  return (
    <div className={stylish.wrapper}>
      <Header />

      <PieceCardGrid items={data} />
    </div>
  )
}
