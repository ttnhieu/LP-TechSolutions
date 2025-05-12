export function useScrollToSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -64 // Ví dụ: header cao 64px
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return { scrollTo }
}
