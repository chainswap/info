import { MenuItem, makeStyles } from '@material-ui/core'
import Select from '../Select/Select'
import LogoText from '../LogoText/LogoText'
import Chain from '../../models/chain'
import InputLabel from '../InputLabel/InputLabel'
import SelectedIcon from '../../assets/images/selected_icon.svg'

interface Props {
  label: string
  disabled?: boolean
  chainList: Chain[]
  selectedChain: Chain | null
  onChange?: (e: any) => void
  width?: string
  active?: boolean
}

const useStyles = makeStyles({
  menuItem: {
    '&::before': {
      content: '""',
      width: 30,
      height: 20,
      display: 'flex',
      justifyContent: 'center',
    },
    '&.Mui-selected::before': {
      content: `url(${SelectedIcon})`,
      width: 30,
      height: 20,
      display: 'flex',
      justifyContent: 'center',
    },
  },
})

export default function ChainSelect(props: Props) {
  const classes = useStyles(props)
  const { label, disabled, chainList, onChange, selectedChain, width, active } = props

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Select
        defaultValue={selectedChain?.symbol}
        value={selectedChain?.symbol ?? ''}
        disabled={disabled}
        onChange={onChange}
        placeholder={'Select Chain'}
        width={width}
        primary={active}
      >
        {chainList.map((option) => (
          <MenuItem
            className={classes.menuItem}
            value={option.symbol}
            key={option.symbol}
            selected={selectedChain?.symbol === option.symbol}
          >
            <LogoText logo={option.logo} text={option.symbol} />
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
