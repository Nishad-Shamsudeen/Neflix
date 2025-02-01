import React from 'react'
import './Message.css'
import { Typewriter,Cursor } from 'react-simple-typewriter';
function Message() {
  const text=Typewriter({
    words:['More features on the way! Thanks for your support. '],
    loop:{},
  })
  return (
    <div>
      <h1 className='moving-message'>
        <span style={{fontWeight:'bold',color:'white'}}>
          {text}
        </span>
        <Cursor/>
      </h1>
    </div>
  )
}

export default Message
