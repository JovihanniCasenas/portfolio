import { forwardRef } from 'react'
import IconWrapper from './IconWrapper'

// This component follows the same pattern as developer-icons
const Trello = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { className?: string }>((props, ref) => {
  return <IconWrapper 
    ref={ref}
    {...props}
  >
    <path fill="#1E88E5" d="M0,4C0,1.8,1.8,0,4,0h40c2.2,0,4,1.8,4,4v40c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4z"></path>
    <path fill="#FFF" d="M4,6.2C4,5,5,4,6.2,4h10.6C18,4,19,5,19,6.2v35.6c0,1.2-1,2.2-2.2,2.2H6.2C5,44,4,43,4,41.8V6.2z M29,24.8c0,1.2,1,2.2,2.2,2.2h10.6c1.2,0,2.2-1,2.2-2.2V6.2C44,5,43,4,41.8,4H31.2C30,4,29,5,29,6.2V24.8z"></path>
  </IconWrapper>;
});

Trello.displayName = 'Trello';

export default Trello;