import React from 'react'
import { Box, styled } from '@material-ui/core'
import Input from 'components/Input/Input'

export default function DeployMappingForm() {
  return (
    <Box display="grid" gridGap="24px">
      <Input
        label="Token Contract Address"
        value=""
        placeholder="Enter the token contract address"
        onChange={() => {}}
      />
      <Input
        label="Mappable Contract Address"
        value=""
        placeholder="Enter the mappable contract address"
        onChange={() => {}}
      />
      <Input label="Token Contract Address" value="" placeholder="Enter the mainchain ID" onChange={() => {}} />
    </Box>
  )
}
