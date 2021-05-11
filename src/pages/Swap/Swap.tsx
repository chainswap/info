import React, { useState, ChangeEvent } from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel/CurrencySelectPanel'
import { useWalletModalToggle } from '../../state/application/hooks'
import WalletModal from '../../components/WalletModal'
import { styled } from '@material-ui/styles'
import Input from '../../components/Input/Input'
import Column from '../../components/Column/index'
import { RowBetween } from '../../components/Row/index'
import Stepper from '../../components/Stepper/Stepper'
import Row from '../../components/Row/index'

const AppBodyGrid = styled('div')({
  display: 'grid',
  gridGap: 26,
})

export default function Swap() {
  const account = true
  // Todo: const { account } = useActiveWeb3React()

  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('')
  const [fromCurrency, setFromCurrency] = useState('ETH')
  const [toCurrency, setToCurrency] = useState('BSC')
  const [depositDisabled, setDepositDisabled] = useState(true)

  // toggle wallet when disconnected
  const toggleWalletModal = useWalletModalToggle()

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value)
  }

  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }

  return (
    <>
      <AppBody>
        <SwapHeader />
        <AppBodyGrid>
          <CurrencyInputPanel onChange={onChangeAmount} />
          <CurrencySelectPanel />
          {!account ? (
            <Button size="large" onClick={toggleWalletModal}>
              Connect Wallet
            </Button>
          ) : (
            <>
              <Column>
                <Input
                  label={'Destination Chain Wallet Address'}
                  value={address}
                  placeholder={'Enter address to swap'}
                  onChange={onChangeAddress}
                />
              </Column>
              <RowBetween>
                <Button size="large" width="216px" disabled={depositDisabled}>
                  Deposit in {fromCurrency} Chain
                </Button>
                <Button size="large" width="216px" disabled>
                  Withdraw from {toCurrency} Chain
                </Button>
              </RowBetween>
              <Row justify={'center'}>
                <Stepper />
              </Row>
            </>
          )}
        </AppBodyGrid>
      </AppBody>
      <WalletModal />
    </>
  )
}
