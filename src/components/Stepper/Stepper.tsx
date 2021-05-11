import React from 'react'
import MuiStepper from '@material-ui/core/Stepper'
import MuiStep from '@material-ui/core/Step'
import MuiStepIcon from '@material-ui/core/StepIcon'
import { withStyles } from '@material-ui/core'

const Stepper = withStyles({
  root: {
    background: 'transparent',
  },
  horizontal: {
    padding: 0,
  },
  text: {
    opacity: 1,
  },
})(MuiStepper)

const Step = withStyles({
  root: {},
  horizontal: {
    padding: 0,
  },
})(MuiStep)

const StepIcon = withStyles({
  root: {
    border: '1px solid white',
    borderRadius: '50%',
    '&$active': {
      color: 'transparent',
    },
  },
  active: {},
  horizontal: {
    padding: 0,
  },
})(MuiStepIcon)

export default function _Stepper() {
  const steps = [1, 2]
  return (
    <Stepper>
      {steps.map((label) => (
        <Step key={label}>
          <StepIcon icon={label}></StepIcon>
        </Step>
      ))}
    </Stepper>
  )
}
