import React from 'react'
import { Box, Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
interface Props {
  percentage: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    border: {
      backgroundColor: 'rgba(255, 255, 255, .4)',
      borderRadius: 5,
    },
    value: {
      height: '4px',
      width: (props: Props) => `${props.percentage}%`,
      backgroundColor: theme.palette.primary.main,
    },
  })
)

export default function QuotaBar(props: Props) {
  const classes = useStyles(props)

  return (
    <Box className={classes.border}>
      <Box className={classes.value} />
    </Box>
  )
}
