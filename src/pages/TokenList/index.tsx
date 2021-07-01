import React, { useMemo, useState } from 'react'
import { Box } from '@material-ui/core'
import Image from 'components/Image/Image'
import { ETH } from 'data/dummyData'
import AppBody from 'pages/AppBody'
import Pager from 'components/Pager/Pager'
import Input from 'components/Input/Input'
import { TYPE } from 'theme/index'
import LogoText from 'components/LogoText/LogoText'
import { shortenAddress } from '../../utils/utils'
import InfoTable from 'components/info/InfoTable'

const dummyData = [
  {
    asset: ETH,
    decimals: 18,
    mainchain: ETH,
    verified: true,
    status: 'Live',
    supportChains: [
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
    ],
  },
  {
    asset: ETH,
    decimals: 18,
    mainchain: ETH,
    verified: true,
    status: 'Live',
    supportChains: [
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
      {
        asset: ETH,
        tokenAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
        mappingAddress: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
      },
    ],
  },
]

export default function TokenList() {
  const [search, setSearch] = useState('')
  const [totalPage] = useState(100)
  const [page] = useState(1)

  const rowData = useMemo(() => {
    return dummyData.map(({ asset, decimals, mainchain, verified, status, supportChains }) => {
      return {
        main: [
          <LogoText logo={asset.logo} text={asset.symbol} fontSize={12} />,
          asset.symbol,
          decimals,
          <LogoText logo={mainchain.logo} text={mainchain.symbol} fontSize={12} />,
          shortenAddress(asset.address),
          <TYPE.highlight>{verified ? 'verified' : ''}</TYPE.highlight>,
          <TYPE.highlight>{status}</TYPE.highlight>,
        ],
        sub: supportChains.map(({ asset, tokenAddress, mappingAddress }) => [
          <Box display="flex" alignItems="center">
            <Image src={asset.logo} alt={`${asset.symbol} logo`} />
            <TYPE.smallGray ml="8px">{asset.symbol}</TYPE.smallGray>
          </Box>,
          <TYPE.smallGray>{tokenAddress}</TYPE.smallGray>,
          <TYPE.smallGray>{mappingAddress}</TYPE.smallGray>,
        ]),
      }
    })
  }, [])

  return (
    <>
      <AppBody title="Token List" titleCenter width={880} height={492}>
        <Box position="absolute" right="20px" top="20px">
          <Input
            placeholder="name/symbol/token/address"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            height="28px"
            width="288px"
          />
        </Box>

        <Box padding="0 20px 40px">
          <InfoTable
            headers={['Token', 'Symbol', 'Decimals', 'Main Chain', 'Token Address', 'Verify', 'Status']}
            subHeaders={['Support Chain', 'Token contract address', 'Mapping contract address']}
            rows={rowData}
            collapsible
          />
        </Box>
      </AppBody>
      <Box position="relative" width="880px" mt="15px">
        <Box position="absolute" right="10px">
          <Pager current={page} total={totalPage} />
        </Box>
      </Box>
    </>
  )
}
