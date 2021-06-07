import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import OutlineButton from '../../components/Button/OutlineButton'

const useStyles = makeStyles({
  root: {
    padding: '52px 32px 41px 32px',
  },
  message: {
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 26,
    textAlign: 'center',
  },
  actions: {
    height: 164,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonText: {
    margin: 0,
  },
  hint: {
    fontSize: 12,
    height: 18,
    fontWeight: 400,
    color: 'white',
    opacity: 0.8,
    margin: 0,
    marginTop: 3,
  },
})

export default function Landing() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <p className={classes.message}>Please select the following options for deployment</p>
      <div className={classes.actions}>
        <OutlineButton height={72} primary>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <p className={classes.buttonText}>Existing Token</p>
            <p className={classes.hint}>You already deployed a token on Ethereum or EMV supportive chians</p>
          </Box>
        </OutlineButton>
        <OutlineButton height={72} primary>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            New Token
            <p className={classes.hint}>You already deployed a token on Ethereum or EMV supportive chians</p>
          </Box>
        </OutlineButton>
      </div>
    </div>
  )
}
