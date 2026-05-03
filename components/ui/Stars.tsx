import "./Stars.css"

interface StarData {
  id: number
  size: string
  left: string
  top: string
  duration: string
  delay: string
  opacity: string
}

interface StarsProps {
  count?: number
}

// Create this outside the component to ensure it's only generated once
let generatedStars: StarData[] | null = null

const Stars = ({ count = 100 }: StarsProps) => {
  const getStars = (): StarData[] => {
    // Only generate stars once across all renders and component mounts
    if (generatedStars) {
      return generatedStars
    }
    const newStars: StarData[] = []
    for (let i = 0; i < count; i++) {
      // Randomly assign star size
      const size = Math.random()
      let sizeClass = "star"
      if (size > 0.9) {
        sizeClass = "star large"
      } else if (size > 0.6) {
        sizeClass = "star medium"
      }
      const star: StarData = {
        id: i,
        size: sizeClass,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 7}s`,
        delay: `${Math.random() * 5}s`,
        opacity: `${0.5 + Math.random() * 0.5}`,
      }
      newStars.push(star)
    }
    generatedStars = newStars
    return newStars
  }

  const stars = getStars()

  // We don't need the useEffect anymore as we're using React's rendering system
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={star.size}
          style={
            {
              left: star.left,
              top: star.top,
              "--duration": star.duration,
              "--delay": star.delay,
              "--opacity": star.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

export default Stars
