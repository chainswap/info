import React from 'react'
import { Box } from '@material-ui/core'
import SimpleMessageBox from 'components/MessageBox/SimpleMessageBox'
import { TYPE } from 'theme/index'
import TextButton from 'components/Button/TextButton'

export default function DeployMessage() {
  return (
    <SimpleMessageBox type="success" header="Congratulations!">
      <TYPE.body textAlign="center" marginTop="12px">
        You token is now on Chainswap and the cross functionality is enabled
      </TYPE.body>
      <Box margin="24px auto 32px">
        <TextButton underline>View on Etherscan</TextButton>
      </Box>
    </SimpleMessageBox>
  )
}
