import React from 'react'
import OutlineButton from '../Button/OutlineButton'
import Image from '../Image/Image'

interface Props {
  link?: string | null
  clickable?: boolean
  size?: number | null
  onClick?: () => void
  color: string
  header: React.ReactNode
  subheader: React.ReactNode | null
  icon: string
  active?: boolean
  id: string
}

export default function Option(props: Props) {
  const { onClick, header, icon } = props
  return (
    <OutlineButton width="320px" onClick={onClick}>
      <Image src={icon} alt={`wallet icon-${header}`} style={{ marginRight: 16 }} />
      {header}
    </OutlineButton>
  )
}
