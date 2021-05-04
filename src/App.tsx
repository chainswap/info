import React from 'react'
import Button from './components/Button/Button'
import OutlineButton from './components/Button/OutlineButton'
import { styled } from '@material-ui/styles'
import FakeLogo from './assets/images/dummy_logo.png'

const Background = styled('div')({
  background: `#000000`,
  height: '100%',
  width: '100%',
})

function App() {
  return (
    <Background>
      <React.Fragment>
        <Button text="primary"></Button>
        <hr />
        <Button text="disabled" disabled={true}></Button>
        <hr />
        <Button text="background color #C0C0C0" background="#C0C0C0"></Button>
        <hr />
        <Button text="text color #fff" color="#fff"></Button>
        <hr />
        <OutlineButton primary>Outline/Primary</OutlineButton>
        <hr />
        <OutlineButton>Outline/Default</OutlineButton>
        <hr />
        <OutlineButton>
          <img src={FakeLogo} alt={'fake logo'} />
          Outline / Icon
        </OutlineButton>
        <hr />
      </React.Fragment>
    </Background>
  )
}

export default App
