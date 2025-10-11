import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const MSPowerPoint = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
            fill="#dc4c2c" 
            d="M6,40c0,19.882,16.118,36,36,36s36-16.118,36-36H42H6z"
        />
        <path 
            fill="#f7a278" 
            d="M42,4v36h36C78,20.118,61.882,4,42,4z"
        />
        <path 
            fill="#c06346" 
            d="M42,4C24.118,4,6,20.118,6,40h36V4z"
        />
        <path 
            fill="#9b341f" 
            d="M34.638,60H1.362C-0.494,60-2,58.494-2,56.638V23.362C-2,21.506,-0.494,20,1.362,20h33.276
            C36.494,20,38,21.506,38,23.362v33.276C38,58.494,36.494,60,34.638,60z"
        />
        <path 
            fill="#fff" 
            d="M19.346,30.024H10v20h4.048v-7.042H18.6c3.752,0,6.794-3.042,6.794-6.794v-0.116
            C25.394,32.732,22.686,30.024,19.346,30.024z M21.14,36.716c0,1.718-1.394,3.112-3.112,3.112h-3.98v-6.65h3.98
            c1.718,0,3.112,1.394,3.112,3.112V36.716z"
        />

    </IconWrapper>
})

MSPowerPoint.displayName = 'MSPowerPoint'

export default MSPowerPoint
