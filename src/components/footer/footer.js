import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

export default function Footer() {
  const cities=['Mumbai', 'Delhi', 'Bangalore', 'Jaipur', 'Pune']
  const venues =['Party','Banquet','Marriage','Cocktail venues','Birthday Party',]
  const vendors =['Photographers','Makeup Artists','Mehndi Artists','All Vendors']

  const footerOffers =['Partner Login', 'FAQ', 'Terms & Conditions', 'Privacy Policy', 'Newsroom', 'Testimonials', 'List your Business',
  'Deals', 'Non-Partner Listing']
  return (
    <div className="d-flex flex-column mt-5 mb-0 " style={{ height: "45vh" }}>
      <footer className="bg-dark text-center text-white mt-auto">
        <div style={{display:"flex", justifyContent:"space-evenly", padding:"3%"}}>
          {cities.map((city)=>{
            return (
              <div style={{display:"flex", flexDirection:"column", alignItems:"start"}}>
            <div style={{fontSize:"100%", marginBottom:"8%"}}>
              {city}
            </div>
            <div style={{display:"flex", flexDirection:"column", marginBottom:"8%", alignItems:"start"}}>
            <div style={{fontSize:"90%"}}>Venues</div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"start", fontSize:"80%"}}>
            {venues.map((venue)=>{
              return (
                <div>{venue} Hall in {city}</div>
              )
            })}
            <div>All venues in {city} </div>
            </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", marginBottom:"8%", alignItems:"start"}}>
            <div style={{fontSize:"90%"}}>Vendors</div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"start", fontSize:"80%"}}>
            {vendors.map((vendor)=>{
              return (
                <div>{vendor}</div>
              )
            })}
            </div>
            </div>
          </div>
            )
          })}
        </div>

<div style={{display:"flex", justifyContent:"space-between",padding:"3% 8%",backgroundColor:"black"}}>
  <div style={{width:"50%",display:"flex", flexDirection:"column",alignItems:"start",justifyContent:"start"}}>
<div style={{fontSize:"80%", textTransform:"uppercase",paddingBottom:"1%"}}>get inspired</div>
<div style={{display:"flex",justifyContent:"space-between", width:"50%"}}>
  <div >Photos</div>
  <div >Real Weddings</div>
  <div >Blog</div>
</div>
</div>
<div style={{width:"50%",display:"flex", flexDirection:"column", alignItems:"end",justifyContent:"start" }}>
<h2>Weddingz.in</h2>
<div style={{fontSize:"70%"}}>Call our 24 hour helpline</div>
<div style={{display:"flex",fontSize:"90%", justifyContent:"space-between",width:"35%"}}>
  <div >82898493849</div>
  <div >info@Weddingz.in</div>
</div>
</div>
</div>

<div style={{paddingLeft:"8%",paddingRight:"8%", backgroundColor:"black",paddingTop:"5%",paddingBottom:"5%", 
borderBottom:"1px solid rgb(255,255,255,0.5)",borderTop:"1px solid rgb(255,255,255,0.5)"}}>
  <div >Company</div>
  <div style={{display:"flex",justifyContent:"space-between"}}>
    {footerOffers.map((offer)=>{
      return (
        <Link to="/responsiveUI/" style={{textDecoration:"none", color:"white"}}>{offer}</Link>
      )
    })}
  </div>
</div>
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-facebook-f"></i></span>

            {/* <!-- Twitter --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-twitter"></i></span>

            {/* <!-- Google --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-google"></i></span>

            {/* <!-- Instagram --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-instagram"></i></span>

            {/* <!-- Linkedin --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-linkedin-in"></i></span>

            {/* <!-- Github --> */}
            <span className="btn btn-outline-light btn-floating m-1">
              <i className="fab fa-github"></i></span>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3 footext">
          © 2022 Copyright:
          <span className="text-white" > Weddingz.com </span>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );

}