import React from 'react'
import { withStyles } from '@material-ui/styles'
import Stepper from '../Stepper/Stepper'
import MuiStepConnector from '@material-ui/core/StepConnector'
import { ReactComponent as StepCompletedIcon } from '../../assets/images/check_icon.svg'

interface Props {
  activeStep: number
}

const Connector = withStyles({
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient(90deg, #24FF00 0%, #FFFFFF 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient(90deg, #24FF00 0%, #FFFFFF 100%)',
    },
  },
  line: {
    background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%)',
    height: 1,
    width: 184,
    border: 0,
    borderRadius: 1,
  },
})(MuiStepConnector)

export default function SwapStepper(props: Props) {
  return (
    <Stepper
      activeStep={props.activeStep}
      steps={[1, 2]}
      completedIcon={<StepCompletedIcon />}
      connector={<Connector />}
    />
  )
}
