// import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Api from './Api';

export default function LogIn() {
    const [email, setEmail] = React.useState();
    const [pass, setPass] = React.useState();

    let url = "https://6362424c7521369cd068e027.mockapi.io/ToDO";
    const navigate = useNavigate();
    const postData = ()=>{
        axios.post(url,{
            pass,
            email
        }).then((res)=>{
            console.log(res)
        })
         navigate("Api")
    }
    // function Click(){
    //     navigate("Api")
    // }
    // function storage(){
    //     navigate('LocalStorage')
    // }
  return (
    <div>
      <input placeholder='Password' onChange={e=>{setPass(e.target.value)}}></input>
      <input placeholder='Email' onChange={e=>{setEmail(e.target.value)}}></input>
      <button onClick={postData}>LogIn</button>
      {/* <button onClick={()=>{Click()}}>LogIn</button> */}
    </div>
  )
}