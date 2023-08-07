import colors from "color-name"

import "./stylish.css"
import { applyStylish, stylishChromatic } from "../../utils/funcs"

const stylish = applyStylish({
  wrapper: ["wrapper", "container", "column", "startCenter", "relative"],
  headline: ["headline", "ag"],
  subline: ["subline"],
  lick: ["absolute", "miami", "lick"],
})

export const Header = () => 
  <div className={stylish.wrapper}>
    <div className={stylish.headline} style={{color: stylishChromatic(colors.midnightblue)}}>Fashion Point</div>
    
    <div className={stylish.subline}>plaza of managing your</div>
    
    <div className={stylish.lick} style={{color: stylishChromatic(colors.hotpink)}}>gems</div>
  </div>

