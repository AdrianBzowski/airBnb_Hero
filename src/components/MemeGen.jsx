import React from "react";
import memesData from "../dataObjects/memesData.js";

export default function MemeGen(props) {
    function handleClick(e){
        let memes = memesData.data.memes.map(dataItem => {
            return dataItem;
        });
        console.log(memes);
       let randomMemeItem = memes[Math.floor(Math.random()* memes.length)];
       console.log(randomMemeItem.url);
    }

    return(
        <div className="meme--container">
            <div className="meme--bar">
                <i className="fas fa-globe-europe"></i>
                <h3>Meme Generator</h3>
            </div>
            <div className="meme--main">
                <div className="meme--nav">
                    <div className="meme--leftContainer">
                        <img src="" alt="" />
                        <h3 className="meme__title">Meme Generator</h3>
                    </div>
                    <div className="meme--rightContainer">
                        <h5>React Course - Project 3</h5>
                    </div>
                </div>
                <div className="meme--section">
                    <div className="meme--inputs">
                        <input placeholder="Top text" type="text" />
                        <input placeholder="Bottom text" type="text" />
                        <button onClick={handleClick}>Get a new meme image</button>
                    </div>
                    <div className="meme--imageContainer">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}