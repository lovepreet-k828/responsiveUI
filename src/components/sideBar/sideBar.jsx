import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

function SideBar({setSideBar, sideBar }) {

  const navItems = ['Venues', 'Venders', 'Blog', 'RealWeddings', 'Photos', 'Deals', 'Testimonials', 'Why Weddingz']

  return (
    <div id="mySidenav" className="sidenav" style={{width: `${sideBar}px`}}>
    <button  onClick={()=>setSideBar(0)} 
    style={{backgroundColor:"#111", color:'white', border:'none',
    fontSize:"40px", display:"block", marginLeft:"auto", marginRight:'10%' }}>&times;</button>
    {
      navItems.map((navItem)=>{
        return (
          <Link to="/responsiveUI" key={navItem}>{navItem}</Link>
        )
      })
    }
</div>
  )
}

export default SideBar