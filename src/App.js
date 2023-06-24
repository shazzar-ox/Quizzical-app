import React, { useEffect, useState } from "react";
import './App.css'
import {Link, BrowserRouter,Routes, Route} from 'react-router-dom'
import Page2 from './components/Page2'
import Home from './components/Home'


const App = ()=>
{
  return(
    <>

    <BrowserRouter>
        <Routes>         
            <Route path='/' Component={Home}/>
           <Route path="/page2" Component={Page2}/>
           </Routes>
    </BrowserRouter>  

    </>

    
  )

}

export default App