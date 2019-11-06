import React from 'react';
import '../styles/input.scss'

const SeachBox = ({onchange, value}) => {
  return(
    <input className='input' type='text' placeholder='search' onChange={onchange} value={value}/>
  )
}

export default SeachBox