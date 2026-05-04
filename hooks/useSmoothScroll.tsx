"use client"

import { useCallback } from "react"

type SmoothScrollOptions = {
  duration?: number
  headerOffset?: number
}

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

function getScrollableParent(el: HTMLElement): HTMLElement | null {
  let parent = el.parentElement
  while (parent) {
    const { overflowY } = window.getComputedStyle(parent)
    if (overflowY === "auto" || overflowY === "scroll") return parent
    parent = parent.parentElement
  }
  return null
}

export function useSmoothScroll(defaults: SmoothScrollOptions = {}) {
  const { duration = 900, headerOffset = 0 } = defaults

  const scrollToId = useCallback(
    (id: string, options: SmoothScrollOptions = {}) => {
      const el = document.getElementById(id)
      if (!el) return

      const container = getScrollableParent(el)
      if (!container) return

      const finalDuration = options.duration ?? duration
      const finalHeaderOffset = options.headerOffset ?? headerOffset

      const startY = container.scrollTop
      const targetY =
        el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop -
        finalHeaderOffset
      const distance = targetY - startY
      const startTime = performance.now()

      const step = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / finalDuration, 1)
        const eased = easeInOutCubic(progress)

        container.scrollTop = startY + distance * eased

        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    },
    [duration, headerOffset],
  )

  const onAnchorClick = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      scrollToId(id)
    },
    [scrollToId],
  )

  return { scrollToId, onAnchorClick }
}
