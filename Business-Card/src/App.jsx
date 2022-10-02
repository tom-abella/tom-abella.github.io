import React from "react"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"
import ReactDOM from 'react-dom/client'


const container = document.getElementById("root")
function Page(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-5 wrapper">
                    <Info/>
                    <About/>
                    <Interest/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
    
}
ReactDOM.createRoot(container).render(<Page />)