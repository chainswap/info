import React from 'react'
import { Box } from '@material-ui/core'

import Modal from '../Modal/Modal'
import SuccessIcon from '../../assets/images/success_icon.svg'
import FailureIcon from '../../assets/images/failure_icon.svg'
import SupportIcon from '../../assets/images/support_icon.svg'
import Image from '../Image/Image'
import OutlineButton from '../../components/Button/OutlineButton'
import Button from '../../components/Button/Button'
import { Text } from 'rebass'

interface Props {
  type: 'success' | 'failure' | 'support'
  isOpen: boolean
  onDismiss: () => void
  message: string
  children?: React.ReactNode
}

export default function MessageBox(props: Props) {
  const { type, isOpen, onDismiss, message, children } = props
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box padding="32px 0 16px">
          {type === 'success' ? (
            <Image src={SuccessIcon} alt={'success icon'} style={{ height: 32, width: 32 }} />
          ) : type === 'failure' ? (
            <Image src={FailureIcon} alt={'failure icon'} style={{ height: 32, width: 32 }} />
          ) : (
            <Image src={SupportIcon} alt={'support icon'} style={{ height: 32, width: 32 }} />
          )}
        </Box>
        <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
          <Text fontWeight="400" fontSize="18px" color="#FFFFFF">
            {message}
          </Text>
        </Box>
        {children}

        <Box margin="0 auto 28px" display={'flex'} justifyContent={'center'}>
          <OutlineButton width="180px" primary onClick={onDismiss}>
            Close
          </OutlineButton>
          {type === 'failure' && (
            <>
              <Box width={'16px'} />
              <Button width="180px">Enter Again</Button>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  )
}
