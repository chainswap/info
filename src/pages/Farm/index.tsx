import React from 'react'
import { Box, styled } from '@material-ui/core'
import { ETH, BSC } from 'data/dummyData'
import FarmCard from 'components/farm/FarmCard'
import { TYPE } from 'theme/index'
import Image from 'components/Image/Image'

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

const Wrapper = styled('div')({
  width: '100%',
})

export default function Farm() {
  return (
    <Wrapper>
      {dummyData.map((farm) => (
        <div key={farm.farmName}>
          <Box display="flex" alignItems="center" mb="40px" mt="80px">
            <Image src={farm.farmLogo} alt={`${farm.farmName} logo`} />
            <TYPE.header ml="16px" fontSize="24px">
              {farm.farmName}
            </TYPE.header>
          </Box>
          <Box display="flex" flexWrap="wrap">
            {farm.pools.map((pool) => (
              <Box key={pool.name} mr="30px">
                <FarmCard data={pool} />
              </Box>
            ))}
          </Box>
        </div>
      ))}
    </Wrapper>
  )
}
