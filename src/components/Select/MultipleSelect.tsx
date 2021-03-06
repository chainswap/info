import React from 'react'
import { Select as MuiSelect, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface Props {
  children?: React.ReactNode
  onChange?: (e: any) => void
  defaultValue?: any
  value?: string
  disabled?: boolean
  size?: 'large' | 'small'
  selected?: boolean
  placeholder?: string
  width?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: (props: Props) => (props.size === 'small' ? 32 : 46),
    borderRadius: (props: Props) => (props.size === 'small' ? 4 : 14),
    paddingLeft: (props: Props) => (props.size === 'small' ? 8 : 24),
    cursor: (props: Props) => (props.disabled ? 'cursor' : 'pointer'),
    boxSizing: 'border-box',
    backgroundColor: '#1f1f1f',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      backgroundColor: '#1f1f1f',
      borderRadius: (props: Props) => (props.size === 'small' ? 4 : 14),
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '&:before': {
        color: theme.textColor.text1,
      },
    },
    '&::before': {
      content: ({ value, defaultValue, placeholder }: Props) =>
        !value && !defaultValue && placeholder ? '"' + placeholder + '"' : '""',
      position: 'absolute',
      left: 24,
      top: 14,
      zIndex: 2,
      color: theme.textColor.text3,
    },
  },
  icon: {
    right: (props: Props) => (props.size === 'small' ? 6.51 : 15),
    color: '#FFFFFF',
    display: (props: Props) => (props.disabled ? 'none' : 'block'),
    opacity: (props: Props) => (props.size === 'small' ? 0.5 : 1),
    fontSize: (props: Props) => (props.size === 'small' ? '12px' : '24px'),
    top: (props: Props) => (props.size === 'small' ? 'calc(50% - 6px)' : 'calc(50% - 12px)'),
  },
  paper: {
    width: (props: Props) => (props.size === 'small' ? 172 : 176),
    borderRadius: 14,
    marginTop: 8,
    overflow: 'hide',
    '& ul': {
      background: '#0F0F10',
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
      // padding: 14,
      padding: '12px 0',
      boxSizing: 'border-box',
    },
    '& li:hover': {
      backgroundColor: 'rgba(255,255,255,0.08)',
    },
    '& li:last-child': {
      borderBottom: 'none',
    },
  },
  base: {
    width: (props: Props) => props.width ?? 'inherit',
  },
}))

export default function MultipleSelect(props: Props) {
  const classes = useStyles(props)
  const { onChange, children } = props

  return (
    <>
      <MuiSelect
        className={classes.base}
        displayEmpty
        disableUnderline
        classes={{ root: classes.root, icon: classes.icon }}
        // defaultValue={defaultValue ? defaultValue : placeholder}
        // value={value ? value : ''}
        // disabled={disabled}
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
        onChange={onChange}
        multiple
      >
        {children}
      </MuiSelect>
    </>
  )
}
