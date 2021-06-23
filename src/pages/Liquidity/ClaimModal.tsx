import { useCallback } from 'react'
import { Box } from '@material-ui/core'
import Button from 'components/Button/Button'
import Currency from 'models/currency'
import Modal from 'components/Modal/Modal'
import { TYPE } from 'theme'
import Image from 'components/Image/Image'

export default function ClaimLiquidityModal({ currency }: { currency: Currency }) {
  const handleClaim = useCallback(() => {}, [])
  return (
    <Modal returnIcon title="Claim Reward" width="440px">
      <Box padding="12px 40px 40px" display="grid" gridGap="20px">
        <TYPE.bold fontSize={40} style={{ textAlign: 'center', marginBottom: -10 }}>
          0.000141
        </TYPE.bold>
        <Box display="flex" justifyContent="center" alignItems="center" gridGap="10px">
          <Image src={currency.logo} />
          <TYPE.bold>{currency.symbol}</TYPE.bold>
        </Box>

        <Button onClick={handleClaim}>Claim</Button>
      </Box>
    </Modal>
  )
}
