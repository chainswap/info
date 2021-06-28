import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, InputBase } from '@material-ui/core'
import Image from '../Image/Image'
import PreviousIcon from '../../assets/images/previous_icon.svg'
import NextIcon from '../../assets/images/next_icon.svg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItem: 'center',
  },
  button: {
    width: '30px',
    height: '30px',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 252, 252, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  input: {
    width: '30px',
    height: '30px',
    border: '1px solid rgba(255, 255,255, 0.6)',
    color: '#FFFFFF',
    borderRadius: '4px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    margin: '0 10px',
    '& input': {
      textAlign: 'center',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 400,
    opacity: 0.6,
  },
})

function PreviousButton() {
  const classes = useStyles()

  return (
    <Box className={classes.button}>
      <Image src={PreviousIcon} alt={'previous icon'} />
    </Box>
  )
}

function NextButton() {
  const classes = useStyles()

  return (
    <Box className={classes.button}>
      <Image src={NextIcon} alt={'next icon'} />
    </Box>
  )
}

export default function Pager({ current, total }: { current: number; total: number }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <PreviousButton />
      <InputBase className={classes.input} defaultValue={1} value={current} />
      <NextButton />
      <Box component="span" className={classes.span}>
        of {total}
      </Box>
    </div>
  )
}
