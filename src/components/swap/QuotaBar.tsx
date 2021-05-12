import React from 'react'
import { styled } from '@material-ui/styles'

interface Props {
  percentage: number
}

const Border = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, .4)',
  borderRadius: 5,
})

export default function QuotaBar(props: Props) {
  return (
    <Border>
      <div style={{ height: '4px', width: `${props.percentage}%`, backgroundColor: '#9867FF' }}></div>
    </Border>
  )
}
