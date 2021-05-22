import React, { useState, ChangeEvent } from 'react'
import SwitchToggle from '../../components/SwitchToggle/SwitchToggle'
import TabToggle from '../../components/TabToggle/TabToggle'

export default function Demo() {
  const [toggled, setToggled] = useState(false)
  const [value, setValue] = useState(0)

  function onChangeSwitchToggle(e: ChangeEvent<HTMLInputElement>) {
    setToggled(e.target.checked)
  }

  function onChangeTabToggle(e: ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  return (
    <>
      <SwitchToggle checked={toggled} onChange={onChangeSwitchToggle} />
      <TabToggle labelOptions={['Lists', 'Tokens']} value={value} onChange={onChangeTabToggle} />
    </>
  )
}
