import React from 'react'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'

interface Props {
  percentage: number
  quota: number
  currency: string
}

export default function QuotaInfo(props: Props) {
  const { percentage, quota, currency } = props

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <TYPE.light opacity={'0.6'}>Your Quota:</TYPE.light>
        <Box display="flex">
          <Box marginRight="12px">
            <TYPE.light>
              {quota} {currency}
            </TYPE.light>
          </Box>
          <Box>
            <TYPE.light opacity={'0.6'}>{percentage}% / 100%</TYPE.light>
          </Box>
        </Box>
      </Box>
    </>
  )
}
