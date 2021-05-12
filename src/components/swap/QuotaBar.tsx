import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

interface Props {
  percentage: number
}

const useStyles = makeStyles({
  border: {
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderRadius: 5,
  },
  value: {
    height: '4px',
    width: (props: Props) => `${props.percentage}%`,
    backgroundColor: '#9867FF',
  },
})

export default function QuotaBar(props: Props) {
  const classes = useStyles(props)

  return (
    <Box className={classes.border}>
      <Box className={classes.value} />
    </Box>
  )
}
