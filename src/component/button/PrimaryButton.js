import React from 'react'
import './PrimaryButton.css'

const PrimaryButton = ({children, color}) => {
  return (
    <button style={{color:`${color}`, borderColor:`${color}`}}>
        {children}
    </button>
  )
}

export default PrimaryButton