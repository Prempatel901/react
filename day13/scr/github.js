import { useEffect, useState } from "react"
import { useParams } from "react-router"




export default function Github(){

const {name} = useParams()
const [profile,setProfile] = useState("")



async function fetchuser() {
    const response = await fetch(`https://api.github.com/users/${name}`)
    const data = await response.json()
    setProfile(data)
}

useEffect(()=>{
    fetchuser();
},[])

    return(
        <>
        <h1>My Github Profile</h1>
        {/* Display the user data */}
        <div>
            <img src={profile.avatar_url}></img>
            <h2>{profile.login}</h2>
        </div>
        </>
    )
}