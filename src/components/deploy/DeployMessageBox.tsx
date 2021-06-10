import React from 'react'
import Messagebox from '../MessageBox/MessageBox'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'
import TextButton from '../Button/TextButton'
import Button from '../Button/Button'

interface Props {}

export default function DeploySuccessModal(props: Props) {
  return (
    <Messagebox type="success">
      <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
        <TYPE.large>Success!</TYPE.large>
        <TYPE.gray>
          You have successfully deployed your mappable contract on mainchain. Please save the following information and
          continue to next step:
        </TYPE.gray>
      </Box>

      <Box marginBottom="12px">
        <TextButton fontSize={13} fontWeight={400} primary>
          View on Etherscan
        </TextButton>
      </Box>
      <Box width={'100%'} padding={'0 32px 32px 32px'}>
        <Button>Go to Next Step</Button>
      </Box>
    </Messagebox>
  )
}
