import React, {useState} from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { aboutTedData } from "../data/index";

const AboutTed = () =>{
    const [active, setActive] = useState(1);
    const {posts} = aboutTedData;

    return(
        <section className="commonSection chooseUs" id="tedx">
            <Container>
               <div id="tabs">
                    <Row>
                        <Col lg={12}>
                            <ul className="chooseUs_title">
                                {posts.map(({title}, index)=>(
                                    <li key={index} className={`${active === index ? "active" : " "}`} >
                                        <a
                                        href="/#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActive(index);
                                        }}>
                                            {title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                    <div className="tab-content">
                        {posts.map((post, index) => {
                            return  index === active ? (
                                <div
                                  className="tab-pane fade show active animated fadeIn"
                                  id={`tes_tab_${index}`}
                                  key={index}>
                                    <Row
                                     className="flex-lg-row-reverse">
                                        <Col lg={7}>
                                            <div className="wh_choose">
                                                <p>{post.content}</p>
                                                <h4>
                                                    <a className="cate" href={post.url}>know more.</a>
                                                </h4>
                                            </div>
                                        </Col>
                                        <Col lg={5}>
                                            <div className="chose_img">
                                                <img src={post.image} alt={`chose_img-${index}`} />
                                            </div>
                                        </Col>
                                     </Row>
                                </div>
                            ):'';
                        })}
                    </div>
               </div>
            </Container>
        </section>
    )
}

export default AboutTed