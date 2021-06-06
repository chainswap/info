import React from 'react'
import { Text } from 'rebass'
import { Box } from '@material-ui/core'
import Image from '../../components/Image/Image'
import { shortenAddress } from '../../utils/utils'

interface Props {
  walletLogo: string
  address: string
}

export default function ChainAddress(props: Props) {
  const { walletLogo, address } = props

  return (
    <Box color="#FFFFFF" display="flex" justifyContent="space-between" margin="16px 32px 0 32px">
      <Text opacity={0.6} marginRight={10}>
        Destination:
      </Text>
      <Box display="flex" alignItems={'center'}>
        <Image src={walletLogo} alt={'wallet logo'} style={{ width: 16, height: 14.3 }} />
        <Box marginLeft="8px" fontSize="13px">
          {address}
        </Box>
      </Box>
    </Box>
  )
}
