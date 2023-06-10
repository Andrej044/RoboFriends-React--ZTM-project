import React from "react";

 const Card = ({id, name, email, username}) => {
  return(
    <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${username}?200x200`} alt ={`robot aka ${name}`}/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}


export default Card;