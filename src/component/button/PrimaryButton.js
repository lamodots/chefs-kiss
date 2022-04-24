import React from 'react'
import './PrimaryButton.css'

const PrimaryButton = ({children, color, shadow}) => {
  return (
    <button style={{color:`${color}`, borderColor:`${color}`}} className={`${shadow}`}>
        {children}
    </button>
  )
}

export default PrimaryButton