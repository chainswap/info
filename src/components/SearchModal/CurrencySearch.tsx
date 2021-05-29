import React, { ChangeEvent } from 'react'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import CurrencyList from './CurrencyList'
import TextButton from '../Button/TextButton'
import Currency from '../../models/currency'
import Divider from '../../components/Divider/Divider'
import Input from '../../components/Input/Input'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  showImportView: () => void
  setImportToken: (token: Currency) => void
}

interface Props {
  currencies: Currency[]
  onManage: () => void
}

export default function CurrencySearch(props: Props) {
  const { value, currencies, onManage, onChange, showImportView, setImportToken } = props
  const placeholder = 'Search by name or paste address'

  return (
    <>
      <Box padding="20px 32px 0 32px">
        <Input value={value} onChange={onChange} placeholder={placeholder} />
      </Box>
      <Divider orientation={'horizontal'} margin={'20px 0 20px 0'} opacity={0.12} />
      <CurrencyList currencies={currencies} showImportView={showImportView} setImportToken={setImportToken} />
      <Divider orientation={'horizontal'} margin={'20px 0 20px 0'} opacity={0.12} />
      <Box width="100%" borderRadius="0 0 20px 20px" padding="0 0 13px 0" justifyContent="center" display="flex">
        <TextButton onClick={onManage} primary>
          Manage
        </TextButton>
      </Box>
    </>
  )
}
