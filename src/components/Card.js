import React from 'react'
import './Card.css'

const Card = ({id, name, username, email}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3m ma2 grow b2w-2 shadow-5'>
        {/* <img src={`https://robohash.org/${id}?size=200x200&ignoreext=false&bgset=bg${Math.floor(Math.random() * 2) + 1}`} alt="robots" /> */}
        <img src={`https://robohash.org/${id}`} alt="robots" />
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card