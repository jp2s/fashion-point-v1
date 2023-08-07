import color, { RGB as Color } from 'color-name'

import "./stylish.css"
import { applyStylish, stylishChromatic, condCx} from '../../utils/funcs'

interface Props {
  chromatics: Array<Color>
}

const stylish = (chromatic?: Color) => applyStylish({
   container: ["container", "row", "l3Container", "centerCenter"],
   item: ["chromatic", ...condCx(chromatic === color.white, ["whiteChromatic"])], 
})

export const ChromaticsShowcase = ({chromatics}: Props) => 
    <div className={stylish().container}>
      {chromatics.map((chromatic: Color) => <div className={stylish(chromatic).item} style={{background: stylishChromatic(chromatic)}}></div>)}
    </div>
