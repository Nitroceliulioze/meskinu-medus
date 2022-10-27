import React from 'react'

const Button = (props) => {
  return (
    <div className='button-wrapper'>
        <button className='button'>{props.data}</button>
    </div>
    
  )
}

export default Button