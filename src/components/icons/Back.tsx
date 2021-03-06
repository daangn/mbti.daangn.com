import * as React from 'react'

const Back: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#212529' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5659 5.5657C11.8783 5.25328 11.8783 4.74675 11.5659 4.43433C11.2535 4.12191 10.7469 4.12191 10.4345 4.43433L3.43451 11.4343C3.12209 11.7467 3.12209 12.2533 3.43451 12.5657L10.4345 19.5657C10.7469 19.8781 11.2535 19.8781 11.5659 19.5657C11.8783 19.2533 11.8783 18.7467 11.5659 18.4343L5.93157 12.8H20.0002C20.442 12.8 20.8002 12.4418 20.8002 12C20.8002 11.5582 20.442 11.2 20.0002 11.2H5.93157L11.5659 5.5657Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Back)
