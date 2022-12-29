import React from "react";


const OurTeamCard = ({data}) =>{
    const { name,image, url } = data;
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