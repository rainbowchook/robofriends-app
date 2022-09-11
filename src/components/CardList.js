import React from 'react'
import './CardList.css'
import Card from './Card'

//his code
// const CardList = ({robots}) => {
    
//     const cardComponent = robots.map((user, i) => (
//         <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
//     ))
//     return (
//       <>
//         {cardComponent}
//       </>
//     )
//   }

  //my code
const CardList = ({robots}) => {
  // if(true) {
  //   throw new Error('Noooo')
  // }
  return (
    <>
      {robots.map(({id, name, username, email}) => (
        <Card 
            key={id} 
            id={id} 
            name={name} 
            username={username} 
            email={email}
        />
      ))}
    </>
  )
}

export default CardList