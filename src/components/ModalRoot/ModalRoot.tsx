import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

export default function ModalRoot() {
  const { component: Component, modalProps } = useContext(ModalContext)
  return Component ? <Component {...modalProps} /> : null
}
