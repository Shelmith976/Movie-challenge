
import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Moviedetail from "./components/Moviedetail";
import Footer from "./components/footer";
import Movielists from "./components/Movielists"
// cd movie

function App() {
  return (
    <div className="App">
      <h2>My react app</h2>
      {/* <Header></Header>
       <BrowserRouter>
       <Routes>
       <Route path="/"  element={<Home/>}></Route>
        <Route path="/moviedetail" element={<Moviedetail/>}></Route>
       <Route path="/movielists" element={<Movielists/>}></Route>
 </Routes> 
  </BrowserRouter>

      //   <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/header" element={<Header/>}></Route>

        {/* <ul>
          <li><a href="/moviedetail">Moviedetail</a></li>
          <li><a href="/movielists">Movielists</a></li>
          <li><a href="/footer">footer</a></li>


        </ul>           */}
{/* <Footer/> */}

      {/**/}
      {/* */} 
<Home/>
      {/* <Movies/> */}
    </div>

  );
};

export default App;
