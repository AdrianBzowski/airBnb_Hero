import React from "react";
import Card from "../components/Card";
import cardData from "../dataObjects/cardData.js";


export default function Main() {
    let cardComponents = cardData.map(dataItem =>{
        return <Card 
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
    })
    return(
        <div className="main--container">
            {cardComponents}
        </div>
    )
}