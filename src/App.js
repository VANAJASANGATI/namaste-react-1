import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error"
import RestroMenu from "./components/RestroMenu";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestroMenu from "./components/RestroMenu";

const App=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
} 
// 

const appRouter=createBrowserRouter([{path:"/",element:<App/>,
children:[{path:"/",element:<Body/>},
{path:"/home",element: <Home/>,},
{path:"/about",element: <About/>,},
{path:"/contact",element: <Contact/>,},
{path:"/cart",element: <Cart/>,},
{path:"/restaurents/:resId",element: <RestroMenu/>,}],
errorElement:<Error/>},])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

