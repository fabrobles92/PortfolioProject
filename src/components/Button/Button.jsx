import React from 'react'
import './Button.css'

export default function Button({children, ...props}) {
  return (
    <div className='Button'>
        <button className='ButtonStyle' {...props}>
            {children}
        </button>        
    </div>
  )
}
