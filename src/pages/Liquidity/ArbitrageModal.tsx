import { useCallback, useState } from 'react'
import { X } from 'react-feather'
import { Box, styled, useTheme } from '@material-ui/core'
import Button from 'components/Button/Button'
import OutlineButton from 'components/Button/OutlineButton'
import Input from 'components/Input/Input'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import { ChainList } from 'data/dummyData'
import Chain from 'models/chain'
import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'
import Modal from '../../components/Modal/Modal'
import { ReactComponent as ArrowRight } from '../../assets/images/arrow_forward.svg'
import InputLabel from 'components/InputLabel/InputLabel'

const Card = styled('div')(({ theme }) => ({
  border: '1px solid ' + theme.textColor.text3,
  height: 49,
  borderRadius: 14,
  display: 'flex',
  padding: '14px 24px',
  alignItems: 'center',
}))

export default function ArbitrageModal({ fromChain, toChain }: { fromChain?: Chain; toChain?: Chain }) {
  const [amount, setAmount] = useState('')
  const theme = useTheme()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value), [])
  return (
    <Modal width="520px" title="Arbitrage Opportunity" closeIcon>
      <AppBody width={520}>
        <Box padding="20px 40px" display="grid" gridGap="24px">
          {/* <Box display="flex" justifyContent="space-between">
            <div />
            <TYPE.largeHeader>Arbitrage Opportunity</TYPE.largeHeader>
          </Box> */}
          <Box>
            {fromChain && toChain && (
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <ChainSelect label="from" disabled chainList={ChainList} selectedChain={fromChain} />
                <ArrowRight width="24px" height="24px" fill={theme.textColor.text4} style={{ marginTop: 17 }} />
                <ChainSelect label="To" disabled chainList={ChainList} selectedChain={toChain} />
              </Box>
            )}
          </Box>
          <Box>
            <Input value={amount} onChange={handleChange} placeholder="Enter amount" label="Arbitrage Amount" />
          </Box>
          <Box>
            <InputLabel>Your Estimated Reward</InputLabel>
            <Card>
              <TYPE.body>12345 TOKEN</TYPE.body>
            </Card>
          </Box>
          {amount === '' ? <OutlineButton primary>Enter amount</OutlineButton> : <Button>Arbitrage</Button>}
        </Box>
      </AppBody>
    </Modal>
  )
}
