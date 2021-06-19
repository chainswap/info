import React, { ChangeEvent } from 'react'
import { Box } from '@material-ui/core'
import CurrencyList from './CurrencyList'
import TextButton from '../../Button/TextButton'
import Currency from '../../../models/currency'
import Divider from '../../Divider/Divider'
import Input from '../../Input/Input'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  showImportView: () => void
  setImportToken: (token: Currency) => void
  onCurrencySelect: (currency: Currency) => void
}

interface Props {
  currencies: Currency[]
  onManage: () => void
}

export default function CurrencySearch(props: Props) {
  const { value, currencies, onManage, onChange, showImportView, setImportToken, onCurrencySelect } = props
  const placeholder = 'Search by name or paste address'

  return (
    <>
      <Box padding="0 32px 23px 32px">
        <Input value={value} onChange={onChange} placeholder={placeholder} outlined />
      </Box>
      <Divider />
      <Box paddingTop={'24px'}>
        <CurrencyList
          currencies={currencies}
          showImportBtn={true}
          showImportView={showImportView}
          setImportToken={setImportToken}
          onCurrencySelect={onCurrencySelect}
        />
      </Box>
      <Divider />
      <Box height="55px" justifyContent="center" display="flex">
        <TextButton onClick={onManage} primary>
          Manage
        </TextButton>
      </Box>
    </>
  )
}
