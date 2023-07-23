import {CDN_URL} from "../utils/constants"
const Restcard=(props)=>{
    
    const {restData}=props
   
    const {name,avgRating,cuisines,costForTwoString,deliveryTime,cloudinaryImageId}=restData.data
    return(
        <>
        <div className="rest-card" >
            <img className="rest-logo" src={CDN_URL+cloudinaryImageId}/>
            <div>
            <h2>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwoString}</h4>
            <h4>{deliveryTime + " Minutes"}</h4>
            <h4>{avgRating + " Stars"}</h4>
            </div>
        </div>
        
        </>
        

    )
}
export default Restcard;