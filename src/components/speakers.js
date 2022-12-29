import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import TeamCard from "./team-card";
import { SpeakerData } from "../data/index";

const Speakers = () =>{
    const { sectionContent, posts } = SpeakerData;
    return(
        <section className="commonSection portfolio" id="speakers">
            <Container>
                <Row>
                    <Col lg={12} className="text-center">
                        <SectionTitle data={sectionContent}/>
                    </Col>
                </Row>
                <Row id="Grid">
                    <div className="custom">
                        <Row>
                           {posts.map((post, index)=>(
                            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
                                <TeamCard data={post}/>
                            </Col>
                           ))} 
                           
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Speakers;