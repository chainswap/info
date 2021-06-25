import React, { ReactElement, useCallback } from 'react'
import MuiStepper from '@material-ui/core/Stepper'
import MuiStepButton from '@material-ui/core/StepButton'
import MuiStepLabel from '@material-ui/core/StepLabel'
import MuiStep from '@material-ui/core/Step'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

interface Props {
  activeStep: number
  steps: number[]
  completedIcon: React.ReactNode
  connector: ReactElement
  onStep?: (step: number) => void
  nonLinear?: boolean
}

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    padding: 0,
  },
  icon: {
    borderRadius: '50%',
    border: '1px solid #FFFFFF',
    opacity: 0.4,
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    opacity: 1,
  },
  completed: {
    color: 'transparent !important',
  },
  text: {
    color: 'white !important',
  },
  button: {
    '& .MuiStepLabel-iconContainer': {
      padding: 0,
    },
  },
})

export default function Stepper(props: Props) {
  const { activeStep, steps, completedIcon, connector, onStep, nonLinear } = props
  const classes = useStyles(props)
  const onClick = useCallback((e) => onStep && onStep(parseInt(e.currentTarget.value)), [onStep])

  return (
    <MuiStepper nonLinear={nonLinear} classes={{ root: classes.root }} activeStep={activeStep} connector={connector}>
      {steps.map((label, index) => {
        return (
          <MuiStep key={label}>
            <MuiStepButton disabled={!nonLinear} className={classes.button} onClick={onClick} value={index}>
              <MuiStepLabel
                disabled
                // className={classes.label}
                StepIconProps={{
                  classes: {
                    root: classes.icon,
                    active: classes.active,
                    completed: classes.completed,
                    text: classes.text,
                  },
                  completed: index < activeStep,
                  icon: (
                    <>
                      {index < activeStep ? (
                        completedIcon
                      ) : (
                        <div
                          className={clsx(classes.icon, {
                            [classes.active]: index === activeStep,
                          })}
                        >
                          {label}
                        </div>
                      )}
                    </>
                  ),
                }}
              />
            </MuiStepButton>
          </MuiStep>
        )
      })}
    </MuiStepper>
  )
}
