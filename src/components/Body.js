import Restcard from "./Restcard"
import restList  from "../utils/mockData";
import Shimmer from "./Shimmer"
import { useState,useEffect} from "react";
import {Link} from "react-router-dom"

const Body=()=>{
    let [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [searchTxt, setSearchTxt]=useState("")
    const [searchedData, setSearchedData]=useState([])

        // let changedRestaturents=()=>{
    //     setListOfRestaurents(listOfRestaurents)
    // }
    onClickSearch=()=>{
      const restaurents=listOfRestaurents.filter(eachRest=>eachRest.data.name.toLowerCase().includes(searchTxt.toLowerCase()))
     console.log("clicked")
     console.log(restaurents)
     setSearchedData(restaurents)
      
    }
    // changedRestaturents()
    useEffect(() => {
      fetchData();
    },[])

    const fetchData= async ()=>{
      const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
      const jsonData = await apiData.json()
      console.log(jsonData?.data?.cards[2]?.data?.data?.cards)
     setListOfRestaurents(jsonData.data.cards[2].data.data.cards)
     setSearchedData(jsonData.data.cards[2].data.data.cards)
    }
    //super power of usestate-->
    //conditional rendering---rendering based on condition
    if(listOfRestaurents.length===0){
      return <Shimmer/>
    }
   
    return(
      <>
      <div className="search">
      <div className="input-container">
        <input type="search" onChange={(e)=>{setSearchTxt(e.target.value)}} value={searchTxt}/>
        <button type="submit" onClick={onClickSearch}>Search</button>
        </div></div>
        <div className="body-container"> 
              
                  {/* <button onClick={()=>{const filteredList=listOfRestaurents.filter((res)=>res.data.avgRating<4);
                setListOfRestaurents(filteredList)
                }}> searchRestaurentsOnRating</button> */}
              
              <div><div className="rest-container">
                   {searchedData.map(restaurant =><Link to={"/restaurants/" + restaurant.data.id} ><Restcard key={restaurant.data.id}  restData={restaurant}/></Link>) }
              
              </div>
              </div>
              
        </div>
        </>
    )
}
export default Body;
