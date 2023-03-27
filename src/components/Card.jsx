import React from "react"
import CardStar from "../../public/assets/cardStar.png"

export default function TravelCard(props) {

    let soldOutOrAvailable = props.item.soldOut == 0 ? "SOLD OUT" : "AVAILABLE";
    return (
        <div className="card--container">
            
                <img src={`../../public/assets/${props.item.coverImg}`} alt="Card photo mountain bike" />
                <div className="card--cardInfo">
                    <div className="card__status"><p>{soldOutOrAvailable}</p></div>
                    <img className="card__cardStar" src={CardStar} alt="Card star" />
                    <div className="rating">
                        <p className="card__rating">{props.item.stats.rating}</p>
                        <p className="card__notes">({props.item.stats.reviewCount})</p>
                        <p className="card__nationality">{props.item.location}</p>
                    </div>
                    <p className="card__activityInfo">{props.item.title}</p>
                    <p className="card__pricing"><span>From ${props.item.price} /</span>person</p>
                </div>
            

        </div>
    )
}