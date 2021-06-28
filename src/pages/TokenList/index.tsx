import React, { useMemo, useState } from 'react'
import { Box, styled } from '@material-ui/core'
import Table from 'components/Table/Table'
import Image from 'components/Image/Image'
import { ETH } from 'data/dummyData'
import AppBody from 'pages/AppBody'
import Pager from 'components/Pager/Pager'
import Input from 'components/Input/Input'

const dummyTableData = [
  {
    asset: ETH,
    mainChain: ETH,
    decimals: '18',
    verified: true,
    status: 'Live',
  },
  {
    asset: ETH,
    mainChain: ETH,
    decimals: '18',
    verified: true,
    status: 'Live',
  },
]

export default function TokenList() {
  const [search, setSearch] = useState('')
  const [totalPage] = useState(100)
  const [page, setPage] = useState(1)

  const tableRows = useMemo(() => {
    return dummyTableData.map(({ asset, decimals, mainChain, verified, status }) => [
      <>
        <Image src={asset.logo} />
        {asset.symbol}
      </>,
      asset.symbol,
      decimals,
      <>
        <Image src={mainChain.logo} alt="main chain logo" /> {mainChain.symbol}
      </>,
      asset.address,
      verified ? 'verified' : '',
      status,
    ])
  }, [])
  return (
    <>
      <AppBody title="Token List" width={880} height={492}>
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
          <Table
            header={['Token', 'Symbol', 'Decimals', 'Main Chain', 'Token Address', 'Verify', 'Status']}
            rows={tableRows}
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
