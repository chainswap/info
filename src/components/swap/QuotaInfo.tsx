import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

interface Props {
  percentage: number
  quota: number
  currency: string
}

const useStyles = makeStyles({
  label: {
    color: '#FFFFFF',
    opacity: 0.6,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 14,
    marginRight: 12,
  },
  subText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 14,
    opacity: 0.6,
  },
})

export default function QuotaInfo(props: Props) {
  const { percentage, quota, currency } = props
  const classes = useStyles()

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <label className={classes.label}>Your Quota:</label>
        <Box display="flex">
          <Box className={classes.text}>
            {quota} {currency}
          </Box>
          <Box className={classes.subText}>{percentage}% / 100%</Box>
        </Box>
      </Box>
    </>
  )
}
