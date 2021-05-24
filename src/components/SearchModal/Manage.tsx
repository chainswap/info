import React, { useState, ChangeEvent } from 'react'
import TabToggle from '../TabToggle/TabToggle'
import Input from '../Input/Input'
import Divider from '../Divider/Divider'
import SwitchToggle from '../SwitchToggle/SwitchToggle'

export default function Manage() {
  const [tab, setTab] = useState(0)
  const [value, setValue] = useState('')
  const [toggled, setToggled] = useState(false)
  const placeholder = 'https:// or ipfs or ENS name'

  function onChangeTabToggle(e: ChangeEvent<{}>, newValue: number) {
    setTab(newValue)
  }

  function onChangeSwitchToggle(e: ChangeEvent<HTMLInputElement>) {
    setToggled(e.target.checked)
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <>
      <TabToggle labelOptions={['Lists', 'Tokens']} value={tab} onChange={onChangeTabToggle} />
      <Input value={value} onChange={onChangeInput} placeholder={placeholder} />
      <Divider margin={'20px 0'} orientation={'horizontal'} />
      <SwitchToggle checked={toggled} onChange={onChangeSwitchToggle} />
    </>
  )
}
