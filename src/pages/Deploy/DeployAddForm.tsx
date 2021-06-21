import React, { SyntheticEvent } from 'react'
import Input from 'components/Input/Input'
import { Box, styled } from '@material-ui/core'
import Checkbox from 'components/Checkbox/Checkbox'

interface Props {
  name: string
  symby: string
  declaims: string
  totalSupply: string
  chainId: string
  checked: boolean
  onName: (e: SyntheticEvent) => void
  onSymby: (e: SyntheticEvent) => void
  onDeclaims: (e: SyntheticEvent) => void
  onTotalSupply: (e: SyntheticEvent) => void
  onChainId: (e: SyntheticEvent) => void
  onChecked: () => void
}

const Row = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})

export default function DeployAddForm(props: Props) {
  const {
    name,
    symby,
    declaims,
    totalSupply,
    chainId,
    checked,
    onName,
    onSymby,
    onDeclaims,
    onTotalSupply,
    onChainId,
    onChecked,
  } = props

  return (
    <>
      <Box display="grid" gridGap="24px">
        <Row>
          <Box width="232px">
            <Input label="Name" placeholder="Enter token name" value={name} onChange={onName} />
          </Box>
          <Box width="232px">
            <Input label="Symby" placeholder="Symby" value={symby} onChange={onSymby} />
          </Box>
        </Row>
        <Row>
          <Box width="232px">
            <Input label="Declaims" placeholder="Declaims" value={declaims} onChange={onDeclaims} />
          </Box>
          <Box width="232px">
            <Input label="Symby" placeholder="Total Supply" value={totalSupply} onChange={onTotalSupply} />
          </Box>
        </Row>

        <Input label="Main Chain" placeholder="Select your main chain" value={chainId} onChange={onChainId} />
      </Box>
      <Box margin="20px auto 24px">
        <Checkbox checked={checked} onChange={onChecked} label="I confirm token information" />
      </Box>
    </>
  )
}
