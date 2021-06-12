import React from 'react'
import MessageBox from './MessageBox'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'
import Button from '../Button/Button'

interface Props {
  type: 'success' | 'failure'
  children: React.ReactNode
  header: string
  actionText: string
  action: () => void
  message: string
}

export default function DetailedMessagebox(props: Props) {
  const { children, type, header, action, actionText, message } = props

  return (
    <MessageBox type={type} width={'552px'}>
      <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
        <TYPE.extraLarge marginBottom={'4px'}>{header}</TYPE.extraLarge>
        <TYPE.gray>{message}</TYPE.gray>
      </Box>
      {children}
      <Box width={'100%'} padding={'0 32px 0 32px'}>
        <Button onClick={action}>{actionText}</Button>
      </Box>
    </MessageBox>
  )
}
