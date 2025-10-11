import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const GoogleAnalytics = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
        <path d="M52 11.6v52.8c0 5.9 4.08 9.2 8.4 9.2 4 0 8.4-2.8 8.4-9.2V12c0-5.42-4-8.8-8.4-8.8s-8.4 3.73-8.4 8.4z" fill="#f9ab00"/>
        <path d="M30 38.4v26c0 5.9 4.08 9.2 8.4 9.2 4 0 8.4-2.8 8.4-9.2V38.8c0-5.42-4-8.8-8.4-8.8s-8.4 3.73-8.4 8.4z" fill="#e37400"/>
        <circle cx="16.4" cy="65.2" r="8.4" fill="#e37400"/>
    </IconWrapper>
})

GoogleAnalytics.displayName = 'GoogleAnalytics'

export default GoogleAnalytics
