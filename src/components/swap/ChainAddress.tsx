import React from 'react'
import { Text } from 'rebass'
import { Box } from '@material-ui/core'
import trimAddress from '../../utils/trimAddress'

interface Props {
  walletLogo: string
  address: string
}

export default function ChainAddress(props: Props) {
  const { walletLogo, address } = props

  return (
    <Box color="#FFFFFF" display="flex" justifyContent="space-between" margin="16px 32px 0 32px">
      <Text opacity={0.6}>Destination Chain Address:</Text>
      <Box display="flex" alignItems="center">
        <img src={walletLogo} alt={'wallet logo'} />
        <Box marginLeft="8px" fontSize="12px">
          {trimAddress(address, 25, 5)}
        </Box>
      </Box>
    </Box>
  )
}
