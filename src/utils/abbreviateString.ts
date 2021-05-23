export default function abbreviateString(string: string, headLength: number, tailLength: number) {
  const limit = headLength + tailLength + 3

  if (string.length > limit) {
    return string.substr(0, headLength) + '...' + string.substr(-tailLength)
  }

  return string
}
