import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import SuccessIcon from '../../assets/images/success_icon.svg'
import FailureIcon from '../../assets/images/failure_icon.svg'
import SupportIcon from '../../assets/images/support_icon.svg'
import NetworkErrorIcon from '../../assets/images/network_error_icon.svg'
import Image from '../Image/Image'
import OutlineButton from '../../components/Button/OutlineButton'
import Button from '../../components/Button/Button'
import { Text } from 'rebass'
import useModal from '../../hooks/useModal'

interface Props {
  type: 'success' | 'failure' | 'support' | 'network'
  message: string
  children?: React.ReactNode
}

export default function MessageBox(props: Props) {
  const { type, message, children } = props
  const { hideModal } = useModal()

  const icon =
    type === 'success'
      ? SuccessIcon
      : type === 'failure'
      ? FailureIcon
      : type === 'support'
      ? SupportIcon
      : NetworkErrorIcon

  return (
    <Modal>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box padding="32px 0 16px">
          <Image src={icon} alt={`${type} icon`} style={{ height: 32, width: 32 }} />
        </Box>
        <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
          <Text fontWeight="400" fontSize="18px" color="#FFFFFF">
            {message}
          </Text>
        </Box>
        {children}

        <Box margin="0 auto 28px" display={'flex'} justifyContent={'center'}>
          <OutlineButton width="180px" primary onClick={hideModal}>
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
