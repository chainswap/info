import Modal from '../Modal/Modal'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useWalletModalToggle } from '../../state/application/hooks'
import OutlineButton from '../Button/OutlineButton'
import DummyLogo from '../../assets/images/dummy_logo.png'
import { Box } from '@material-ui/core'

export default function WalletModal() {
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const toggleWalletModal = useWalletModalToggle()

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} label={'Connect to a wallet'}>
      <Box padding="32px" display="flex" flexDirection="column" alignItems="center">
        <Box display="grid" gridGap="12px">
          <OutlineButton size="large" width="280px">
            <img src={DummyLogo} alt="currency-icon" />
            Metamask
          </OutlineButton>
          <OutlineButton size="large" width="280px">
            <img src={DummyLogo} alt="currency-icon" />
            WalletConnect
          </OutlineButton>
        </Box>
      </Box>
    </Modal>
  )
}
