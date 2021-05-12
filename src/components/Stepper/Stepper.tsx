import React from 'react'
import MuiStepper from '@material-ui/core/Stepper'
import MuiStep from '@material-ui/core/Step'
import MuiStepLabel from '@material-ui/core/StepLabel'
import MuiStepConnector from '@material-ui/core/StepConnector'
import { makeStyles, withStyles } from '@material-ui/core'
import { StepIconProps } from '@material-ui/core/StepIcon'
import clsx from 'clsx'

const Stepper = withStyles({
  root: {
    background: 'transparent',
  },
  horizontal: {
    padding: 0,
  },
})(MuiStepper)

const Step = withStyles({
  root: {},
  horizontal: {
    padding: 0,
  },
})(MuiStep)

const Connector = withStyles({
  alternativeLabel: {
    top: 22,
  },
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

function StepIcon(props: StepIconProps) {
  const classes = useStepIconStyles()
  const { completed, active, icon } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <div className={classes.completed}>V</div> : <div className={classes.circle}>{icon}</div>}
    </div>
  )
}

function getSteps() {
  return [1, 2]
}

export default function _Stepper() {
  const [activeStep, setActiveStep] = React.useState(1)
  const steps = getSteps()

  return (
    <Stepper activeStep={activeStep} connector={<Connector />}>
      {steps.map((label) => {
        return (
          <Step key={label}>
            <StepIcon icon={label} />
          </Step>
        )
      })}
    </Stepper>
  )
}
