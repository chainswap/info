import React, { useState } from 'react'

interface ModalContextType {
  component: React.ReactNode | null
  isOpen: boolean
  showModal: (component: React.ReactNode) => void
  hideModal: () => void
}

interface ModalState {
  component: React.ReactNode | null
  isOpen: boolean
}

export const ModalContext = React.createContext<ModalContextType>({
  component: null,
  isOpen: false,
  showModal: () => {},
  hideModal: () => {},
})

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState>({
    component: null,
    isOpen: false,
  })

  const hideModal = () => {
    setModalState({
      component: null,
      isOpen: false,
    })
  }

  const showModal = (component: React.ReactNode) => {
    setModalState({
      component,
      isOpen: true,
    })
  }

  return (
    <ModalContext.Provider value={{ ...modalState, hideModal, showModal }}>
      {children}
      {modalState.component}
    </ModalContext.Provider>
  )
}
