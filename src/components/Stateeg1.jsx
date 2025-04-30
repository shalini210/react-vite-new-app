import React from 'react'
import { useState } from 'react';
export default function Stateeg1() {
    const[count,setcount]= useState(0)
    let increment = ()=>
    {
        setcount(count+1)        
    }
    let decrement = ()=>
        {
            setcount(count-1)            
        }
  return (
    <div className='counter_container'>
    <input type="button" value="-"  onClick={()=>decrement()} />
    <div>count :{count}
    <input type="button" value="+"  onClick={()=>increment()} />
    </div>
    </div>
  )
}
