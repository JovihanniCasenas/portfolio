import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const Zoom = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
  return <IconWrapper 
    ref={ref}
    {...props}
  >
    <circle cx="24" cy="24" r="24" fill="#2196f3"></circle>
    <path fill="#fff" d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"></path>
    <polygon fill="#fff" points="37,31 31,27 31,21 37,17"></polygon>
  </IconWrapper>
})

Zoom.displayName = 'Zoom'

export default Zoom
