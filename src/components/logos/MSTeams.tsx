import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const MSTeams = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
    return <IconWrapper
        ref={ref}
        viewBox="0 0 80 80"
        sx={{
            fontSize: 80,
            width: '80px',
            height: '80px'
        }}
        {...props}
    >
        <path fill="#5c6bc0" d="M69.167 21.667A5.833 5.833 0 1 0 69.167 33.334 5.833 5.833 0 1 0 69.167 21.667zM6.667 66.667l38.333 6.666V6.667L6.667 13.333V66.667z"></path>
        <path fill="#fff" d="M35 27.117L35 31.667 28.35 31.967 28.317 51.733 23.35 51.583 23.35 32.15 16.667 32.417 16.667 28.233z"></path>
        <path fill="#5c6bc0" d="M60 23.333c0 3.683-2.983 6.667-6.667 6.667-2 0-3.783-0.883-5-2.267v-8.8c1.217-1.383 3-2.267 5-2.267C57.017 16.667 60 19.65 60 23.333zM63.333 38.333v18.334c0 0 2.611 0 5.833 0 2.937 0 5.342-2.177 5.75-5H75v-13.334H63.333zM48.333 33.333v28.334c0 0 2.612 0 5.834 0 2.937 0 5.342-2.177 5.75-5H60V33.333H48.333z"></path>

    </IconWrapper>
})

MSTeams.displayName = 'MSTeams'

export default MSTeams
