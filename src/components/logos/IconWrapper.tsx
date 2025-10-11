import { SvgIcon, SxProps } from "@mui/material"
import { forwardRef } from 'react'

interface CustomIconProps {
  sx?: SxProps
  children: React.ReactNode
  className?: string
  // Add event handlers that Material UI's Tooltip needs
  onMouseEnter?: React.MouseEventHandler<SVGSVGElement>
  onMouseLeave?: React.MouseEventHandler<SVGSVGElement>
  onClick?: React.MouseEventHandler<SVGSVGElement>
  // Allow any other props
  [key: string]: any
}

export const IconWrapper = forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => {
  const { sx, children, ...otherProps } = props
  
  return (
    <SvgIcon 
      ref={ref}
      viewBox="0 0 48 48"
      sx={{ 
        fontSize: 40,
        width: '2em',
        height: '2em',
        padding: 0,
        margin: 0,
        display: 'block', // Helps remove any extra space
        '& path, & circle, & polygon': {
          // Make sure all SVG elements use the full available space
          transform: 'scale(1)',
          transformOrigin: 'center',
        },
        ...sx 
      }}
      // Pass through all other props including event handlers needed for Tooltip
      {...otherProps}
    >
      {children}
    </SvgIcon>
  )
})

export default IconWrapper
