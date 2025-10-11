import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const GSheets = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
            fill="#43a047" 
            d="M62,76H14c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h38l20,20v50C72,73.314,69.314,76,62,76z"
        />
        <path 
            fill="#c8e6c9" 
            d="M72 20L52 20 52 0z"
        />
        <path 
            fill="#2e7d32" 
            d="M52 20L72 40 72 20z"
        />
        <path 
            fill="#e8f5e9" 
            d="M54,40H26h-4v4v4v4v4v4v4v4h36v-4v-4v-4v-4v-4v-4v-4H54z 
            M26,44h8v4h-8V44z 
            M26,52h8v4h-8V52z 
            M26,60h8v4h-8V60z 
            M54,64H38v-4h16V64z 
            M54,56H38v-4h16V56z 
            M54,48H38v-4h16V48z"
        />

    </IconWrapper>
})

GSheets.displayName = 'GSheets'

export default GSheets
