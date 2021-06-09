import { Box } from '@material-ui/core'
import Button from '../../components/Button/Button'
import TextButton from '../../components/Button/TextButton'
import { Divider } from '../../components/Divider/Divider'
import LiquidityAccordion from '../../components/liquidity/Accordion'
import Table from '../../components/Table/Table'
import { TYPE } from '../../theme'
import AppBody from '../AppBody'

const dummyData = [
  {
    asset: 'ETH',
    chain: 1,
    data: {
      'Pooled BSC': '0.003 BSC',
      'Your pool share': '1.28%',
      'Your unclaimed reward': 'Token',
      APY: '10.28%',
    },
  },
]

export default function Liquidity() {
  return (
    <AppBody width={560}>
      <Box display="grid" gridGap="20px" padding="20px 40px">
        <TYPE.largeHeader>Your Liquidity</TYPE.largeHeader>
        <TYPE.medium>
          Liquidity providers earn TOKEN rewards on all bridge swaps proportional to their share of the pool. Rewards
          accrue in real time and can be claimed by claiming reward or withdrawing your liquidity
        </TYPE.medium>
        <Button>Add Liquidity</Button>
        <Divider />
        <Box>
          <Box display="flex" alignItems="center" gridGap="21px" width="100%">
            <TYPE.gray className="asset" style={{ width: '132px' }} fontWeight={500}>
              Asset
            </TYPE.gray>
            <TYPE.gray fontWeight={500}>Chain</TYPE.gray>
          </Box>
          {dummyData.map(({ asset, chain, data }, i) => (
            <LiquidityAccordion
              key={i}
              asset={asset}
              chain={chain}
              data={data}
              onDeposit={() => {}}
              onWithdraw={() => {}}
              onClaim={() => {}}
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="center" gridGap="14px">
          <TYPE.medium>Don’t see a pool you joined?</TYPE.medium>
          <TextButton underline fontSize={14}>
            Import it
          </TextButton>
        </Box>
        <Divider />
        <Box display="grid" gridGap="12px">
          <TYPE.mediumHeader>Arbitrage Opportunity</TYPE.mediumHeader>
          <Table
            header={['Token', 'Chain', 'Size', 'Reward', '']}
            rows={[
              [
                'ETH',
                'From Ethereum to BSC',
                '100 ETH',
                '1.25X',
                <TextButton fontSize={12} primary fontWeight={500}>
                  Arbirage
                </TextButton>,
              ],
              [
                'USDT',
                'From Ethereum to BSC',
                '100 USDT',
                '1.25X',
                <TextButton fontSize={12} primary fontWeight={500}>
                  Arbirage
                </TextButton>,
              ],
            ]}
          />
        </Box>
      </Box>
    </AppBody>
  )
}
