import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Select } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface Props {
  children: React.ReactNode
  // onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  defaultValue: any
  disabled?: boolean
}

const useStyles = makeStyles({
  root: {
    width: 176,
    height: 46,
    borderRadius: 14,
    boxSizing: 'border-box',
    backgroundColor: '#1f1f1f',
    color: '#FFFFFF',
    padding: '14px 20px 14px 20px',
    cursor: (props: Props) => (props.disabled ? 'cursor' : 'pointer'),
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      backgroundColor: '#1f1f1f',
      borderRadius: 14,
    },
  },
  icon: {
    right: 15,
    color: '#FFFFFF',
    display: (props: Props) => (props.disabled ? 'none' : 'block'),
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

export default function _Select(props: Props) {
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
    >
      {props.children}
    </Select>
  )
}
