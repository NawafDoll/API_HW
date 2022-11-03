import React from 'react'
import {useEffect} from 'react';
import axios from 'axios'

export default function Api(){
  const [state, setstate] = React.useState([]);
//   http://www.omdbapi.com/?i=tt3896198&apikey=fd7d830c
  useEffect(() => {
     axios.get("https://official-joke-api.appspot.com/random_joke").then((res) =>{
      console.log(res.data)
      setstate(res.data )
     })
  },[]);

return (
  <div  className='parent'>
   {state.map(items=>{
      return(
          
        <div>
       
       {/* <img width={"100%"} src={items.message}></img> */}
          {/* <img width={"100%"} src={items.Source}></img> */}
          <p>Name: {items.id}</p>
          </div>
      
   )
    })}
  </div>
)
}
