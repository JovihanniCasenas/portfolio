import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const GDocs = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
        <path 
            fill="#2196f3" 
            d="M62,76H14c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h38l20,20v50C72,73.314,69.314,76,62,76z"
        />
        <path 
            fill="#bbdefb" 
            d="M72 20L52 20 52 0z"
        />
        <path 
            fill="#1565c0" 
            d="M52 20L72 40 72 20z"
        />
        <path 
            fill="#e3f2fd" 
            d="M22 40H58V44H22z
            M22 48H58V52H22z
            M22 56H58V60H22z
            M22 64H42V68H22z"
        />
    </IconWrapper>
})

GDocs.displayName = 'GDocs'

export default GDocs
