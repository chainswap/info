import { useState, ChangeEvent, useCallback } from 'react'
import { Box } from '@material-ui/core'
import Modal from 'components/Modal/Modal'
import CurrencyList from 'components/swap/CurrencyList'
import TextButton from 'components/Button/TextButton'
import Divider from 'components/Divider/Divider'
import Input from 'components/Input/Input'
import { useEffect } from 'react'

export enum Mode {
  SELECT = 'select',
  IMPORT = 'import',
}

export default function SelectCurrencyModal() {
  const [input, setInput] = useState('')
  const [mode, SetMode] = useState(Mode.SELECT)

  const onManage = useCallback(() => {}, [])

  const onInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }, [])

  useEffect(() => {
    if (input !== '') {
      return SetMode(Mode.IMPORT)
    }

    SetMode(Mode.SELECT)
  }, [input])

  return (
    <>
      <Modal title="Select a token" closeIcon>
        <Box padding="0 32px 23px 32px">
          <Input value={input} onChange={onInput} placeholder="Search by name or paste address" outlined />
        </Box>
        <Divider />
        <Box paddingTop={'24px'}>
          <CurrencyList mode={mode} />
        </Box>
        <Divider />
        <Box height="55px" justifyContent="center" display="flex">
          <TextButton onClick={onManage} primary>
            Manage
          </TextButton>
        </Box>
      </Modal>
    </>
  )
}
