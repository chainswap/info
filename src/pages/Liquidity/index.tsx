import { Box } from '@material-ui/core'
import OutlineButton from 'components/Button/OutlineButton'
import { ChainList, ETH } from 'data/dummyData'
import useModal, { useWalletModal } from 'hooks/useModal'
import { useCallback, useMemo, useState } from 'react'
import { useUserLogined } from 'state/user/hooks'
import Button from '../../components/Button/Button'
import TextButton from '../../components/Button/TextButton'
import Divider from '../../components/Divider/Divider'
import LiquidityAccordion from '../../components/liquidity/Accordion'
import Table from '../../components/Table/Table'
import { TYPE } from '../../theme'
import AppBody from '../AppBody'
import AddLiquidity from './AddLiquidity'
import ArbitrageModal from './ArbitrageModal'
import DepositLiquidity from './DepositLiquidity'
import WithdrawLiquidity from './WithdrawLiquidity'
import Currency from 'models/currency'
import ClaimLiquidityModal from './ClaimModal'

export enum LiquidityState {
  DEFAULT = 'default',
  ADD = 'add',
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

const dummyData = [
  {
    asset: ETH,
    chain: 1,
    data: {
      'Pooled BSC': '0.003 BSC',
      'Your pool share': '1.28%',
      'Your unclaimed reward': 'Token',
      APY: '10.28%',
    },
  },
  {
    asset: ETH,
    chain: 1,
    data: {
      'Pooled BSC': '0.003 BSC',
      'Your pool share': '1.28%',
      'Your unclaimed reward': 'Token',
      APY: '10.28%',
    },
  },
]

const dummyTableData = [
  {
    asset: 'ETH',
    fromChain: 'ETH',
    toChain: 'BSC',
    size: '100 ETH',
    reward: '1.25X',
  },
  {
    asset: 'ETH',
    fromChain: 'ETH',
    toChain: 'BSC',
    size: '100 ETH',
    reward: '1.25X',
  },
]

export default function Liquidity() {
  const [state, setState] = useState(LiquidityState.DEFAULT)
  const [currentAsset, setCurrentAsset] = useState<Currency | null>(null)
  const { showModal, hideModal } = useModal()
  const { showWalletModal } = useWalletModal()
  const userLogined = useUserLogined()

  const tableRows = useMemo(() => {
    return dummyTableData.map(({ asset, fromChain, toChain, size, reward }) => [
      asset,
      `From ${fromChain === 'ETH' ? 'Ethereum' : fromChain} to ${toChain === 'ETH' ? 'Ethereum' : toChain}`,
      size,
      reward,
      <TextButton
        fontSize={12}
        primary
        fontWeight={500}
        onClick={() =>
          showModal(
            <ArbitrageModal
              fromChain={ChainList.find(({ symbol }) => symbol === fromChain)}
              toChain={ChainList.find(({ symbol }) => symbol === toChain)}
              onDismiss={hideModal}
            />
          )
        }
      >
        Arbirage
      </TextButton>,
    ])
  }, [hideModal, showModal])

  const handleBack = useCallback(() => {
    setState(LiquidityState.DEFAULT)
    setCurrentAsset(null)
  }, [])

  const handleClaim = useCallback(
    (currency) => () => showModal(<ClaimLiquidityModal onReturnClick={hideModal} currency={currency} />),
    [hideModal, showModal]
  )
  const handleAdd = useCallback(() => setState(LiquidityState.ADD), [])
  const handleDeposit = useCallback(
    (currency) => () => {
      setState(LiquidityState.DEPOSIT)
      setCurrentAsset(currency)
    },
    []
  )
  const handleWithdraw = useCallback(
    (currency) => () => {
      setState(LiquidityState.WITHDRAW)
      setCurrentAsset(currency)
    },
    []
  )

  return (
    <>
      {state === LiquidityState.ADD && <AddLiquidity onReturnClick={handleBack} />}
      {state === LiquidityState.DEPOSIT && <DepositLiquidity onReturnClick={handleBack} />}
      {state === LiquidityState.WITHDRAW && <WithdrawLiquidity onReturnClick={handleBack} currency={currentAsset} />}
      {state === LiquidityState.DEFAULT && (
        <AppBody width={560}>
          <Box display="grid" gridGap="20px" padding="20px 40px">
            <TYPE.largeHeader>Your Liquidity</TYPE.largeHeader>
            <TYPE.medium>
              Liquidity providers earn TOKEN rewards on all bridge swaps proportional to their share of the pool.
              Rewards accrue in real time and can be claimed by claiming reward or withdrawing your liquidity
            </TYPE.medium>
            {userLogined ? (
              <Button onClick={handleAdd}>Add Liquidity</Button>
            ) : (
              <OutlineButton onClick={showWalletModal}>Connect Wallet</OutlineButton>
            )}
            <Divider />
            <Box>
              <Box display="flex" alignItems="center" gridGap="21px" width="100%">
                <TYPE.gray className="asset" style={{ width: '132px' }} fontWeight={500}>
                  Asset
                </TYPE.gray>
                <TYPE.gray fontWeight={500}>Chain</TYPE.gray>
              </Box>
              <Box display="grid" gridGap="12px">
                {dummyData.map(({ asset, chain, data }, i) => (
                  <LiquidityAccordion
                    key={i}
                    asset={asset.symbol}
                    chain={chain}
                    data={data}
                    onDeposit={handleDeposit(asset)}
                    onWithdraw={handleWithdraw(asset)}
                    onClaim={handleClaim(asset)}
                  />
                ))}
              </Box>
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
              <Table header={['Token', 'Chain', 'Size', 'Reward', '']} rows={tableRows} />
            </Box>
          </Box>
        </AppBody>
      )}
    </>
  )
}
