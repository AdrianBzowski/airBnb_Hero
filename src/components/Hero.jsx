import React from "react";
import heroPhoto from "../../public/assets/heroPhotos.png";

export default function Hero() {
    return(
        <div className="hero--container">
            <div className="hero__tiles">
                <img src={heroPhoto} alt="" />
            </div>
            <div className="hero__text">
                <h1>Online experiences</h1>
                <p>Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}