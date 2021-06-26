import { useCallback, useState } from 'react'
import { Box, styled, useTheme } from '@material-ui/core'
import Button from 'components/Button/Button'
import OutlineButton from 'components/Button/OutlineButton'
import Input from 'components/Input/Input'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import { ChainList, ETH } from 'data/dummyData'
import Chain from 'models/chain'
import { TYPE } from 'theme'
import Modal from '../../components/Modal/Modal'
import { ReactComponent as ArrowRight } from '../../assets/images/arrow_forward.svg'
import useModal from 'hooks/useModal'
import { useEffect } from 'react'

const Card = styled('div')(({ theme }) => ({
  border: '1px solid ' + theme.textColor.text3,
  height: 49,
  borderRadius: 14,
  display: 'flex',
  padding: '14px 24px',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const ButtonWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 16,
  top: 42,
  // display: 'flex',
  // alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    right: 20,
  },
}))

export default function ArbitrageModal({ fromChain, toChain }: { fromChain?: Chain; toChain?: Chain }) {
  const [amount, setAmount] = useState('')
  const theme = useTheme()
  const { hideModal } = useModal()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (amount !== '') {
      setLoading(true)
    }
    setTimeout(() => {
      setLoading(false)
    })
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value), [])
  return (
    <Modal width="520px" title="Arbitrage Opportunity" onReturnClick={() => hideModal()}>
      <Box padding="0 40px 20px">
        <Box display="grid" gridGap="24px" mb="12px">
          <ChainSelect label="from" disabled chainList={ChainList} selectedChain={ETH} width="100%" />
          <Box>
            {fromChain && toChain && (
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <ChainSelect label="from" disabled chainList={ChainList} selectedChain={fromChain} width="200px" />
                <ArrowRight width="24px" height="24px" fill={theme.textColor.text4} style={{ marginTop: 17 }} />
                <ChainSelect label="To" disabled chainList={ChainList} selectedChain={toChain} width="200px" />
              </Box>
            )}
          </Box>
          <Box position="relative">
            <Input
              value={amount}
              onChange={handleChange}
              placeholder="Enter amount"
              label="Arbitrage Amount"
              info="Balance: 1.24 MATTER"
            />
            <ButtonWrapper>
              <OutlineButton
                width="64px"
                height="28px"
                onClick={() => {}}
                color={theme.textColor.text1}
                borderRadius="20px"
              >
                Max
              </OutlineButton>
            </ButtonWrapper>
          </Box>

          <Card>
            <TYPE.mediumGray>Your Estimated Reward</TYPE.mediumGray>
            <TYPE.body>12345 TOKEN</TYPE.body>
          </Card>
          {amount === '' ? <OutlineButton primary>Enter amount</OutlineButton> : <Button>Arbitrage</Button>}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <TYPE.body>Base fee</TYPE.body>
          <TYPE.body>0.005ETH</TYPE.body>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <TYPE.body>Percentage fee</TYPE.body>
          <TYPE.body>10 USDT</TYPE.body>
        </Box>
      </Box>
    </Modal>
  )
}
