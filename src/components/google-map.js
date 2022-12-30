import React from "react";
import { Row, Col } from "react-bootstrap";
const GoogleMap = ({ extraClass }) => {
  return (
        <Col id="venue">
          <Row className="map_title">
                <h2 className="sec_title">Event Venue</h2>
          </Row>
          <Row>
          <div className={`google-map__${extraClass}`} >
            <iframe
              title="template google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6521.523492319636!2d85.66219654106865!3d20.14941685367687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19ac2e52a057f5%3A0x564b6e83a7504a16!2sIndian%20Institute%20Of%20Technology%20(IIT)%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1672063426119!5m2!1sen!2sin"
              className={`map__${extraClass}`}
              allowFullScreen></iframe>
          </div>

          </Row>
        </Col>
        
    
  );
};
export default GoogleMap;