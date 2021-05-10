import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel/CurrencySelectPanel'
import { useWalletModalToggle } from '../../state/application/hooks'
import WalletModal from '../../components/WalletModal'
import { styled } from '@material-ui/styles'
import Input from '../../components/Input/Input'

const AppBodyGrid = styled('div')({
  display: 'grid',
  gridGap: 26,
})

export default function Swap() {
  const account = true
  const [address, setAddress] = useState('')
  // Todo: const { account } = useActiveWeb3React()

  // toggle wallet when disconnected
  const toggleWalletModal = useWalletModalToggle()

  return (
    <>
      <AppBody>
        <SwapHeader />
        <AppBodyGrid>
          <CurrencyInputPanel />
          <CurrencySelectPanel />
          {!account ? (
            <Button size="large" onClick={toggleWalletModal}>
              Connect Wallet
            </Button>
          ) : (
            <Input
              value={address}
              placeholder={'Enter address to swap'}
              onChange={(e) => setAddress(e.currentTarget.value)}
            />
          )}
        </AppBodyGrid>
      </AppBody>
      <WalletModal />
    </>
  )
}
