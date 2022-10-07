import React from "react"
import App from "./App"
export default function Places(props){
    return(
        <div className="container">
            <div className="row">
                {/** Render Image*/}
                <div className="col-12 col-sm-10 col-md-6 col-lg-4 img-container">
                <img src={`${props.info.imageUrl}`}  className="images"/>
                </div>
                {/**Render Description*/}
                <div className="col-md txt-container mt-1">
                <i className="fa fa-map-marker" aria-hidden="true"/>
                    <span className="mx-2">{props.info.location}</span>
                    <p className="h2">{props.info.title}</p>
                    <p className="date">{props.info.startDate}</p>
                    <p>{props.info.description}</p>
                </div>
            </div>
        </div>
    )
}