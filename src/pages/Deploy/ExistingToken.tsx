import React from 'react'
import { TYPE } from '../../theme/index'
import DeployStepper from './DeployStepper'
import { Box } from '@material-ui/core'

export default function ExistingToken() {
  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <TYPE.mediumHeader>Add an Existing Token</TYPE.mediumHeader>
      <DeployStepper activeStep={0} />
    </Box>
  )
}
