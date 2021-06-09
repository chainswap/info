import React from 'react'
import { withStyles } from '@material-ui/styles'
import Stepper from '../../components/Stepper/Stepper'
import MuiStepConnector from '@material-ui/core/StepConnector'
import { ReactComponent as StepCompletedIcon } from '../../assets/images/step_completed_icon.svg'

interface Props {
  activeStep: number
}

const Connector = withStyles({
  line: {
    background: 'rgba(255,255,255,0.2)',
    height: 1,
    width: 16,
    marginLeft: 8,
    border: 0,
    borderRadius: 1,
  },
})(MuiStepConnector)

export default function DeployStepper(props: Props) {
  return (
    <Stepper
      activeStep={props.activeStep}
      steps={[1, 2, 3]}
      completedIcon={<StepCompletedIcon />}
      connector={<Connector />}
    />
  )
}
