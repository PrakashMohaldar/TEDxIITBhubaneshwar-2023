import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TeamData } from "../data";
import OurTeamCard from "./our-team-card";

const Team = () =>{
    return (
        TeamData.map(({sectionContent, posts},index) => (
            <section className="commonSection what_wedo_2" key={index}>
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h2 className="sec_title">{sectionContent.title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        {posts.map((post, index)=>(
                            <Col lg={3} md={5} sm={11} key={index}>
                                <OurTeamCard data={post}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        ))
    )
   
}

export default Team