import React from 'react'
import { Box, useTheme, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { TYPE } from '../../theme/index'

interface Props {
  percentage: number
  quota: number
  currency: string
}

const useStyles = makeStyles({
  progress: {
    width: '100%',
    height: '8px',
    background: 'rgba(255, 255, 255, .2)',
  },
})

export default function QuotaInfo(props: Props) {
  const { percentage, quota, currency } = props
  const theme = useTheme()
  const classes = useStyles()

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
      <LinearProgress className={classes.progress} variant="determinate" value={percentage} />
    </>
  )
}
