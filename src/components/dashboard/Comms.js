import React from 'react'
import Message from './Message'

function Comms() {
  return (
    <article className="card" id="comms">
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
