import React, { useRef } from 'react'

export default function Calc() {
    let aref = useRef();
    let bref = useRef()
    let resultref = useRef()
    const calculator=(op)=>
    {
        let a = parseInt(aref.current.value)
        let b = parseInt(bref.current.value)
        let msg = ""
        switch (op) {
            case '+':
                let c = a+b;
                msg = `sum of ${a} and ${b} is ${c}`
                break;        
            default:
                break;
        }
        resultref.current.innerHTML = msg 
    }
  return (
    <div>
        <p>Enter a : <input type="text" ref={aref}/></p>
        <p>Enter b : <input type="text" ref={bref}/></p>
        <input type="button" value="+" onClick={()=>calculator('+')}/>
        <h1 ref={resultref}></h1>
    </div>
  )
}
