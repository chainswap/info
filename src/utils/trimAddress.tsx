export default function trimAddress(address: string, headLength: number, tailLength: number) {
  const limit = headLength + tailLength + 3

  if (address.length > limit) {
    return address.substring(0, headLength) + '...' + address.substr(-tailLength)
  }
}
