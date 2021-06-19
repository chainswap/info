import React from 'react'
import { Box } from '@material-ui/core'
import TextButton from '../../components/Button/TextButton'
import SimpleMessageBox from '../../components/MessageBox/SimpleMessageBox'

interface Props {
  action: () => void
}

export default function TxnSubmittedMessageBox(props: Props) {
  const { action } = props

  return (
    <SimpleMessageBox type={'success'} header={'Transaction Submitted'} action={action}>
      <Box margin="20px 0 32px 0">
        <TextButton fontSize={13} fontWeight={400} underline>
          View on Etherscan
        </TextButton>
      </Box>
    </SimpleMessageBox>
  )
}
