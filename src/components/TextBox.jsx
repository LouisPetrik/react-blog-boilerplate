import React from "react"
import "./TextBox.css"

const TextBox = (props) => {
   return (
      <div className="Wrapper">
         {props.content}
      </div>
   )
}

export default TextBox