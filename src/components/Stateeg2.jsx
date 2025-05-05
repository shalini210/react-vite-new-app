import React, { useState } from 'react'

export default function Stateeg2() {
    const [a,seta] = useState(0)
    const [b,setb] =  useState(0)
    const  [msg,setmsg ] = useState("");
    const add=()=>
    {
      let sum = a+b;
      let newmsg = "sum is "+sum
      setmsg(newmsg)
    }
  return (
    <div>
        <p>Enter a : <input type="text" onChange={(e)=>seta(parseInt(e.target.value))}
        className='border-2 border-amber-200' /></p>
        <p>Enter b : <input type="text"  onChange={(e)=>setb(parseInt(e.target.value))}
        className='border-2 border-amber-200' /></p>
        <p>
          <input type="button" value="Add" onClick={()=>add()} />
        </p>
        {msg}
        {/* <h2>sum is {a+b}</h2>
        <h2>sub is {a-b}</h2> */}
    </div>
  )
}
