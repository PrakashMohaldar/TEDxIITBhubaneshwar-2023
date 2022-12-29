import React from "react"
import { Container, Col, Row } from 'react-bootstrap';
import { ReasonsData } from "../data";
import ReasonsCard from './reasons-card';


const Reasons = ({extraClassName}) =>{
    const {sectionContent, posts} =  ReasonsData;

    return (
        <section className={`${extraClassName} commonSection`} id="reasons" >
           <Container>
            <Row>
                <Col lg={12} className="text-center">
                    <h2 className="sec_title white">{sectionContent.title}</h2>
                </Col>
            </Row>
            <Row className="custom_column">
          {posts.map((data, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <ReasonsCard data={data}/>
            </Col>
          ))}
        </Row>
           </Container>
        </section>
    )
}
export default Reasons