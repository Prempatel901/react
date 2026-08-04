import { useState } from "react";
import Foodcard from "./foodCard";


const foodItems = [
    {id:1,food:"Pizza",Price:200},
    {id:2,food:"Pasta",Price:250},
    {id:3,food:"Chicken",Price:460},
    {id:4,food:"Poha",Price:150},
    {id:5,food:"Momos",Price:120},
    {id:6,food:"Burgur",Price:150},
    {id:7,food:"Chomin",Price:80},
    {id:8,food:"Biryani",Price:250},
    {id:9,food:"Roti",Price:60},
    {id:10,food:"Panir",Price:90},
    {id:11,food:"noodls",Price:80}
];

export default function Card(){



    return(
        <>
        <div style={{display:"flex",justifyContent:"center", flexWrap:"wrap",gap:"20px" }}>
            {
            
            foodItems.map((value)=>{
                return(
                    <div key={value.id} style={{border:"2px solid black",display:"flex",justifyContent:"center" , alignItems:"center", flexDirection:"column", padding:"20px"}}>
                       <Foodcard value={value}/>
                    </div>
                )
            })

            }
        </div>
        </>
    )
}