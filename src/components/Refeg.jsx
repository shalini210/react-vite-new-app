import React, { useRef } from 'react'

export default function Refeg() {
    let nameref = useRef()
    let resultref = useRef()
    let hi = ()=>
    {
        resultref.current.innerHTML = "welcome "+ nameref.current.value;
    }
  return (
    <div>
<p>
    Enter your name : <input type="text" ref={nameref} />
    <input type="button" value="Click here " onClick={()=>hi()} />
</p>
<h1 ref={resultref}>
    </h1>
    </div>
  )
}
