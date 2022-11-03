import React from 'react' 
import { Route, Routes } from 'react-router-dom';
import Api from './Api';
import LogIn from './LogIn';
import { Form } from 'react-router-dom';


  export default function Rout() {   
    return ( 
    <>    
     <LogIn/>
        <Routes>   
    <Route path ="Craet2" element = {<LogIn/>}></Route> 
    <Route path ="Api" element = {<Api/>}></Route>  
        </Routes> 
  </>      
    )
 }