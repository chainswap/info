import React, { ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Select } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface Props {
  children: React.ReactNode
  defaultValue: any
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const useStyles = makeStyles({
  root: {
    width: 128,
    height: 32,
    borderRadius: 4,
    boxSizing: 'border-box',
    cursor: (props: Props) => (props.disabled ? 'cursor' : 'pointer'),
    // opacity: 0.2,
    border: '1px solid #FFFFFF',
  },
  icon: {
    right: 12,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  paper: {
    borderRadius: 14,
    marginTop: 8,
    overflow: 'hide',
    '& ul': {
      background: '#1f1f1f',
      outline: 'none',
      padding: 0,
    },
    '& li': {
      fontSize: 16,
      fontWeight: 500,
      color: '#FFFFFF',
      border: '1px solid transparent',
      borderBottomColor: 'hsla(0,0%,100%,.12)',
      display: 'flex',
      alignItems: 'center',
      padding: 14,
    },
  },
})

export default function OutlineSelect(props: Props) {
  const classes = useStyles(props)

  return (
    <Select
      disableUnderline
      classes={{ root: classes.root, icon: classes.icon }}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      MenuProps={{
        classes: { paper: classes.paper },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
      IconComponent={ExpandMoreIcon}
      displayEmpty={true}
      renderValue={() => {
        return 'Token: All'
      }}
    >
      {props.children}
    </Select>
  )
}
