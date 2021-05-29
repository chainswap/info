import React from 'react'
import { Tabs, Tab, Theme } from '@material-ui/core'
import { makeStyles, withStyles, createStyles } from '@material-ui/styles'

interface Props {
  labelOptions: string[]
  value: number
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void
}

const useStyles = makeStyles({
  root: {
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .MuiTabs-scroller': {
      boxSizing: 'border-box',
      width: '416px',
    },
    '& .MuiTabs-flexContainer': {
      backgroundColor: '#000000',
      border: '1px solid #FFFFFF',
      borderRadius: '14px',
      boxSizing: 'border-box',
    },
  },
})

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      boxSizing: 'border-box',
      width: '50%',
      height: '100%',

      '& MuiTab-wrapper': {
        opacity: 0.6,
      },
    },
    selected: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '14px',
      boxShadow: '0px 0px 0px 1px #FFFFFF',
      boxSizing: 'border-box',
    },
  })
)(Tab)

export default function TabToggle(props: Props) {
  const classes = useStyles(props)
  const { labelOptions, onChange, value } = props

  return (
    <Tabs className={classes.root} value={value} onChange={onChange}>
      {labelOptions.map((label) => (
        <StyledTab label={label} disableRipple />
      ))}
    </Tabs>
  )
}
