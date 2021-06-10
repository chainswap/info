import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import { ReactComponent as SuccessIcon } from '../../assets/images/success_icon.svg'
import { ReactComponent as FailureIcon } from '../../assets/images/failure_icon.svg'
import { ReactComponent as SupportIcon } from '../../assets/images/support_icon.svg'
import { ReactComponent as NetworkErrorIcon } from '../../assets/images/network_error_icon.svg'
import OutlineButton from '../../components/Button/OutlineButton'
import Button from '../../components/Button/Button'
import { Text } from 'rebass'
import useModal from '../../hooks/useModal'

interface Props {
  type: 'success' | 'failure' | 'support' | 'network'
  children?: React.ReactNode
}

export default function MessageBox(props: Props) {
  const { type, children } = props

  const icon =
    type === 'success' ? (
      <SuccessIcon />
    ) : type === 'failure' ? (
      <FailureIcon />
    ) : type === 'support' ? (
      <SupportIcon />
    ) : (
      <NetworkErrorIcon />
    )

  return (
    <Modal>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box padding="32px 0 16px">{icon}</Box>
        {children}
      </Box>
    </Modal>
  )
}
