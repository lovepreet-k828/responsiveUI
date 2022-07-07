import React, { useState } from 'react';
import Head from './components/header/header.js';
import Categories from './components/categories/categories.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SideBar from './components/sideBar/sideBar.jsx';

function App() {
  const options=['Mumbai','Delhi','Jalandhar','Amritsar','Patiala'];
  
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <>
      <Router>
        <div>
          <Head options={options} sideBar={sideBar} setSideBar={setSideBar}/>
          <SideBar sideBar={sideBar} setSideBar={setSideBar} />
          <Routes>
            <Route path='/responsiveUI/' element={<Categories options={options} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
