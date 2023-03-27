import React from "react"
let componentName = "travelCard"

export default function TravelCard(props) {
    return (
        <div className={`${componentName}--container`}>
                <img src={`../../public/assets/${props.item.coverImg}`} alt="" />
                <div className={`${componentName}--cardInfo`}>
                    <div className="card__rowContainer">
                        <span className="fas fa-map-marker-alt"></span>
                        <p className="card__location">{props.item.location}</p> 
                        <p className="card__geoMap"> <a target={"_blank"} href={props.item.geoMaps.link}>View on Google maps</a></p> 

                    </div>
                    <h2 className="card__title">{props.item.title}</h2>
                    <b><p className="card__date">{props.item.travelDate}</p></b>
                    <p className="card__description">{props.item.description}</p>
                </div>
            

        </div>
    )
}