import { RGB as Color } from 'color-name'

import { applyStylish, stylishChromatic } from '../utils/funcs'

interface Props {
  chromatics: Array<Color>
}

const stylish = applyStylish({
   container: ["container", "row", "l3Container", "centerCenter"],
   item: ["chromatic"], 
})

export const ChromaticsShowcase = ({chromatics}: Props) => 
    <div className={stylish.container}>
      {chromatics.map((chromatic: Color) => <div className={stylish.item} style={{background: stylishChromatic(chromatic)}}></div>)}
    </div>
