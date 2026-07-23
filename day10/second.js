
import React,{useState, useMemo, useCallback,useRef} from "react";
import ReactDOM from "react-dom/client"



// function App(){
//     const [count,setCount] = useState(0)
//     const money = useRef(0)
//     // console.log(money.current)

//     return(
//         <>
//             <h1>Counter is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <h1>Money is : {money.current}</h1>
//             <button onClick={()=>{money.current = money.current+1
//                 console.log(money.current)
//             }} >Increment</button>
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>)




function StopWatch(){
    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false)
    const intervalRef = useRef(null)
    function start(){
        if(!isRunning){

       intervalRef.current = setInterval(()=>{
            setTime((prevTime)=>prevTime+1)
        },1000)
        setIsRunning(true)
    }
    }

    function stop(){
        clearInterval(intervalRef.current)
        intervalRef.current = null;
    }
    function reset(){
        clearInterval(intervalRef.current)
        intervalRef.current = null;
        setTime(0)
    }
return(
    <>
        <h1>stopWatch is : {time}</h1>
        <br/><br/>
        <button onClick={start}>Start</button>
        <br/><br/>
        <button onClick={stop}>Stop</button>
        <br/><br/>
        <button onClick={reset}>Reset</button>


    </>
)
}





const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<StopWatch/>)