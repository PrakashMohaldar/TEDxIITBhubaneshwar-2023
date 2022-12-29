import React from "react";
import { ThemeData } from '../data/index';
import {Col, Container, Row} from "react-bootstrap";

const AboutTheme = ()=>{
    const { sectionContent, gallery } = ThemeData;
    return (
        <section className="commonSection ab_agency" id="abTheme">
            <Container>
                <Row>
                    <Col lg={6} md={7} sm={12} className="PR_79">
                        <h4 className="sub_title red_color">{sectionContent.subTitle}</h4>
                        <h2 className="sec_title white MB_45">{sectionContent.title}</h2>
                        <p className="sec_desc">{sectionContent.text}</p>
                    </Col>
                    <Col lg={6} md={5} sm={12} className="mt-5">
                        {gallery.map((item, index)=>(
                            <div className={`ab_img${index+1}`} key={index}>
                                <img src={item} alt=""/>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default AboutTheme