import React from 'react'
import './H2.css'

export default function H2({children, ...props}) {
  return (
    <h2 className='TitleStyle' {...props}>{children}</h2>
  )
}
