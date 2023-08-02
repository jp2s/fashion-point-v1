import React from 'react'

interface Props {
  label: string
  content: any
}

export const ConsoleButton = ({label, content}: Props) => 
  <div onClick={() => console.log(content)}>{label}</div>

