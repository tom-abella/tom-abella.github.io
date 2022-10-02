import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"
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

ReactDOM.render(<Page/>,container)