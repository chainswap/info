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
  const {
    link = null,
    clickable = true,
    size,
    onClick,
    color,
    header,
    subheader = null,
    icon,
    active = false,
    id,
  } = props
  return (
    <OutlineButton size="large" width="280px" onClick={onClick}>
      <Image src={icon} alt={`wallet icon-${header}`} />
      {header}
    </OutlineButton>
  )
}
