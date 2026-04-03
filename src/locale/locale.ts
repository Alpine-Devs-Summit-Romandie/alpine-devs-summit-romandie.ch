export type SupportedLanguages = 'fr'|'en'

export const languages = ['fr', 'en']

export function switchLocale(currentLocale: SupportedLanguages): SupportedLanguages {
  let currentIndex = languages.indexOf(currentLocale)
  if (currentIndex === -1) {
    currentIndex = 0
  }

  return languages[(currentIndex + 1) % languages.length] as SupportedLanguages
}
