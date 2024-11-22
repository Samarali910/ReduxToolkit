import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Comment = () => {

  const [data,setData] = useState(null);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    axios.get('http://localhost:4000/comments').then((res)=>{
      setData(res.data)
      console.log(res.data)
      setLoading(false)
    }).catch((err)=>{
      setLoading(true);
      console.log("error",err)
    })
  },[])

  if(loading){
    return <h1>Loading....</h1>
  }
   
  return (
    <div>
      {
        data.map((items)=>(
          <li key={items.id}>{items.text}</li>
        ))
      }
    </div>
  )
}

export default Comment