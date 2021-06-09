import React, { useState, ChangeEvent } from 'react'
import { styled } from '@material-ui/styles'
import TabToggle from '../../TabToggle/TabToggle'
import Input from '../../Input/Input'
import Divider from '../../Divider/Divider'
import DummyLogo from '../../../assets/images/dummy_logo.png'
import ManageList from './ManageList'

const UpperSection = styled('div')({
  padding: '20px 32px 0',
  display: 'grid',
  gridGap: '12px',
})

const ListWrapper = styled('div')({
  padding: '0 32px 50px',
  display: 'grid',
  gridGap: '12px',
})

export default function Manage() {
  const [tab, setTab] = useState(0)
  const [value, setValue] = useState('')
  const [, setToggled] = useState(false)
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

  function getLists() {
    // Dummy Data
    const lists = [
      {
        logo: DummyLogo,
        name: 'AAVE TOKEN LIST',
        amount: 21,
        checked: true,
      },
      {
        logo: DummyLogo,
        name: 'AAVE TOKEN LIST',
        amount: 21,
        checked: false,
      },
      {
        logo: DummyLogo,
        name: 'AAVE TOKEN LIST',
        amount: 21,
        checked: false,
      },
      {
        logo: DummyLogo,
        name: 'AAVE TOKEN LIST',
        amount: 21,
        checked: false,
      },
    ]

    return lists.map((list, i) => <ManageList key={i} {...list} onChangeSwitchToggle={onChangeSwitchToggle} />)
  }

  return (
    <>
      <UpperSection>
        <TabToggle labelOptions={['Lists', 'Tokens']} value={tab} onChange={onChangeTabToggle} />
        <Input value={value} onChange={onChangeInput} placeholder={placeholder} />
      </UpperSection>
      <Divider margin={'20px 0'} orientation={'horizontal'} />
      <ListWrapper>{getLists()}</ListWrapper>
    </>
  )
}
