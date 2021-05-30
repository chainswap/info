import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Menu, Button, Box } from '@material-ui/core'
import LogoText from '../LogoText/LogoText'
import Image from '../Image/Image'
import ExpandMoreIcon from '../../assets/images/expand_more_icon.svg'

interface Props {
  children: React.ReactNode
  onChange: (e: any) => void
  defaultValue: any
  value: number | null
  disabled?: boolean
  size?: 'large' | 'small'
  selectedIcon: string
  showSelectedIcon?: boolean
  selectedName: string
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
  // icon: {
  //   right: (props: Props) => (props.size == 'small' ? 6.51 : 15),
  //   color: '#FFFFFF',
  //   display: (props: Props) => (props.disabled ? 'none' : 'block'),
  //   opacity: (props: Props) => (props.size == 'small' ? 0.5 : 1),
  //   fontSize: (props: Props) => (props.size == 'small' ? '12px' : '24px'),
  //   top: (props: Props) => (props.size == 'small' ? 'calc(50% - 6px)' : 'calc(50% - 12px)'),
  // },

  paper: {
    width: (props: Props) => (props.size == 'small' ? 172 : 176),
    borderRadius: 14,
    marginTop: 8,
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
    '& li:last-child': {
      borderBottom: 'none',
    },
    '& li:hover': {
      backgroundColor: 'rgba(255,255,255,0.08)',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    height: 32,
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 4,
    padding: '0 6.51px 0 8px',
  },
})

export default function _Select(props: Props) {
  const classes = useStyles(props)
  const [anchorEl, setAnchorEl] = useState(null)
  const { defaultValue, disabled, onChange, children, value, selectedIcon, selectedName } = props
  const [showMenu, setShowMenu] = useState(false)

  function onClose() {
    setShowMenu(false)
    setAnchorEl(null)
  }

  function openMenu(e: any) {
    setShowMenu(true)
    setAnchorEl(e.currentTarget)
  }

  return (
    <>
      <Button className={classes.button} onClick={openMenu}>
        <Box mr={'4px'}>
          <LogoText logo={selectedIcon} text={selectedName} size={'small'} />
        </Box>
        <Image src={ExpandMoreIcon} alt={'expand more icon'} />
      </Button>
      <Menu
        className={classes.paper}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'left',
        // }}
        open={showMenu}
        onClose={onClose}
      >
        {children}
      </Menu>
    </>
  )
}
