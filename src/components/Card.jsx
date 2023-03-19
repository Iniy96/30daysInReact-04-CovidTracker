import React from 'react'

const card = (props) => {
  return (
    <div className={`singleCard border ${props.borderColor}`} >
        <div><span className='fs-4'>{props.topic}</span></div>
        <div className='mainText'>{props.data}</div>
    </div>
  )
}

export default card