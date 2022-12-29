import React from "react";
import { Link as LinkR } from "react-router-dom";

const OurTeamCard = ({data}) =>{
    const { name, occupation, image, url } = data;
    return (
        <div className="single_wedo">
            <img src={image} alt={name}/>
            <div className="overlay_wedo">
                    <a href={url}>{name}</a>
               
            </div>
        </div>
    )
}
export default OurTeamCard