import { useState,useEffect } from "react"

const RestroMenu=()=>{
    const [resMenu,setResMenu]=useState(null)

    useEffect(()=>{fetchMenu()},[])

    const fetchMenu=async()=>{
       const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=639122&submitAction=ENTER")
       const json=await data.json()
       console.log(json)
    }

    return(<div>
        <h1>Heading</h1>
        <p>pargaraph</p>
        <ul>
            <li>lemon</li>
        </ul>
        </div>)
}
export default RestroMenu