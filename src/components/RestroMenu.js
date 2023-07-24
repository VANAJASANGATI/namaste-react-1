import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { MENU_URL } from "../utils/constants"
const RestroMenu=()=>{
    const [resMenu,setResMenu]=useState(null)
    const {resId}=useParams()
    

    useEffect(()=>{fetchMenu()},[])

    const fetchMenu=async()=>{
       const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
       //("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=639122&submitAction=ENTER")
       const json=await data.json()
       console.log(json.data)
       setResMenu(json.data)
    }
    if(resMenu===null){
         return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage} =resMenu?.cards[0]?.card?.card?.info
    //const [itemCards] = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const {itemCards}=resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    console.log(itemCards)
    return(<div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <ul>
            {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} -          {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
          
        </ul>
        </div>)
}
export default RestroMenu