import React from 'react'
import Messagebox from '../MessageBox/MessageBox'

interface Props {
  type: 'success'
  message: string
}

export default function DeploySuccessModal(props: Props) {
  const { type } = props

  return <Messagebox type={type}></Messagebox>
}
