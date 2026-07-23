import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client"



function App(){
    const  [count,setCount] = useState(0)
    const [number,setNumber] = useState("")
    const [result,setResult] = useState(null)
    //Counter


    function Fibbonnaci(n){
        if(n<=1)
            return n;
    
        return Fibbonnaci(n-1)+Fibbonnaci(n-2)
    }

    // const result  =  useMemo(()=>Fibbonnaci(number),[number])
    useEffect(()=>{
        setResult(Fibbonnaci(number))
    })


    return(
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>

            <div>
                <h1>Fibbonnaci number is: {result}</h1>
                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            </div>
        </>
    )
}

const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(<App></App>)