import { Header } from './ui/Header/Header'
import { applyStylish } from "./utils/funcs"

const stylish = applyStylish({
  wrapper: ["container", "centerCenter", "column", "l0Container"],
})

export const App = () => {
  return (
    <div className={stylish.wrapper}>
      <Header />
    </div>
  )
}
