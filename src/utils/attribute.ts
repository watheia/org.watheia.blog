export default function attribute(name: string, value: unknown, condition: boolean) {
  if (typeof condition === "undefined") {
    condition = true
  }
  return condition ? { [name]: value } : null
}
