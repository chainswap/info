import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, Button } from '@material-ui/core'
import LogoText from '../LogoText/LogoText'
import Image from '../Image/Image'
import ExpandMoreIcon from '../../assets/images/expand_more_icon.svg'

interface Props {
  logo: string
  text: string
  onClick: () => void
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 32,
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 4,
    padding: '0 6.51px 0 8px',
  },
})

export default function SelectButton(props: Props) {
  const classes = useStyles(props)
  const { logo, text, onClick } = props

  return (
    <Button className={classes.root} onClick={onClick}>
      <Box mr={'4px'}>
        <LogoText logo={logo} text={text} size={'small'} />
      </Box>
      <Image src={ExpandMoreIcon} alt={'expand more icon'} />
    </Button>
  )
}
