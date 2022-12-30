import React, {useContext} from "react";
import { SpeakerContext } from "../context/speaker-context";

const TeamCard = ({ data }) => {
  const { image, name, designation, socials, index } = data;
  const {speakerTabStatus, updateSpeakerTabStatus} = useContext(SpeakerContext);

  const handleSpeakerClick = (key) =>{
    updateSpeakerTabStatus(!speakerTabStatus, key);
  }

  return (
    <div className="singleTM">
      <div className="tm_img">
        <img src={image} alt={name} />
        <div className="tm_overlay">
          <div className="team_social">
            {socials.map(({ name, url }, index) => (
              <a key={index} href={url}>
                <span>{name}</span>
              </a>
            ))}
          </div>
          <a href='/#' id={index} className="common_btn" onClick={(e) => {
            e.preventDefault()
            handleSpeakerClick(e.currentTarget.id)} 
          }>
            <span>know more</span>
          </a>
        </div>
      </div>
      <div className="detail_TM">
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div>
    </div>
  );
};

export default TeamCard;