import React, { useState } from 'react'

interface ModalContextType {
  component: React.FC | null
  modalProps: any
  isOpen: boolean
  showModal: Function
  hideModal: () => void
}

export const ModalContext = React.createContext<ModalContextType>({
  component: null,
  isOpen: false,
  modalProps: {},
  showModal: ({}) => {},
  hideModal: () => {},
})

export const ModalProvider = ({ children }: { children: React.ReactChild | React.ReactNode }) => {
  const [modalState, setModalState] = useState<any>({
    component: null,
    modalProps: {},
    isOpen: false,
  })

  const hideModal = () => {
    setModalState({
      isOpen: false,
    })
  }

  const showModal = ({ component, modalProps }: { component: React.FC | null; modalProps: any }) => {
    setModalState({
      component,
      modalProps,
      isOpen: true,
    })
  }

  return <ModalContext.Provider value={{ ...modalState, hideModal, showModal }}>{children}</ModalContext.Provider>
}
