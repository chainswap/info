import React from 'react'
import { Box, useTheme } from '@material-ui/core'
import { TYPE } from '../../theme/index'

interface Props {
  percentage: number
  quota: number
  currency: string
}

export default function QuotaInfo(props: Props) {
  const { percentage, quota, currency } = props
  const theme = useTheme()

  return (
    <>
      <Box display="flex" justifyContent="space-between" margin="20px 40px 16px 40px">
        <TYPE.mediumGray>Your Quota:</TYPE.mediumGray>
        <Box display="flex">
          <TYPE.medium>
            {quota} {currency}
          </TYPE.medium>
          <TYPE.mediumGray marginLeft="16px">{percentage}% / 100%</TYPE.mediumGray>
        </Box>
      </Box>
      <Box bgcolor="rgba(255, 255, 255, .2)">
        <Box bgcolor={theme.palette.primary.main} width={`${percentage}%`} height="8px" />
      </Box>
    </>
  )
}
