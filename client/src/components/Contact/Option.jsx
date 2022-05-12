import React from 'react'

export default function Option({classes, icon, contact}) {
  return (
    <div className={classes}>
        {icon}
        <text>{contact}</text>
    </div>
  )
}
