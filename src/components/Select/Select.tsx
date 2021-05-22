import React, { ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Select } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface Props {
  children: React.ReactNode
  onChange: (e: any) => void
  defaultValue: any
  disabled?: boolean
  size?: 'large' | 'small'
}

const useStyles = makeStyles({
  root: {
    width: (props: Props) => (props.size == 'small' ? 80 : 176),
    height: (props: Props) => (props.size == 'small' ? 32 : 46),
    borderRadius: (props: Props) => (props.size == 'small' ? 4 : 14),
    boxSizing: 'border-box',
    backgroundColor: '#1f1f1f',
    color: '#FFFFFF',
    cursor: (props: Props) => (props.disabled ? 'cursor' : 'pointer'),
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      backgroundColor: '#1f1f1f',
      borderRadius: (props: Props) => (props.size == 'small' ? 4 : 14),
    },
  },
  icon: {
    right: (props: Props) => (props.size == 'small' ? 6.51 : 15),
    color: '#FFFFFF',
    display: (props: Props) => (props.disabled ? 'none' : 'block'),
    opacity: (props: Props) => (props.size == 'small' ? 0.5 : 1),
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
      classes={{ ...classes }}
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
      onChange={props.onChange}
    >
      {props.children}
    </Select>
  )
}
