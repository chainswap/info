import React, { ReactElement, useCallback } from 'react'
import MuiStepper from '@material-ui/core/Stepper'
import MuiStepButton from '@material-ui/core/StepButton'
import MuiStepLabel from '@material-ui/core/StepLabel'
import { StepIconProps } from '@material-ui/core/StepIcon'
import MuiStep from '@material-ui/core/Step'
import { makeStyles } from '@material-ui/styles'

interface Props {
  activeStep: number
  steps: number[]
  completedIcon: React.ReactNode
  connector: ReactElement
  onStep?: (step: number) => void
}

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    padding: 0,
  },
  icon: {
    color: 'transparent',
    borderRadius: '50%',
    border: '1px solid #FFFFFF',
    opacity: 0.4,
  },
  active: {
    color: 'transparent !important',
    opacity: 1,
  },
  button: {
    '&.Mui-disabled': {
      cursor: 'pointer',
      pointerEvents: 'auto',
    },
  },
  label: {
    '&.Mui-disabled': {
      cursor: 'pointer',
      pointerEvents: 'auto',
      userSelect: 'all',
    },
  },
})

export default function Stepper(props: Props) {
  const { activeStep, steps, completedIcon, connector, onStep } = props
  const classes = useStyles(props)

  const onClick = useCallback((e) => onStep && onStep(parseInt(e.currentTarget.value)), [onStep])

  return (
    <MuiStepper nonLinear classes={{ root: classes.root }} activeStep={activeStep} connector={connector}>
      {steps.map((label, index) => {
        return (
          <MuiStep key={label}>
            <MuiStepButton className={classes.button} onClick={onClick} value={index}>
              <MuiStepLabel
                disabled
                className={classes.label}
                StepIconProps={{
                  classes: {
                    root: classes.icon,
                    active: classes.active,
                  },
                }}
              />

              {/* <MuiStepLabel StepIconProps={{ classes: { root: classes.icon } }}>{completedIcon}</MuiStepLabel> */}
              {/* <StepIcon icon={label} completedIcon={completedIcon} /> */}
            </MuiStepButton>
          </MuiStep>
        )
      })}
    </MuiStepper>
  )
}
