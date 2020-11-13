import React, { useState } from 'react'
import { data } from './data'

function Birthday() {
  const [friends, setFriends] = useState(data)

  return (
    <>
      <h3>{friends.length} Birthday Reminder</h3>
      {friends.map((friend) => {
        const { id, name, age, img } = friend
        return (
          <article key={id} className="birthday">
            <img src={img} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
      <button className="btn" onClick={() => setFriends([])}>
        Clear All
      </button>
    </>
  )
}

export default Birthday
