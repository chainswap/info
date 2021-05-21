import React from 'react'
import { Box } from '@material-ui/core'

import Modal from '../Modal/Modal'
import SuccessIcon from '../../assets/images/success_icon.svg'
import FailureIcon from '../../assets/images/failure_icon.svg'
import Image from '../Image/Image'
import OutlineButton from '../../components/Button/OutlineButton'

interface Props {
  type: 'success' | 'failure'
  isOpen: boolean
  onDismiss: () => void
  message: string
  children?: React.ReactNode
}

export default function MessageBox(props: Props) {
  const { type, isOpen, onDismiss, message, children } = props
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Box textAlign="center">
        <Box padding="32px 0 16px">
          {type === 'success' ? (
            <Image src={SuccessIcon} alt={'success icon'} size={'32px'} />
          ) : (
            <Image src={FailureIcon} alt={'failure icon'} size={'32px'} />
          )}
        </Box>
        <Box fontWeight="400" fontSize="18px" color="#FFFFFF" marginBottom="32px">
          {message}
        </Box>
        {children}

        <Box margin="32px auto 28px">
          <OutlineButton width="180px" primary onClick={onDismiss}>
            Close
          </OutlineButton>
        </Box>
      </Box>
    </Modal>
  )
}
