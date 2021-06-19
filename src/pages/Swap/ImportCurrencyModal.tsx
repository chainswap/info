import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { Text } from 'rebass'
import Button from '../../components/Button/Button'
import { ReactComponent as WarningIcon } from '../../assets/images/warning_icon.svg'
import CoinGecko from '../../assets/images/coin_gecko.svg'
import Image from '../../components/Image/Image'
import TextButton from '../../components/Button/TextButton'
import Checkbox from '../../components/Checkbox/Checkbox'
import Modal from '../../components/Modal/Modal'
import { useCallback } from 'react'
import useModal from 'hooks/useModal'
import SelectCurrencyModal from './SelectCurrencyModal'
import OutlineButton from 'components/Button/OutlineButton'
import Aave from '../../assets/images/currency/aave.svg'
import { TYPE } from '../../theme/index'

const dummyData = {
  logo: Aave,
  name: 'TOKEN NAME1',
  symbol: 'TOKEN',
  contract: '0xKos369cd4se1oos369cd4se1s369cd4se187ujv',
  src: 'via Coingecko',
  srcIcon: CoinGecko,
}

export default function Import() {
  const [checked, setChecked] = useState(false)
  const { showModal } = useModal()

  function onCheck() {
    setChecked(!checked)
  }

  const onReturnClick = useCallback(() => {
    showModal(<SelectCurrencyModal />)
  }, [])

  return (
    <Modal title="Import Token" onReturnClick={onReturnClick} closeIcon>
      <Box padding="0 32px 37px 32px">
        <Box
          bgcolor="rgba(0,0,0,.2)"
          border="1px solid rgba(255,255,255,0.2)"
          borderRadius="22px"
          padding="24px 24px 25px 24px"
          width="416px"
          marginBottom="16px"
        >
          <Box display="flex" marginBottom="8px" alignItems="center">
            <Image src={dummyData.logo} alt={'token icon'} />
            <TYPE.bold marginLeft={12}>{dummyData.name}</TYPE.bold>
            <TYPE.gray marginLeft={0.8}>{dummyData.symbol}</TYPE.gray>
          </Box>
          <TextButton fontSize={14} fontWeight={400} primary>
            {dummyData.contract}
          </TextButton>
          <Box display={'flex'} marginTop={'6px'}>
            <Image src={dummyData.srcIcon} alt={'src icon'} />
            <Text fontSize={12} fontWeight={400} opacity={0.6} marginLeft={'6px'}>
              via {dummyData.src}
            </Text>
          </Box>
        </Box>
        <Box
          width="416px"
          bgcolor="rgba(152, 103, 255, 0.08)"
          borderRadius="22px"
          border="1px solid rgba(152, 103, 255, 0.6)"
          padding="24px 24px 26px 24px"
          marginBottom="24px"
        >
          <WarningIcon />
          <Text fontSize={18} fontWeight={500} margin={'12px 0 12px 0'}>
            Bridge at your own risk
          </Text>
          <TYPE.gray>
            Anyone can bridge a token, including creating fake versions of existing tokens that claim to represent
            projects
          </TYPE.gray>
          <Box display="flex" alignItems="center" marginTop="12px">
            <Checkbox checked={checked} onChange={onCheck} label="I understand" />
          </Box>
        </Box>
        {!checked && <OutlineButton primary>Please agree to the risks</OutlineButton>}
        {checked && <Button>Import</Button>}
      </Box>
    </Modal>
  )
}
