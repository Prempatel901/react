import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes, Route, Link } from "react-router";
import Home from "./scr/home";
import Contact from "./scr/contact";
import Dashboad from "./scr/dashboard";
import Details from "./scr/detail";
import Hello from "./scr/hello";
import Hii from "./scr/hii";
import Zero from "./scr/zero";



function App(){

    return(
        
       <BrowserRouter>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboad</Link>
        <Link to="/Details">Details</Link>
       </nav>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboad></Dashboad>}></Route>
            <Route path="/Details" element={<Details></Details>}>
            <Route index element={<Zero></Zero>}></Route>
            <Route path="Hello" element={<Hello></Hello>}></Route>
            <Route path="Hii" element={<Hii></Hii>}></Route>
            </Route>
        </Routes>

        {/* <footer>Footer </footer> */}

       </BrowserRouter>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)