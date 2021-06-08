export default interface Transaction {
  summary: string
  status: 'success' | 'pending' | 'failure'
}
