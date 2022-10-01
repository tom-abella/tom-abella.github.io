import React from "react"
import ReactDOM from "react-dom/client"
import Info from "./src/Info"
import About from "./src//About"
import Interest from "./src/Interest"
import Footer from "./src/Footer"
const container = document.getElementById("root")

const root =ReactDOM.createRoot(container)


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

root.render(<Page/>)