export default interface Notification {
  summary: string
  status: 'success' | 'pending' | 'failure'
}
