import React, { useMemo } from 'react'
import Table from 'components/Table/Table'
import Image from 'components/Image/Image'
import { ETH } from 'data/dummyData'

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
    <Table
      header={['Token', 'Symbol', 'Decimals', 'Main Chain', 'Token Address', 'Verify', 'Status']}
      rows={tableRows}
    />
  )
}
