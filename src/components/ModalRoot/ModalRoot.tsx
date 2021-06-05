import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

export default function ModalRoot() {
  const { component: Component, isOpen, hideModal, modalProps } = useContext(ModalContext)
  return Component ? <Component {...modalProps} /> : null
}
