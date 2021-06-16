import React from 'react'
import { Select as MuiSelect, makeStyles, createStyles, Theme } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import { TYPE } from 'theme'

interface Props {
  children?: React.ReactNode
  onChange?: (e: any) => void
  defaultValue?: any
  value?: string | string[]
  disabled?: boolean
  size?: 'large' | 'small'
  selected?: boolean
  placeholder?: string
  width?: string
  multiple?: boolean
  renderValue?: any
  primary?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => (props.width ? props.width : '100%'),
      height: (props: Props) => (props.size === 'small' ? 32 : 48),
      borderRadius: theme.shape.borderRadius,
      paddingLeft: (props: Props) => (props.size === 'small' ? 8 : 24),
      cursor: (props: Props) => (props.disabled ? 'cursor' : 'pointer'),
      boxSizing: 'border-box',
      backgroundColor: (props: Props) => (props.primary ? theme.palette.primary.main : theme.gray.main),
      color: theme.palette.primary.contrastText,
      display: 'flex',
      alignItems: 'center',
      '&:focus': {
        backgroundColor: '#1f1f1f',
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
        color: (props: Props) => (props.primary ? theme.palette.primary.contrastText : theme.textColor.text3),
        fontSize: 16,
        fontWeight: 400,
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
  })
)

export default function Select(props: Props) {
  const classes = useStyles(props)
  const { value, defaultValue, disabled, onChange, children, placeholder = '', multiple, renderValue } = props

  return (
    <MuiSelect
      className={classes.base}
      displayEmpty
      disableUnderline
      classes={{ root: classes.root, icon: classes.icon }}
      defaultValue={defaultValue ? defaultValue : placeholder}
      value={value ? value : ''}
      disabled={disabled}
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
      multiple={multiple}
      renderValue={renderValue}
    >
      {children}
    </MuiSelect>
  )
}
