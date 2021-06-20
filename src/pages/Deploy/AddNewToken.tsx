import React, { useState } from 'react'
import DeployBody from './DeployBody'
import DeployAddForm from './DeployAddForm'
import Checkbox from 'components/Checkbox/Checkbox'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import { useMemo } from 'react'
import { useCallback } from 'react'

export default function AddNewToken() {
  const [{ confirmed, deploying }, setDeployStatus] = useState<{
    confirmed: boolean
    deploying: boolean
    deployed: boolean
  }>({
    confirmed: false,
    deploying: false,
    deployed: false,
  })

  const [{ name, symby, declaims, totalSupply, checked, chainId }, setFormData] = useState<{
    name: string
    symby: string
    declaims: string
    totalSupply: string
    checked: boolean
    chainId: string
  }>({ name: '', symby: '', declaims: '', totalSupply: '', checked: false, chainId: '' })

  const getInstruction = useMemo(() => {
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
  }, [name, symby, declaims, totalSupply])

  const onChecked = useCallback(() => {
    setFormData({
      name,
      symby,
      declaims,
      totalSupply,
      checked: !checked,
      chainId,
    })
  }, [name, symby, declaims, totalSupply, checked])

  return (
    <DeployBody header="Add New Token" activeStep={0}>
      <DeployAddForm
        name={name}
        symby={symby}
        declaims={declaims}
        totalSupply={totalSupply}
        chainId={chainId}
        checked={checked}
        onName={() => {}}
        onSymby={() => {}}
        onDeclaims={() => {}}
        onTotalSupply={() => {}}
        onChainId={() => {}}
        onChecked={onChecked}
      />
      <ErrorAndActionButton
        onAction={() => {}}
        actionText="Deploy"
        pending={deploying}
        pendingText="Deploying"
        instruction={!confirmed}
        instructionText={getInstruction}
      />
    </DeployBody>
  )
}
