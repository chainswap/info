import { Box } from '@material-ui/core'
import Button from 'components/Button/Button'
import Currency from 'models/currency'
import Modal from 'components/Modal/Modal'
import { TYPE } from 'theme'

export default function ClaimLiquidityModal({
  onReturnClick,
  currency,
}: {
  onReturnClick: () => void
  currency: Currency
}) {
  return (
    <Modal onReturnClick={onReturnClick} label="Claim Reward" width="440px">
      <Box padding="12px 40px 40px">
        <TYPE.bold fontSize={40}>0.000141</TYPE.bold>
        <TYPE.bold>{currency.symbol}</TYPE.bold>
        <Button>Claim</Button>
      </Box>
    </Modal>
  )
}
