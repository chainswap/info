import React from 'react'
import { withStyles } from '@material-ui/styles'
import Stepper from '../Stepper/Stepper'
import MuiStepConnector from '@material-ui/core/StepConnector'
import { ReactComponent as StepCompletedIcon } from '../../assets/images/step_completed_icon.svg'

interface Props {
  activeStep: number
  onStep?: (step: number) => void
}

const Connector = withStyles({
  line: {
    background: 'rgba(255,255,255,0.2)',
    height: 1,
    width: 16,
    border: 0,
    borderRadius: 1,
  },
})(MuiStepConnector)

export default function DeployStepper(props: Props) {
  const { activeStep, onStep } = props
  return (
    <Stepper
      activeStep={activeStep}
      steps={[1, 2, 3]}
      completedIcon={<StepCompletedIcon />}
      connector={<Connector />}
      onStep={onStep}
    />
  )
}
