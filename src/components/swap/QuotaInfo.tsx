import React from 'react'
import { styled } from '@material-ui/styles'
import { RowBetween, RowFixed } from '../Row/index'
import { makeStyles } from '@material-ui/core'

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
      <RowBetween>
        <label className={classes.label}>Your Quota:</label>
        <RowFixed>
          <div className={classes.text}>
            {quota} {currency}
          </div>
          <div className={classes.subText}>{percentage}% / 100%</div>
        </RowFixed>
      </RowBetween>
    </>
  )
}
