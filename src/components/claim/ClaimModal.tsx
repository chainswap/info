import React from 'react'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useClaimModalToggle } from '../../state/application/hooks'
import Modal from '../Modal/Modal'

export default function ClaimModal() {
  const claimModalOpen = useModalOpen(ApplicationModal.CLAIM)
  const toggleClaimModal = useClaimModalToggle()

  return (
    <Modal isOpen={claimModalOpen} onDismiss={toggleClaimModal} label={'Claim List'}>
      Claim List
    </Modal>
  )
}
