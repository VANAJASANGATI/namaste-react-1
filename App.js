import React from "react";
import ReactDOM from "react-dom/client";


const Name = ()=><h1>*****Hello world#****</h1>
const element=(<h1>{Name()}</h1>)
const course=<h1>Enter course name</h1>
const getCourse =<h1>{course}</h1>

const Heading = ()=>{
    return(
    <>
    
    <h1>Hello react</h1>
    {element}
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(getCourse);
root.render(<Heading/>);
