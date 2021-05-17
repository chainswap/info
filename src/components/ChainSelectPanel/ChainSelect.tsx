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
  selectedChain: Chain
}

export default function ChainSelectPanel(props: Props) {
  const { label, disabled, selectedChain, chainList } = props
  return (
    <>
      <Box>
        <TYPE.Label>{label}</TYPE.Label>
        <Select defaultValue="ETH" disabled={disabled}>
          {chainList.map((chain) => (
            <MenuItem value={chain.symbol} key={chain.symbol}>
              <LogoText logo={chain.logo} text={chain.symbol} />
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  )
}
