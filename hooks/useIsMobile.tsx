import { useEffect, useState } from "react"

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return window.innerHeight > window.innerWidth
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)")

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener("change", handler)

    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return isMobile
}
