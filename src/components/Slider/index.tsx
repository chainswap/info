import { Slider as MuiSlider, withStyles } from '@material-ui/core'

interface Props {
  defaultValue?: number
  max?: number
  step?: number
  value: number
  onChange: (event: object, value: number | number[]) => void
}

const StyledSlider = withStyles((theme) => ({
  rail: {
    background: '#FFEFEF',
  },
  track: {
    background: theme.textColor.text1,
  },
  thumb: { height: 12, width: 12, backgroundColor: theme.textColor.text1 },
}))(MuiSlider)

export default function Slider({ defaultValue = 0, max = 1, step = 0.1, value, onChange }: Props) {
  return <StyledSlider step={step} max={max} defaultValue={defaultValue} value={value} onChange={onChange} />
}
