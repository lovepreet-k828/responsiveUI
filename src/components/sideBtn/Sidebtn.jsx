import React from 'react'
import './sideBtn.css';
function Sidebtn({sideBar, setSideBar,}) {
    const handleClick = ()=>{
        if(sideBar === 0){
            setSideBar(200);
        }
        else {
            setSideBar(0);
        }
    }
  return (
    <div id = "ma" style={{paddingLeft:"2%",}}>                     
    <span onClick={handleClick} 
    style={{fontSize: 'large', cursor: 'pointer', zIndex: '0', borderTopLeftRadius: '0%', border:'none',}}>
      &#9776;</span>
</div> 
  )
}

export default Sidebtn