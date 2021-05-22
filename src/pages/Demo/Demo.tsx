import React, { useState, ChangeEvent } from 'react'
import SwitchToggle from '../../components/SwitchToggle/SwitchToggle'

export default function Demo() {
  const [toggled, setToggled] = useState(false)

  function onToggle(e: ChangeEvent<HTMLInputElement>) {
    setToggled(e.target.checked)
  }

  return (
    <>
      <SwitchToggle checked={toggled} onChange={onToggle} />
    </>
  )
}
