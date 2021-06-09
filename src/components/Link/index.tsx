import { styled } from '@material-ui/core'
import { HTMLProps } from 'react'
import { TYPE } from '../../theme'

// export function ExternalLink({
//   target = '_blank',
//   href,
//   rel = 'noopener noreferrer',
//   ...rest
// }: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & { href: string }) {
//   const handleClick = useCallback(
//     (event: React.MouseEvent<HTMLAnchorElement>) => {
//       if (target === '_blank' || event.ctrlKey || event.metaKey) {
//       } else {
//         event.preventDefault()
//         // send a ReactGA event and then trigger a location change
//       }
//     },
//     [href, target]
//   )
//   return <a target={target} rel={rel} href={href} onClick={handleClick} {...rest} />
// }

const StyledExternalLink = styled('a')({
  textDecoration: 'none',
  '&:hover': {
    opacity: 0.6,
  },
})

export function ExternalLink({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  children,
  ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref'> & { href: string }) {
  return (
    <StyledExternalLink target={target} rel={rel} href={href} {...rest}>
      <TYPE.bold fontSize={12}>{children}</TYPE.bold>
    </StyledExternalLink>
  )
}
