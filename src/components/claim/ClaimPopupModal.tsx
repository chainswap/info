import React, { useState, ChangeEvent } from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { Box } from '@material-ui/core'
import SimpleMessageBox from '../MessageBox/SimpleMessageBox'

export default function ClaimPopupModal() {
  const [hash, setHash] = useState('')
  const label = 'Please Enter the transaction hash'
  const placeHolder = 'Enter the transaction hash'

  const [{ showMessageBox, messageType, message }, setMessageState] = useState<{
    showMessageBox: boolean
    messageType: 'success' | 'failure'
    message: string
  }>({
    showMessageBox: false,
    messageType: 'success',
    message: '',
  })

  function onChangeHash(e: ChangeEvent<HTMLInputElement>) {
    const hash = e.currentTarget.value

    setHash(hash)
  }

  function onImport() {
    setMessageState({
      showMessageBox: true,
      messageType: hash ? 'success' : 'failure',
      message: hash ? 'Your claim is added to claim list' : 'Your transaction hash is not detected Please Enter again',
    })
  }

  return (
    <>
      <Modal title={label} closeIcon>
        <Box margin={'32px 52px 18px'}>
          <Input placeholder={placeHolder} value={hash} onChange={onChangeHash} />
        </Box>
        <Box margin={'0 52px 31px'}>
          <Button width={'376px'} onClick={onImport}>
            Import
          </Button>
        </Box>
      </Modal>
      {showMessageBox && (
        <SimpleMessageBox type={messageType} header={message} action={() => {}} actionText={'Enter Again'} />
      )}
    </>
  )
}
