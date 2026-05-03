import colors from "@/utils/colors"

export default function HighlightHover({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="transition-transform hover:scale-103 origin-left"
      style={{ color: colors.textLight }}
      onMouseEnter={(e) => (e.currentTarget.style.color = colors.secondary)}
      onMouseLeave={(e) => (e.currentTarget.style.color = colors.textLight)}
    >
      {children}
    </div>
  )
}
