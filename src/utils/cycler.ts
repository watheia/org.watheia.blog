export default function cycler(...argv) {
  const args = Array.prototype.slice.call(argv)
  let index = 0
  return {
    next: () => args[index++ % args.length],
  }
}
