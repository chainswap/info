import { Paper, useTheme } from '@material-ui/core'

export function OutlinedCard({ children, color }: { children: JSX.Element; color?: string }) {
  const theme = useTheme()

  return (
    <Paper
      variant="outlined"
      style={{ backgroundColor: 'transparent', border: `1px solid ${color ?? theme.bgColor.bg4}` }}
    >
      {children}
    </Paper>
  )
}
