import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const MSExcel = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
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
            fill="#4CAF50" 
            d="M68.333,10H38.333v56h30c1.106,0,2-0.895,2-2V12C70.333,10.895,69.439,10,68.333,10z"
        />
        <path 
            fill="#FFF" 
            d="M53.333 20H65V26H53.333z
            M53.333 40H65V46H53.333z
            M53.333 50H65V56H53.333z
            M53.333 30H65V36H53.333z
            M38.333 20H50V26H38.333z
            M38.333 40H50V46H38.333z
            M38.333 50H50V56H38.333z
            M38.333 30H50V36H38.333z"
        />
        <path 
            fill="#2E7D32" 
            d="M42 72L2 64 2 8 42 0z"
        />
        <path 
            fill="#FFF" 
            d="M28.258,52l-4.822-9.122c-0.184-0.342-0.372-0.966-0.568-1.876h-0.074c-0.092,0.43-0.308,1.082-0.648,1.958
            L17.304,52H9.79l8.924-14.002L10.548,24h7.674l4.002,8.392c0.312,0.662,0.592,1.45,0.84,2.358h0.08
            c0.156-0.542,0.448-1.36,0.878-2.44L28.474,24h7.03l-8.398,13.878L35.968,52h-7.48V52z"
        />
    </IconWrapper>
})

MSExcel.displayName = 'MSExcel'

export default MSExcel
