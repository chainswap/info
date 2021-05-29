import React, { useState, ChangeEvent } from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ApplicationModal } from '../../state/application/actions'
import { useClaimPopupModalToggle, useModalOpen } from '../../state/application/hooks'
import { Box } from '@material-ui/core'
import MessageBox from '../MessageBox/MessageBox'

export default function ClaimPopupModal() {
  const claimPopupModalOpen = useModalOpen(ApplicationModal.CLAIM_POPUP)
  const toggleClaimPopupModal = useClaimPopupModalToggle()
  const [hash, setHash] = useState('')
  const label = 'Please Enter the transaction hash'
  const placeHolder = 'Enter the transaction hash'

  const [{ showMessageBox, messageType, message }, setMessageState] = useState<{
    showMessageBox: boolean
    messageType: 'success' | 'failure'
    message: string
  }>({
    showMessageBox: false,
    messageType: 'success',
    message: '',
  })

  function onChangeHash(e: ChangeEvent<HTMLInputElement>) {
    const hash = e.currentTarget.value

    setHash(hash)
  }

  function onImport() {
    const type = setMessageState({
      showMessageBox: true,
      messageType: hash ? 'success' : 'failure',
      message: hash ? 'Your claim is added to claim list' : 'Your transaction hash is not detected Please Enter again',
    })
  }

  function onDismissMessageBox() {
    setMessageState({
      showMessageBox: false,
      messageType: 'success',
      message: '',
    })
  }

  return (
    <>
      <Modal isOpen={claimPopupModalOpen} onDismiss={toggleClaimPopupModal} label={label} showIcon>
        <Box margin={'32px 52px 18px'}>
          <Input placeholder={placeHolder} value={hash} onChange={onChangeHash} />
        </Box>
        <Box margin={'0 52px 31px'}>
          <Button width={'376px'} onClick={onImport}>
            Import
          </Button>
        </Box>
      </Modal>
      <MessageBox isOpen={showMessageBox} onDismiss={onDismissMessageBox} type={messageType} message={message} />
    </>
  )
}
