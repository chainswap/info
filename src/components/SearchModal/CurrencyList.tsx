import React, { CSSProperties } from 'react'
import { FixedSizeList } from 'react-window'
import CurrencyLogo from '../../assets/images/dummy_logo.png'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'

const MenuItem = styled('div')({
  padding: '0 32px',
  height: 48,
  display: 'flex',
  justifyContent: 'space-between',
})

const CurrencySymbol = styled('div')({
  fontSize: 16,
  color: '#FFFFFF',
})

const CurrencyName = styled('div')({
  fontSize: 12,
  color: '#FFFFFF',
  opacity: 0.6,
})

const Balance = styled('div')({
  size: 16,
  color: '#FFFFFF',
})

const CurrencyRow = ({ style, currency, onSelect }: { style: CSSProperties; currency: any; onSelect: () => void }) => {
  return (
    <MenuItem>
      <Box display="flex">
        <img src={CurrencyLogo} alt="currency-logo" width="30px" height="30px" />
        <Box display="flex" flexDirection="column" marginLeft="16px">
          <CurrencySymbol>{currency}</CurrencySymbol>
          <CurrencyName>Ether</CurrencyName>
        </Box>
      </Box>
      <Balance>15.78</Balance>
    </MenuItem>
  )
}

const Row = ({ data, index, style }: any) => {
  const currency = 'ETH'
  const handleSelect = () => {
    alert('onCurrencySelect')
  }

  return <CurrencyRow style={style} currency={currency} onSelect={handleSelect} />
}

export default function CurrencyList() {
  return (
    <FixedSizeList height={500} width="100%" itemCount={20} itemSize={56}>
      {Row}
    </FixedSizeList>
  )
}
