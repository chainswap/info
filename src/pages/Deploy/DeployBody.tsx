import React from 'react'
import { Box } from '@material-ui/core'
import { TYPE } from 'theme/index'
import DeployStepper from 'components/deploy/DeployStepper'

interface Props {
  header: string
  activeStep: number
  children: React.ReactNode
  onStep?: (step: number) => void
  nonLinear?: boolean
}

export default function DeployBody(props: Props) {
  const { activeStep, header, children, onStep, nonLinear } = props

  return (
    <Box padding={'24px 32px 32px 32px'}>
      <Box display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom="24px">
        <TYPE.mediumHeader>{header}</TYPE.mediumHeader>
        <DeployStepper nonLinear={nonLinear} activeStep={activeStep} onStep={onStep} />
      </Box>
      {children}
    </Box>
  )
}
