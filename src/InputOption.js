import React from 'react'
import "./InputOption.css" 

function InputOption({Icon,name,color}) {
  return (
    <div className='input__option'>
          {Icon && <Icon style={ {color:color} }className="inputOption__icon" />}
          <h4>{name}</h4>
    </div>
  )
}

export default InputOption
