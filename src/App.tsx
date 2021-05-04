import React from 'react'
import Button from './components/Button/Button'
import OutlineButton from './components/Button/OutlineButton'
import { styled } from '@material-ui/styles'
import FakeLogo from './assets/images/dummy_logo.png'

const Background = styled('div')({
  background: `#000000`,
  padding: 60,
})

function App() {
  return (
    <Background>
      <React.Fragment>
        <Button primary>Button</Button>
        <hr />
        <Button disabled={true}>Button/Disabled</Button>
        <hr />
        <Button>
          <img src={FakeLogo} alt={'fake logo'} />
          Button/Icon
        </Button>
        <hr />
        <OutlineButton>OutlineButton/Default</OutlineButton>
        <hr />
        <OutlineButton primary>OutlineButton/Primary</OutlineButton>
        <hr />
        <OutlineButton>
          <img src={FakeLogo} alt={'fake logo'} />
          OutlineButton/Icon
        </OutlineButton>
        <hr />
      </React.Fragment>
    </Background>
  )
}

export default App
