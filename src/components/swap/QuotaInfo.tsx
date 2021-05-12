import React from 'react'
import { styled } from '@material-ui/styles'
import { RowBetween } from '../Row/index'

interface Props {
  percentage: number
  quota: number
  currency: string
}

const QuotaLabel = styled('label')({
  color: '#FFFFFF',
  opacity: 0.6,
  fontSize: 14,
  fontFamily: 'Roboto',
})

const QuotaData = styled('div')({
  display: 'flex',
  color: '#FFFFFF',
  fontWeight: 400,
  '& .percentage': {
    opacity: 0.4,
    marginLeft: 12,
  },
})

export default function QuotaInfo(props: Props) {
  const { percentage, quota, currency } = props

  return (
    <>
      <RowBetween>
        <QuotaLabel>Your Quota</QuotaLabel>
        <QuotaData>
          <div>
            {quota} {currency}
          </div>
          <div className="percentage">{percentage}% / 100%</div>
        </QuotaData>
      </RowBetween>
    </>
  )
}
