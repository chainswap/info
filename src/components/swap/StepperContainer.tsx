import React from 'react'
import Row, { RowBetween } from '../Row/index'
import Button from '../Button/Button'
import Stepper from '../Stepper/Stepper'

interface Props {
  onDeposit: () => void
  onWithdraw: () => void
  depositEnabled: boolean
  withdrawEnabled: boolean
  from: string
  to: string
}

export default function StepperContainer(props: Props) {
  const { depositEnabled, withdrawEnabled, onDeposit, onWithdraw, from, to } = props

  return (
    <>
      <RowBetween>
        <Button size="large" width="216px" disabled={!depositEnabled} onClick={onDeposit}>
          Deposit in {from} Chain
        </Button>
        <Button size="large" width="216px" disabled={!withdrawEnabled} onClick={onWithdraw}>
          Withdraw from {to} Chain
        </Button>
      </RowBetween>
      <Row justify={'center'}>
        <Stepper />
      </Row>
    </>
  )
}
