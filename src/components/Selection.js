import React, {useState} from 'react'
function Selection(props){
  const {applyColor}=props;
  const[selectionStyle,updateSlectionStyle]=useState({backgroung:''});
  return(
    <div className="fix-box" style={selectionStyle} onClick={()=>{applayColor(updateSelectionStyle)}}>
    <h2 class="subheading">Selection</h2>
    </div>
  )
}
export default Selection
