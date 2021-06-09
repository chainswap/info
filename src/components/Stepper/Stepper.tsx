import React, { ReactElement } from 'react'
import MuiStepper from '@material-ui/core/Stepper'
import MuiStep from '@material-ui/core/Step'
import { makeStyles } from '@material-ui/styles'
import { StepIconProps } from '@material-ui/core/StepIcon'
import clsx from 'clsx'

interface Props {
  activeStep: number
  steps: number[]
  completedIcon: React.ReactNode
  connector: ReactElement
}

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    padding: 0,
  },
})

const useStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    '& $circle': {
      opacity: 1,
    },
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '1px solid #FFFFFF',
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.4,
  },
  completed: {
    color: '#24FF00',
    width: 24,
    height: 24,
    borderRadius: '50%',
    border: '1px solid #24FF00',
    textAlign: 'center',
  },
})

function StepIcon(props: StepIconProps & { completedIcon: React.ReactNode }) {
  const classes = useStepIconStyles()
  const { completed, active, icon, completedIcon } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? completedIcon : <div className={classes.circle}>{icon}</div>}
    </div>
  )
}

export default function Stepper(props: Props) {
  const { activeStep, steps, completedIcon, connector } = props
  const classes = useStyles(props)

  return (
    <MuiStepper className={classes.root} activeStep={activeStep} connector={connector}>
      {steps.map((step) => {
        return (
          <MuiStep key={step}>
            <StepIcon icon={step} completedIcon={completedIcon} />
          </MuiStep>
        )
      })}
    </MuiStepper>
  )
}
