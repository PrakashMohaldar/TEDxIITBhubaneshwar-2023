import React, {useContext} from "react";
import { SpeakerContext } from "../context/speaker-context";
import { aboutSpeakerData } from "../data";
import { SpeakerData } from "../data";
import { Container, Row, Col } from 'react-bootstrap';

const SpeakerPopup = () =>{
    const {speakerTabStatus, updateSpeakerTabStatus, keyvalue} = useContext(SpeakerContext);
    const {image, name} = SpeakerData.posts[keyvalue-100];
    const { subtitle,content } = aboutSpeakerData[keyvalue-100]; 
    const handleSpeakerClick = (e) =>{
      e.preventDefault();
      console.log(keyvalue)
      updateSpeakerTabStatus(!speakerTabStatus, 1);
    };

    return (
        <div className="searchFixed popupBG animated fadeIn d-block">
            <div className="container-fluid">
               <a
                  href=""
                  id="sfCloser"
                  onClick={handleSpeakerClick}
                  className="sfCloser"
                ></a>
            </div>
            <div className="commonSection porfolioDetail">
                <Container>
                    <Row>
                        <Col lg={5} md={5} sm={12}>
                            <div className="portDetailThumb">
                                <img alt="speaker" src={image}></img>
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={12}>
                            <div className="features_content">
                                <h4 className="sub_title red_color">{subtitle}</h4>
                                <h2 className="sec_title white">{name}</h2>
                                <p className="sec_desc color_aaa">{content}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default SpeakerPopup;