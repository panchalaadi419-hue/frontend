import React from 'react'
// import 'Usercard.css';

function Usercard({name,age,location}) {
  return (
    <div className="usercard">
        <h2>{name}</h2>
        <h2><strong>Age:</strong>{age}</h2>
        <h2><strong>Location:</strong>{location}</h2>
      
    </div>
  )
}

export default Usercard

