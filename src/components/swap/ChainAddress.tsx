import React from 'react'
import { Text } from 'rebass'
import { Box } from '@material-ui/core'

interface Props {
  walletLogo: string
  address: string
}

export default function ChainAddress(props: Props) {
  const { walletLogo, address } = props

  const trimmedAddress = (address: string) => {
    const limit = 25

    if (address.length > limit) {
      return address.substring(0, 20) + '...' + address.substr(-5)
    }
  }

  return (
    <Box color="#FFFFFF" display="flex" justifyContent="space-between" margin="16px 32px 0 32px">
      <Text opacity={0.6}>Destination Chain Address:</Text>
      <Box display="flex" alignItems="center">
        <img src={walletLogo} alt={'wallet logo'} />
        <Box marginLeft="8px" fontSize="12px">
          {trimmedAddress(address)}
        </Box>
      </Box>
    </Box>
  )
}
