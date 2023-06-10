import React from "react";


const Scroll = (props) =>{
  return(
    <div className="overflowComponent">
      {props.children}
    </div>
  )
}

export default Scroll