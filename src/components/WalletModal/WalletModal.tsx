import React, { useState, useEffect } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import Modal from '../Modal/Modal'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useWalletModalToggle } from '../../state/application/hooks'
import { Box } from '@material-ui/core'
import { SUPPORTED_WALLETS } from '../../constants'
import Option from './Option'
import usePrevious from '../../hooks/usePrevious'
import AccountDetails from '../AccountDetails/AccountDetails'

const WALLET_VIEWS = {
  OPTIONS: 'options',
  // OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  // PENDING: 'pending',
}

export default function WalletModal() {
  const { active, account, connector, activate, error } = useWeb3React()
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT)
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const toggleWalletModal = useWalletModalToggle()
  const previousAccount = usePrevious(account)

  // close on connection, when logged out before
  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal()
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen])

  // always reset to account view
  useEffect(() => {
    if (walletModalOpen) {
      // setPendingError(false)
      setWalletView(WALLET_VIEWS.ACCOUNT)
    }
  }, [walletModalOpen])

  // close modal when a connection is successful
  const activePrevious = usePrevious(active)
  const connectorPrevious = usePrevious(connector)
  useEffect(() => {
    if (walletModalOpen && ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error))) {
      setWalletView(WALLET_VIEWS.ACCOUNT)
    }
  }, [setWalletView, active, error, connector, walletModalOpen, activePrevious, connectorPrevious])

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key]

      return (
        <Option
          id={`connect-${key}`}
          onClick={() => {
            setWalletView(WALLET_VIEWS.ACCOUNT)
          }}
          key={key}
          active={option.connector === connector}
          color={option.color}
          link={option.href}
          header={option.name}
          subheader={null} //use option.descriptio to bring back multi-line
          icon={option.iconURL}
        />
      )
    })
  }

  function getModalContent() {
    const account = true
    // Todo: Get account from useWeb3React()
    if (error) {
      return <>Error Message</>
    }
    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return (
        <AccountDetails
          toggleWalletModal={toggleWalletModal}
          openOptions={() => setWalletView(WALLET_VIEWS.OPTIONS)}
          ENSName={'0xe60b...e6d3'}
          onClose={toggleWalletModal}
          pendingTransactions={['Swap 1.0ETH for 0.000000001 BSC']}
          confirmedTransactions={['Swap 1.0ETH for 0.000000001 BSC', 'Swap 1.0ETH for 0.000000001 BSC']}
        />
      )
    }

    return (
      <>
        <Box padding="32px" display="flex" flexDirection="column" alignItems="center">
          <Box display="grid" gridGap="12px">
            {getOptions()}
          </Box>
        </Box>
      </>
    )
  }

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} showIcon={walletView === WALLET_VIEWS.OPTIONS}>
      {getModalContent()}
    </Modal>
  )
}
