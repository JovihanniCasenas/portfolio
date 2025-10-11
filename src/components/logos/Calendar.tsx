import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const Calendar = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
        <rect 
            width="44" 
            height="44" 
            x="18" 
            y="18" 
            fill="#fff"
        />
        <polygon 
            fill="#1e88e5" 
            points="44,36 46,39 49,37 49,54 53,54 53,32 50,32"
        />
        <path 
            fill="#1e88e5" 
            d="M38,42c1.25-1.15,2.02-2.74,2.02-4.5c0-3.5-3.07-6.33-6.82-6.33
            c-3.2,0-5.94,2.02-6.66,4.9l3.31,0.84c0.33-1.33,1.74-2.29,3.35-2.29c1.89,0,3.42,1.29,3.42,2.88
            c0,1.59-1.53,2.88-3.42,2.88h-2v3.46h2c2.16,0,3.98,1.5,3.98,3.28c0,1.81-1.73,3.28-3.86,3.28
            c-1.92,0-3.57-1.22-3.83-2.84L27,48.8c0.52,3.27,3.62,5.74,7.2,5.74c4.01,0,7.28-3.02,7.28-6.74
            C41.48,45.36,40.47,43.53,38,42z"
        />
        <polygon 
            fill="#fbc02d" 
            points="64,80 19,80 19,64 64,64 66,72"
        />
        <polygon 
            fill="#4caf50" 
            points="72,66 80,64 80,16 72,14 64,16 64,64"
        />
        <path 
            fill="#1e88e5" 
            d="M64,16l2-8l-2-8H8c-3.31,0-6,2.69-6,6v58h18V16H64z"
        />
        <polygon 
            fill="#e53935" 
            points="64,64 64,80 80,64"
        />
        <path 
            fill="#1565c0" 
            d="M74,0h-10v16h16V10C80,4.5,77.5,0,74,0z"
        />
        <path 
            fill="#1565c0" 
            d="M2,64h16v16H8c-3.3,0-6-2.7-6-6V64z"
        />
    </IconWrapper>
})

Calendar.displayName = 'Calendar'

export default Calendar
