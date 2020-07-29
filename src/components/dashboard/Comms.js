import React from 'react'
import Message from './Message'

function Comms() {
  return (
    <article className="card blueBorder" id="comms">
      <article id="messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </article>
    </article>
  )
}

export default Comms
