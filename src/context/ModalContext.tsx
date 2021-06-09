import React, { useState } from 'react'

interface ModalContextType {
  isOpen: boolean
  showModal: (component: React.ReactNode) => void
  hideModal: () => void
}

export const ModalContext = React.createContext<ModalContextType>({
  isOpen: false,
  showModal: () => {},
  hideModal: () => {},
})

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<React.ReactNode>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const hideModal = () => {
    setModal(false)
    setIsOpen(false)
  }

  const showModal = (modal: React.ReactNode) => {
    setModal(modal)
    setIsOpen(true)
  }

  return (
    <ModalContext.Provider value={{ isOpen, hideModal, showModal }}>
      {children}
      {modal}
    </ModalContext.Provider>
  )
}
