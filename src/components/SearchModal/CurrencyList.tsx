import React from 'react'
import { FixedSizeList } from 'react-window'

const Row = ({ index, style }: any) => <div>Row {index}</div>

export default function CurrencyList() {
  return (
    <FixedSizeList height={150} width="100%" itemCount={10} itemSize={50}>
      {Row}
    </FixedSizeList>
  )
}
