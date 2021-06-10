import { useContext, useCallback } from 'react'
import { ModalContext } from '../context/ModalContext'
import WalletModal from 'components/WalletModal/WalletModal'

export default function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a provider')
  }

  return context
}

export function useWalletModal() {
  const { showModal } = useModal()
  const showWalletModal = useCallback(() => showModal(<WalletModal />), [showModal])

  return {
    showWalletModal,
  }
}
