import React, { useState } from 'react';
import Head from './components/header/header.js';
import Categories from './components/categories/categories.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SideBar from './components/sideBar/sideBar.jsx';
import Footer from './components/footer/footer.js';

function App() {
  const options=['mumbai','delhi','jalandhar','hyderabad','bangalore'];
  
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <>
      <Router>
        <div >
          <Head options={options} sideBar={sideBar} setSideBar={setSideBar}/>
          <SideBar sideBar={sideBar} setSideBar={setSideBar} />
          <Routes>
            <Route path='/responsiveUI/' element={<Categories options={options} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
