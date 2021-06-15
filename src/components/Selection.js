import React, {useState} from 'react'
const Selection = (props) =>{
  const[selectionStyle,updateSlectionStyle]=useState({backgroung:''});
  return(
    <div className="fix-box" style={selectionStyle} onClick={()=>{props.applayColor(updateSlectionStyle)}}>
    <h2 class="subheading">Selection</h2>
    </div>
  )
}
export default Selection;
