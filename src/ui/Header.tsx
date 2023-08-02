import { applyStylish } from "../utils/funcs"

const stylish = applyStylish({
  main: ["header1", "headline"]
})

export const Header = () => <div className={stylish.main}>Fashion Point</div>
