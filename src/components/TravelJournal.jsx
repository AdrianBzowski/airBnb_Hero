import React from "react";
import TravelCard from "../components/TravelCard";
import travelCardData from "../dataObjects/travelCardData"

export default function Travel() {
    let travelCardComponents = travelCardData.map(dataItem =>{
        return <TravelCard 
        key={dataItem.id}
        //{...dataItem}
        item={dataItem}
        // img={dataItem.coverImg}
        // rating={dataItem.stats.rating}
        // reviewCount={dataItem.stats.reviewCount}
        // country={dataItem.location}
        // title={dataItem.title}
        // price={dataItem.price}
        // soldOut={dataItem.openSpots}
    />
    });

    return(
        <div className="travel--container">
            <div className="travel--bar">
                <i className="fas fa-globe-europe"></i>
                <h3>my travel journal</h3>
            </div>
            <div className="travel--main">
                {travelCardComponents}
            </div>
        </div>
    )
}