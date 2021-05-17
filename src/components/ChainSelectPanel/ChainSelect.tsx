import React from 'react'
import { MenuItem, Box } from '@material-ui/core'
import Select from '../Select/Select'
import { TYPE } from '../../theme/index'
import LogoText from '../LogoText/LogoText'
import Chain from '../../models/chain'

interface Props {
  label: string
  disabled?: boolean
  chainList: Chain[]
}

export default function CurrencySelectPanel(props: Props) {
  const { label, disabled, chainList } = props
  return (
    <>
      <Box>
        <TYPE.label>{label}</TYPE.label>
        <Select defaultValue="ETH" disabled={disabled}>
          {chainList.map((chain) => (
            <MenuItem value="ETH">
              <LogoText logo={chain.logo} text={chain.symbol} />
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  )
}
