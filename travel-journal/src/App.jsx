import React from "react"
import data from "./data"
import Navbar from "./Navbar"
import Places from "./Places"
import Introduction from "./Introduction"
import Footer from "./Footer"

export default function App(){
    const infos = data.map(info=>{
        return (
            <Places
                key={info.id}
                info={info}
            />
        )
    })

    return(
        <div>
        <Navbar />
        <Introduction />
        {infos}
        <Footer />
        </div>
    )
}