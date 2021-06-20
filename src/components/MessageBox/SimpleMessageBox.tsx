import React from 'react'
import MessageBox from './MessageBox'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'
import Button from '../Button/Button'
import useModal from '../../hooks/useModal'

interface Props {
  children?: React.ReactNode
  type: 'success' | 'failure' | 'support' | 'network'
  header: string
  action?: () => void
  actionText?: string
  message?: string
}
export default function SimpleMessageBox(props: Props) {
  const { header, action, actionText, type, children } = props
  const { hideModal } = useModal()

  return (
    <MessageBox type="success" width="440px">
      <TYPE.mediumHeader textAlign={'center'}>{header}</TYPE.mediumHeader>
      {children}
      <Box display="flex" justifyContent="space-around" width="100%">
        <Button onClick={hideModal}>Close</Button>
        {type === 'failure' && actionText && <Button onClick={action}>{actionText}</Button>}
      </Box>
    </MessageBox>
  )
}
