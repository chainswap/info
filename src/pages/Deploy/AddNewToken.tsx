import React, { useState } from 'react'
import DeployBody from './DeployBody'
import DeployAddForm from './DeployAddForm'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import { useMemo } from 'react'
import { useCallback } from 'react'
import Chain from 'models/chain'
import { ChainList, DeployData } from 'data/dummyData'
import useModal from 'hooks/useModal'
import AddTokenMessageBox from './AddTokenMessageBox'

interface Props {
  onNext: () => void
  step: number
  onStep: (step: number) => void
}

export default function AddNewToken(props: Props) {
  const { onNext, step, onStep } = props
  const [{ deploying, deployed }, setDeployStatus] = useState<{
    deploying: boolean
    deployed: boolean
  }>({
    deploying: false,
    deployed: false,
  })
  const [name, setName] = useState('')
  const [symby, setSymby] = useState('')
  const [declaims, setDeclaims] = useState('')
  const [totalSupply, setTotalSupply] = useState('')
  const [chain, setChain] = useState<Chain | null>(null)
  const [checked, setChecked] = useState(false)
  const { showModal } = useModal()

  const error = useMemo(() => {
    if (!name) {
      return 'Enter Token Name'
    }
    if (!symby) {
      return 'Enter Token Symby'
    }
    if (!declaims) {
      return 'Enter Token declaims'
    }
    if (!totalSupply) {
      return 'Enter Token Total Supply'
    }
    if (!chain) {
      return 'Select Chain'
    }
    if (!checked) {
      return 'Confirm information'
    }
  }, [name, symby, declaims, totalSupply, chain, checked])

  const onName = useCallback((e) => setName(e.target.value), [])
  const onSymby = useCallback((e) => setSymby(e.target.value), [])
  const onDeclaims = useCallback((e) => setDeclaims(e.target.value), [])
  const onTotalSupply = useCallback((e) => setTotalSupply(e.target.value), [])
  const onChainSelect = useCallback((e) => {
    setChain(ChainList.find((chain) => chain.symbol === e.target.value) ?? null)
  }, [])
  const onChecked = useCallback(() => {
    setChecked(!checked)
  }, [checked])

  const onDeploy = useCallback(() => {
    setDeployStatus({
      deploying: true,
      deployed,
    })
    setTimeout(() => {
      showModal(<AddTokenMessageBox data={DeployData.mainchainInfo} action={onNext} />)
    }, 500)
  }, [deployed, onNext, showModal])

  return (
    <DeployBody header="Add New Token" activeStep={step} onStep={onStep} nonLinear>
      <DeployAddForm
        name={name}
        symby={symby}
        declaims={declaims}
        totalSupply={totalSupply}
        chain={chain}
        checked={checked}
        onName={onName}
        onSymby={onSymby}
        onDeclaims={onDeclaims}
        onTotalSupply={onTotalSupply}
        onChain={onChainSelect}
        onChecked={onChecked}
      />
      <ErrorAndActionButton
        onAction={onDeploy}
        actionText="Deploy"
        pending={deploying}
        pendingText="Deploying"
        error={error}
      />
    </DeployBody>
  )
}
