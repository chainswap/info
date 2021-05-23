import Modal from '../Modal/Modal'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useWalletModalToggle } from '../../state/application/hooks'
import OutlineButton from '../Button/OutlineButton'
import { Box } from '@material-ui/core'
import { WalletOptions } from '../../data/dummyData'

import Image from '../Image/Image'

export default function WalletModal() {
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const toggleWalletModal = useWalletModalToggle()

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} label={'Connect to a wallet'} showIcon>
      <Box padding="32px" display="flex" flexDirection="column" alignItems="center">
        <Box display="grid" gridGap="12px">
          {WalletOptions.map((wallet: { name: string; logo: string }) => (
            <OutlineButton size="large" width="280px">
              <Image src={wallet.logo} alt={`wallet icon- ${wallet.name}`} />
              Metamask
            </OutlineButton>
          ))}
        </Box>
      </Box>
    </Modal>
  )
}
