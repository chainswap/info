import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

export default function ModalRoot() {
  const { component } = useContext(ModalContext)
  return <>{component ? component : null}</>
}
