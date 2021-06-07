import React from 'react'
import { Box } from '@material-ui/core'
import { Text } from 'rebass'

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
        <Text fontWeight={400} fontSize={14} opacity={0.6}>
          Your Quota:
        </Text>
        <Box display="flex">
          <Box marginRight="12px">
            <Text fontWeight={400} fontSize={14} opacity={0.6}>
              {quota} {currency}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={400} fontSize={14} opacity={0.6}>
              {percentage}% / 100%
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}
