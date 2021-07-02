import React from 'react'
import { ETH, BSC } from 'data/dummyData'
import FarmCard from 'components/farm/FarmCard'

const dummyData = [
  {
    farmLogo: ETH.logo,
    farmName: 'Chainswap Ethereum Farm',
    pools: [
      {
        name: 'Matter Token Pool',
        chain: ETH,
        earned: 0.0,
        apy: 100,
        staked: 100,
        pooled: 200,
      },
    ],
  },
  {
    farmLogo: BSC.logo,
    farmName: 'Chainswap Binance Smart Chain Farm',
    pools: [
      {
        name: 'Matter Token Pool1',
        chain: BSC,
        earned: 0.0,
        apy: 100,
        staked: 100,
        pooled: 200,
      },
      {
        name: 'Matter Token Pool2',
        chain: BSC,
        earned: 0.0,
        apy: 100,
        staked: 100,
        pooled: 200,
      },
    ],
  },
]

export default function Farm() {
  return (
    <>
      <FarmCard />
    </>
  )
}
