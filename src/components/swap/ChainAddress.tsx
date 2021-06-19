import React from 'react'
import { Box } from '@material-ui/core'
import Image from '../Image/Image'
import { TYPE } from '../../theme/index'
import Currency from '../../models/currency'

interface Props {
  walletLogo: string
  address: string
  currency: Currency
}

export default function ChainAddress(props: Props) {
  const { walletLogo, address } = props

  return (
    <Box color="#FFFFFF" display="flex" margin="16px 32px 0 32px">
      <TYPE.mediumLightGray marginRight="10px"> Destination:</TYPE.mediumLightGray>
      <Box display="flex" alignItems={'center'}>
        <Image src={walletLogo} alt={'wallet logo'} style={{ width: 16, height: 14.3 }} />
        <TYPE.mediumGray marginLeft="8px">{address}</TYPE.mediumGray>
      </Box>
    </Box>
  )
}
