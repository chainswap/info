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
import InputLabel from 'components/InputLabel/InputLabel'
import useModal from 'hooks/useModal'

const Card = styled('div')(({ theme }) => ({
  border: '1px solid ' + theme.textColor.text3,
  height: 49,
  borderRadius: 14,
  display: 'flex',
  padding: '14px 24px',
  alignItems: 'center',
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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value), [])
  return (
    <Modal width="520px" title="Arbitrage Opportunity" onReturnClick={() => hideModal()}>
      <Box padding="20px 40px" display="grid" gridGap="24px">
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

        <Box>
          <InputLabel>Your Estimated Reward</InputLabel>
          <Card>
            <TYPE.body>12345 TOKEN</TYPE.body>
          </Card>
        </Box>
        {amount === '' ? <OutlineButton primary>Enter amount</OutlineButton> : <Button>Arbitrage</Button>}
      </Box>
    </Modal>
  )
}
