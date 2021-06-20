import React from 'react'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'
import DeployStepper from '../../components/deploy/DeployStepper'

interface Props {
  header: string
  activeStep: number
  children: React.ReactNode
  onClick?: () => void
  btnText?: string
  loading?: boolean
  loadingText?: string
  btnDisabled?: boolean
}

export default function DeployBody(props: Props) {
  const { activeStep, header, children } = props

  return (
    <Box padding={'24px 32px 32px 32px'}>
      <Box display={'flex'} justifyContent={'space-between'} marginBottom="24px">
        <TYPE.mediumHeader>{header}</TYPE.mediumHeader>
        <DeployStepper activeStep={activeStep} />
      </Box>
      {children}
    </Box>
  )
}
