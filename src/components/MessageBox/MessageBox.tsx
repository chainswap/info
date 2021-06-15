import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import { ReactComponent as SuccessIcon } from '../../assets/images/success_icon.svg'
import { ReactComponent as FailureIcon } from '../../assets/images/failure_icon.svg'
import { ReactComponent as SupportIcon } from '../../assets/images/support_icon.svg'
import { ReactComponent as NetworkErrorIcon } from '../../assets/images/network_error_icon.svg'
interface Props {
  type: 'success' | 'failure' | 'support' | 'network'
  children?: React.ReactNode
  width?: string
}

export default function MessageBox(props: Props) {
  const { type, children, width } = props

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
    <Modal width={width}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'32px'}>
        <Box marginBottom="16px">{icon}</Box>
        {children}
      </Box>
    </Modal>
  )
}
