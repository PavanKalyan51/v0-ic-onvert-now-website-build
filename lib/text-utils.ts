export function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length
}

export function countCharacters(text: string, includeSpaces = true): number {
  return includeSpaces ? text.length : text.replace(/\s/g, "").length
}

export function countSentences(text: string): number {
  return text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
}

export function countParagraphs(text: string): number {
  return text.split(/\n\n+/).filter((p) => p.trim().length > 0).length
}

export function convertCase(
  text: string,
  caseType: "upper" | "lower" | "title" | "sentence" | "camel" | "snake",
): string {
  switch (caseType) {
    case "upper":
      return text.toUpperCase()
    case "lower":
      return text.toLowerCase()
    case "title":
      return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    case "sentence":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    case "camel":
      return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    case "snake":
      return text
        .replace(/\s+/g, "_")
        .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
        .replace(/^_/, "")
    default:
      return text
  }
}

export function removeDuplicateLines(text: string): string {
  const lines = text.split("\n")
  const unique = Array.from(new Set(lines))
  return unique.join("\n")
}

export function getReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = countWords(text)
  return Math.ceil(words / wordsPerMinute)
}
