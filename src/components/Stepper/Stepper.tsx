import React from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'

export default function _Stepper() {
  const steps = [1, 2]
  return (
    <Stepper>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
