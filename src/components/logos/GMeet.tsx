import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const GMeet = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
            width="32" 
            height="32" 
            x="18" 
            y="24" 
            fill="#fff" 
            transform="rotate(-90 34 40)"
        />
        <polygon 
            fill="#1e88e5" 
            points="0,26 0,54 10,56 20,54 20,26 10,24"
        />
        <path 
            fill="#4caf50" 
            d="M68,40v28c0,3.314-2.686,6-6,6H20l-2-10l2-10h28v-14l10-2L68,40z"
        />
        <path 
            fill="#fbc02d" 
            d="M68,12v28H48v-14H20l-2-10l2-10h42C65.314,6,68,8.686,68,12z"
        />
        <path 
            fill="#1565c0" 
            d="M20,54v20H6c-3.314,0-6-2.686-6-6v-14H20z"
        />
        <polygon 
            fill="#e53935" 
            points="20,6 20,26 0,26"
        />
        <polygon 
            fill="#2e7d32" 
            points="70,40 68,56.9 48,40 68,23.1"
        />
        <path 
            fill="#4caf50" 
            d="M80,12.22v55.56c0,1.68-1.96,2.62-3.26,1.56L68,56.9v-33.8l14.74-12.44C78.04,9.6,80,10.54,80,12.22z"
        />
    </IconWrapper>
})

GMeet.displayName = 'GMeet'

export default GMeet
