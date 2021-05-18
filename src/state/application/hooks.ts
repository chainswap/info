import { useCallback } from 'react'
import { ApplicationModal, setOpenModal } from './actions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useSelector((state: AppState) => state.application.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal)
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET)
}

export function useClaimModalToggle(): () => void {
  return useToggleModal(ApplicationModal.CLAIM)
}
