import React, { FC } from 'react'
import { MaxWithWrapperInterface as  MaxWithWrapperProps} from '@/interfaces/ts-interfaces'

const MaxWithWrapper: FC<MaxWithWrapperProps> = ({children, className}) => {
  return (
    <div className={`w-screen max-w-7xl mx-auto  ${className}`}>
        {children}
    </div>
  )
}

export default MaxWithWrapper
