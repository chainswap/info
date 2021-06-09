import React from 'react'
import ClaimListItem, { Props as ClaimListItemProps } from './ClaimListItem'

interface ClaimListProps {
  dataItems: ClaimListItemProps[]
}

export default function ClaimList(props: ClaimListProps) {
  return (
    <>
      {props.dataItems.map((item, i) => (
        <ClaimListItem key={i} {...item} />
      ))}
    </>
  )
}
