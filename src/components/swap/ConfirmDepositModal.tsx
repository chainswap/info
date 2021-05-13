import React from 'react'
import Modal from '../Modal/Modal'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children?: React.ReactNode
  label?: string
}

export default function ConfirmDepositModal(props: Props) {
  const { isOpen, onDismiss } = props
  return <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Confirm Deposit'} />
}
