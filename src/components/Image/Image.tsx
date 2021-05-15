import React from 'react'

interface Props {
  src: string
  alt: string
  size?: string
  style?: React.CSSProperties
}

export default function Image(props: Props) {
  const { src, alt, size } = props

  return <img src={src} alt={alt} width={size} height={size} />
}
