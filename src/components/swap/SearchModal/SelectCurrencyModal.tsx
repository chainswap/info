import { useState, ChangeEvent, useCallback } from 'react'
import { Box } from '@material-ui/core'
import Modal from '../../Modal/Modal'
import CurrencyList from './CurrencyList'
import TextButton from '../../Button/TextButton'
import Currency from '../../../models/currency'
import Divider from '../../Divider/Divider'
import Input from '../../Input/Input'
import { useEffect } from 'react'

export enum Mode {
  SELECT = 'select',
  IMPORT = 'import',
}

interface Props {
  currencies: Currency[]
  onCurrencySelect: (currency: Currency) => void
  onDismiss: () => void
}

export default function SelectCurrencyModal(props: Props) {
  const { currencies, onCurrencySelect } = props
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
          <CurrencyList currencies={currencies} mode={mode} onCurrencySelect={onCurrencySelect} />
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
