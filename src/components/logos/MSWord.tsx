import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const MSWord = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
        <path fill="#2196F3" d="M70,8H38v56h32c1.105,0,2-0.895,2-2V10C72,8.895,71.105,8,70,8z"></path>
        <path fill="#FFF" d="M38 20.002H66V24H38zM38 28H66V32H38zM38 36.002H66V40.002H38zM38 44.002H66V48H38zM38 52H66V56.002H38z"></path>
        <path fill="#0D47A1" d="M42 72L2 64 2 8 42 0z"></path>
        <path fill="#FFF" d="M30.334,52.024H24.9l-3.604-17.976c-0.196-0.954-0.31-1.992-0.348-3.152h-0.064c-0.086,1.274-0.22,2.324-0.394,3.152l-3.7,17.976h-5.654l-5.72-28.028h5.35l3.072,18.656c0.124,0.808,0.222,1.876,0.286,3.214h0.084c0.038-0.996,0.196-2.102,0.446-3.29l3.94-18.582h5.244l3.57,18.808c0.124,0.696,0.238,1.692,0.34,3.022h0.062c0.04-1.03,0.146-2.07,0.32-3.126l3.006-18.704h4.936L30.334,52.024z"></path>
    </IconWrapper>
})

MSWord.displayName = 'MSWord'

export default MSWord
