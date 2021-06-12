import React from 'react'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'
import DeployStepper from '../../components/deploy/DeployStepper'
import Button from '../../components/Button/Button'
import { ReactComponent as Loader } from '../../assets/images/loader.svg'
import { Text } from 'rebass'

interface Props {
  header: string
  activeStep: number
  children: React.ReactNode
  onClick: () => void
  loading: boolean
  loadingText: string
  btnDisabled: boolean
}

export default function DeployBody(props: Props) {
  const { activeStep, header, children, loading, loadingText, onClick, btnDisabled } = props

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} padding={'24px 32px'}>
        <TYPE.header fontSize={20}>{header}</TYPE.header>
        <DeployStepper activeStep={activeStep} />
      </Box>
      {children}
      <Box padding={'0 32px 32px 32px'}>
        <Button disabled={btnDisabled} onClick={onClick}>
          {loading ? (
            <>
              <Loader />
              <Text marginLeft={32}>{loadingText}</Text>
            </>
          ) : (
            'Deploy'
          )}
        </Button>
      </Box>
    </>
  )
}
