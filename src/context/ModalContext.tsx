import React, { useState, FC } from 'react'

interface ShowModalType {
  component: React.ElementType
  modalProps: Object
}

interface ModalContextType {
  component: React.ElementType | null
  modalProps: Object
  isOpen: boolean
  showModal: ({ component, modalProps }: ShowModalType) => void
  hideModal: () => void
}

interface ModalState {
  component: React.ElementType | null
  modalProps: Object
  isOpen: boolean
}

export const ModalContext = React.createContext<ModalContextType>({
  component: null,
  isOpen: false,
  modalProps: {},
  showModal: ({}) => {},
  hideModal: () => {},
})

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState>({
    component: null,
    modalProps: {},
    isOpen: false,
  })

  const hideModal = () => {
    setModalState({
      component: null,
      modalProps: {},
      isOpen: false,
    })
  }

  const showModal = ({ component, modalProps }: ShowModalType) => {
    setModalState({
      component,
      modalProps,
      isOpen: true,
    })
  }

  return <ModalContext.Provider value={{ ...modalState, hideModal, showModal }}>{children}</ModalContext.Provider>
}
