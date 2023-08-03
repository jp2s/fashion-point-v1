import { applyStylish } from "../utils/funcs"

interface Props {
  details: Array<string>
}

const stylish = applyStylish({
   container: ["container", "row", "l3Container", "centerCenter", "wrap"],
   item: ["chip", "centerText"], 
})

export const DetailsShowcase = ({details}: Props) => 
  <div className={stylish.container}>
    {details.map(detail => <div className={stylish.item}>{detail}</div>)}
  </div>
