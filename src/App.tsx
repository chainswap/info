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
        {/* Button */}
        <Button size="small">Button/Small</Button>
        <hr />
        <Button size="large">Button/Large</Button>
        <hr />
        <Button size="large" disabled={true}>
          Button/Disabled
        </Button>
        <hr />
        <Button size="large">
          <img src={FakeLogo} alt={'fake logo'} />
          Button/Icon
        </Button>
        <hr />
        {/* OutlineButton Default */}
        <OutlineButton size="small">OutlineButton/Default/Small</OutlineButton>
        <hr />
        <OutlineButton size="large">OutlineButton/Default/Large</OutlineButton>
        <hr />
        <OutlineButton size="small">
          <img src={FakeLogo} alt={'fake logo'} />
          OutlineButton/Default/Small/Icon
        </OutlineButton>
        <hr />
        <OutlineButton size="large">
          <img src={FakeLogo} alt={'fake logo'} />
          OutlineButton/Default/Large/Icon
        </OutlineButton>
        <hr />
        {/* Outline Button Primary */}
        <OutlineButton size="small" primary>
          OutlineButton/Default/Small
        </OutlineButton>
        <hr />
        <OutlineButton size="large" primary>
          OutlineButton/Default/Large
        </OutlineButton>
        <hr />
        <OutlineButton size="small" primary>
          <img src={FakeLogo} alt={'fake logo'} />
          OutlineButton/Default/Small/Icon
        </OutlineButton>
        <hr />
        <OutlineButton size="large" primary>
          <img src={FakeLogo} alt={'fake logo'} />
          OutlineButton/Default/Large/Icon
        </OutlineButton>
        <hr />
      </React.Fragment>
    </Background>
  )
}

export default App
