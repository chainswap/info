import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { TYPE } from 'theme/index'
import useBreakpoint from 'hooks/useBreakpoint'

interface Props {
  children?: React.ReactNode
  size: 'small' | 'large'
  title: string
  value: string
  unit?: string
}

const useStyles = makeStyles({
  card: {
    borderRadius: 10,
    backgroundColor: 'hsla(0,0%,100%,.08)',
    height: (props: { size: string }) => (props.size === 'small' ? 80 : 100),
    padding: (props: { size: string }) => (props.size === 'small' ? '10px 16px' : 20),
  },
})

export default function InfoCard(props: Props) {
  const classes = useStyles(props)
  const { children, title, value, unit, size } = props
  const { matches } = useBreakpoint()

  return (
    <div className={classes.card}>
      <TYPE.extraSmallGray>{title}</TYPE.extraSmallGray>
      <Box display="flex" alignItems="flex-end">
        {size === 'small' ? (
          <TYPE.largeBold padding="0" marginRight="10px">
            {value}
          </TYPE.largeBold>
        ) : (
          <TYPE.extremeLarge padding="0" marginRight="10px">
            {value}
          </TYPE.extremeLarge>
        )}

        {unit && <TYPE.body>{unit}</TYPE.body>}
      </Box>
      {children}
    </div>
  )
}
