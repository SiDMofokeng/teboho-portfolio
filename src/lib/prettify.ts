// src/lib/prettify.ts
export default function prettify(input: string) {
  try {
    const obj = JSON.parse(input)
    return JSON.stringify(obj, null, 2)
  } catch {
    return input
  }
}
