import {useRouteError} from "react-router-dom"//to get more information about error
const Error=()=>{
    const error=useRouteError()
    console.log(error)
    return(<div>
        <h1>OOPS!!!</h1>
        <p>Something went wrong!!</p>
        <h1>{error.status}: {error.statusText}</h1>
    </div>)
}


export default Error