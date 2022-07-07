import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

export default function Categories({options}) {
 
  // 
  return (
    <>
    <div style={{textAlign:"center"}}>
  <div style={{marginTop:"2%", fontWeight:"bold", fontSize:"20px"}}>
  Hassle Free Planning and Booking at Our Guaranteed Best Prices.
  </div>
  <Link to="/" style={{marginTop:"2%", fontSize:"15px",color:"red",textDecoration:"none"}}>Take our Price Challenge</Link>
  <div style={{margin:"2%", fontSize:"18px"}}>10,000+ Events Organized till Date
Present in 25 Cities
Over 20,000+ Wedding Venues and Vendors</div>
  </div>

  <div >
    <div style={{textAlign:"center"}}>
      <div>Browse Wedding Venues and Vendors</div>
      <div><i>Get upto 30% off</i></div>
    </div>
    
    <div className="cardContainer" style={{display:"flex",justifyContent:"space-evenly", 
    textAlign:"center", alignItems:"space-between",  flexWrap:'wrap'}}>
    {
      options.map((option)=>{
        return (
          <div className="card" style={{marginBottom:"2%", backgroundColor:"yellow",height:"270px",fontSize:"20px"}}>
            <div className="cardImage" style={{backgroundColor:"red",height:"200px"}}></div>
            <div className="cardText" >{option}</div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{borderRight:"2px solid black",width:"50%"}}>
              {option}</div>
            <div style={{width:"50%"}} >{option}</div>
              </div>
          </div>
        )
      })
    }
    </div>
  </div>
    </>
  );
}

