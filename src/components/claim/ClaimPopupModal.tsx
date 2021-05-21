import React, { useState, ChangeEvent } from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ApplicationModal } from '../../state/application/actions'
import { useClaimPopupModalToggle, useModalOpen } from '../../state/application/hooks'
import { Box } from '@material-ui/core'

export default function ClaimPopupModal() {
  const claimPopupModalOpen = useModalOpen(ApplicationModal.CLAIM_POPUP)
  const toggleClaimPopupModal = useClaimPopupModalToggle()
  const [hash, setHash] = useState('')
  const label = 'Please Enter the transaction hash'
  const placeHolder = 'Enter the transaction hash'

  const onChangeHash = (e: ChangeEvent<HTMLInputElement>) => {
    const hash = e.currentTarget.value

    setHash(hash)
  }

  return (
    <Modal isOpen={claimPopupModalOpen} onDismiss={toggleClaimPopupModal} label={label}>
      <Box margin={'32px 52px 18px'}>
        <Input placeholder={placeHolder} value={hash} onChange={onChangeHash} />
      </Box>
      <Box margin={'0 52px 31px'}>
        <Button width={'376px'} size={'large'}>
          Import
        </Button>
      </Box>
    </Modal>
  )
}
