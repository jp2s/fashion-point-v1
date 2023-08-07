import { PieceCardGrid } from './ui/PieceCardGrid/PieceCardGrid'
import { Header } from './ui/Header/Header'
import { applyStylish } from "./utils/funcs"
import { data } from './utils/data'

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
