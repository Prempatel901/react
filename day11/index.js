import React,{useState} from "react";
import ReactDOM from "react-dom/client"
// import { useContext } from "react";
import GlobalContext from "./global";
import Second from "./second";



function App(){
    const [count,setCount] = useState(10)
    // console.log(GlobalContext.Provider)
    return(
        <>
        <GlobalContext.Provider value={{count,setCount}}>
         <h1>Hello i am index {count}</h1>
         <Second/>
         </GlobalContext.Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)