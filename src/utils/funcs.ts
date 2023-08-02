const cx = (classNames: Array<string>) => classNames.join(" ")

export const applyStylish = (stylish: Record<string, Array<string>>): Record<string, string> => {
  const result: Record<string, string> = {}

  Object.keys(stylish).forEach(key => {
    result[key] = cx(stylish[key])
  })

  return result
}
