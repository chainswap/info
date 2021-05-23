import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from '../Image/Image'
import CopyIcon from '../../assets/images/copy_icon.svg'

import useCopyClipboard from '../../hooks/useCopyClipboard'

interface Props {
  toCopy: string
  children?: React.ReactNode
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    cursor: 'pointer',
  },
})

export default function Copy(props: Props) {
  const classes = useStyles(props)
  const [isCopied, setCopied] = useCopyClipboard()
  const { toCopy, children } = props

  return (
    <Box className={classes.root} onClick={() => setCopied(toCopy)}>
      <Image src={CopyIcon} alt={'copy icon'} />
      {children}
    </Box>
  )
}
