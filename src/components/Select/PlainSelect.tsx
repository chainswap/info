import React, { useState } from 'react'
import { Select as MuiSelect, makeStyles, createStyles, Theme } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useCallback } from 'react'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useRef } from 'react'

interface Props {
  children?: React.ReactNode
  placeholder: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50px',
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 0.5)',
      '&::before': {
        content: ({ placeholder }: Props) => '"' + placeholder + '"',
        position: 'absolute',
        fontSize: 14,
        fontWeight: 400,
      },
      '&:hover': {
        color: 'rgba(255, 255, 255, 1)',
      },
    },
    icon: {
      color: '#FFFFFF',
    },
    paper: {
      width: 148,
      borderRadius: 14,
      marginTop: 6,
      '& ul': {
        background: '#0F0F10',
        padding: '10px 20px 18px 20px',
      },
      '& li': {
        fontSize: 13,
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.4)',
        padding: '8px 0',
      },
      '& li:hover': {
        color: theme.palette.primary.main,
      },
    },
    base: {
      width: 'inherit',
      // borderRadius: theme.shape.borderRadius,
      '&.Mui-focused': {
        color: 'white',
        '& .MuiSelect-root:before': {
          color: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  })
)

export default function Select(props: Props) {
  const classes = useStyles(props)
  const { children } = props

  const blur = () => {
    setTimeout(() => {
      return (document.activeElement as HTMLElement).blur()
    }, 0)
  }

  return (
    <MuiSelect
      disableUnderline
      className={classes.base}
      classes={{ root: classes.root, icon: classes.icon }}
      onClose={blur}
      MenuProps={{
        classes: { paper: classes.paper },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
      IconComponent={ExpandMoreIcon}
    >
      {children}
    </MuiSelect>
  )
}
