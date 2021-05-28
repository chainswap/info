import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Image from '../Image/Image'

import CheckboxIcon from '../../assets/images/checkbox.svg'
import CheckboxCheckedIcon from '../../assets/images/checkbox_checked.svg'

interface Props {
  checked: boolean
  onCheck: () => void
  label: string
}

const Icon = () => {
  return <Image src={CheckboxIcon} alt={'checkbox icon'} />
}

const CheckedIcon = () => {
  return <Image src={CheckboxCheckedIcon} alt={'checkbox checked icon'} />
}

const useStyles = makeStyles({
  root: {
    margin: 0,
  },
  checkbox: {
    padding: 0,
    marginRight: 12,
  },
})

export default function _Checkbox(props: Props) {
  const classes = useStyles(props)
  const { checked, onCheck, label } = props
  return (
    <FormControlLabel
      classes={{ root: classes.root }}
      value="right"
      control={<Checkbox className={classes.checkbox} icon={<Icon />} checkedIcon={<CheckedIcon />} />}
      label={label}
      labelPlacement="end"
    />
  )
}
