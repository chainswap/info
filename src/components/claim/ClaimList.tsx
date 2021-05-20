import React from 'react'
import ClaimListItem, { Props as ClaimListItemProps } from './ClaimListItem'

interface ClaimListProps {
  dataItems: ClaimListItemProps[]
}

export default function ClaimList(props: ClaimListProps) {
  return (
    <>
      {props.dataItems.map((item) => (
        <ClaimListItem
          from={item.from}
          to={item.to}
          currency={item.currency}
          address={item.address}
          amount={item.amount}
        />
      ))}
    </>
  )
}
