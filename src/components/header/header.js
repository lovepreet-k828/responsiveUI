import React, { useState } from 'react';
import Sidebtn from '../sideBtn/Sidebtn';
// import { Link } from 'react-router-dom';
import './header.css';
import mainImage from "../../images/main.jpg";
function Head({ options, setSideBar, sideBar }) {
  
  var ops = options.map((op) => {
    return (
      <option value={op}>{op}</option>
    )
  })

  const options2 = ['Select City', 'Mumbai', 'Delhi', 'Punjab'];
  var ops2 = options2.map((op) => {
    return (
      <option value={op}>{op}</option>
    )
  })

  const navItems = ['Venues', 'Venders', 'Blog', 'RealWeddings', 'Photos', 'Deals', 'Testimonials', 'Why Weddingz']
  var navList = navItems.map((navItem) => {
    return (
      <div style={{ margin: "10px" }}>
        {navItem}
      </div>
    );
  })
  const [option, setOption] = useState('');
  const handleChange = (e) => {
    setOption(e.target.value);
  }
  return (
    <>
      <div>
        <div className='mainNav' style={{ minWidth:"100%",color:"white" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap:"wrap" }}>
            <div style={{ display: "flex", justifyContent:"left", width: "50%" }}>
              <Sidebtn setSideBar={setSideBar} sideBar={sideBar} />
              <div style={{ padding: "2%", fontWeight:"bold", fontSize:"20px" }}>Weddingz.in</div>
              <select className="hide" style={{ height: "35px", width: "30%", margin: "10px", textTransform:"capitalize",
              backgroundColor:"rgb(0,0,0,0)",color:"white",borderColor:"white",paddingRight:"1%",paddingLeft:"1%" }} value={option}
                onChange={handleChange}
                defaultValue='Mumbai'
                name='name'>
                {ops}
              </select>
            </div>
            <div className="hide" >
              <div style={{ display: 'flex', justifyContent:"end", marginRight:"5%", alignItems: "center" }}>
                <div style={{ margin: "5px" }}>view Magzine</div>
                <div style={{ margin: "5px" }}>download app</div>
                <div style={{ margin: "5px" }}>List Your Bussiness</div>
              </div>
            </div>
          </div>
          <nav className="earlyhide" >
            <div style={{ width: '100%', display: "flex", marginBottom: "80px", position: "sticky", top: "0" }}>
              {navList}</div>
          </nav>
          <div style={{
            display: "flex", flexDirection: "column", height:"60%",
            justifyContent: "center", alignItems: "center",paddingTop:"3%"
          }}>
            <h2 style={{ textAlign: "center",}}>
              Plan Your Wedding With<br />
              India's Largest Wedding Co.
            </h2>
            <select style={{
              height: "45px", width: "30%", margin: "10px",
              padding: "5px", borderRadius: "5px", fontWeight: "bold"
            }} value={option}
              onChange={handleChange}
              defaultValue={option}
              name='name'>
              {ops2}
            </select>
          </div>

        </div>

        <div style={{ backgroundColor: "red", height: '35px' }}></div>
      </div>
    </>
  );
}

export default Head;