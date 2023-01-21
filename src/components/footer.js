import React from "react";
import { Link as LinkR } from "react-router-dom";
import { LogoImage } from "../data";

const Footer = ()=>{
    const {light} = LogoImage;

    return (
        <footer className="footer_1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6 col-md-5">
                        <aside className="widget aboutwidget">
                            <LinkR to="/">
                                <img src={light} alt=""/>
                            </LinkR>
                            <p>
                            tedxiitbhubaneswar@gmail.com
                            </p>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/company/tedx-iit-bbs/about/">
                                        <i className="fa fa-linkedin"></i>linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/tedxiitbhubaneswar/">
                                        <i className="fa fa-instagram"></i>Instagram
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                <a  style={{color:"#e62b4a", }} href="https://www.ted.com/">
                                    Link to TED
                                </a>
                                </li>
                                <li>
                                <a  style={{color:"#e62b4a"}} href="https://www.ted.com/about/programs-initiatives/tedx-program">
                                    Link to TEDx
                                </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-md-4">
                        <aside className="widget contact_widgets">
                            <h3 className="widget_title">Address</h3>
                            <p>
                                IIT Bhubaneswar
                                <br/>
                                Community center, Argul-Jatni Rd
                                <br/>
                                Kansapada, Odisha, India 752050
                            </p>
                            <h3 className="widget_title">Event Date</h3>
                            <p> 07/01/2023</p>
                        </aside>
                    </div>
                    <div className="col-lg-3 col-sm-2 col-md-3">
                        <aside className="widget social_widget">
                            <h3 className="widget_title">License Holder</h3>
                            <ul>
                                <li>
                                    Koushik Kumar Kamsali
                                </li>
                                <li>
                                    kkk14@iitbbs.ac.in
                                </li>
                                <li>
                                <a href="https://www.linkedin.com/in/koushik-2001?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkYn%2FYtJQScyrdgFJpi0L2Q%3D%3D">
                                    <i className="fa fa-linkedin"></i>linkedin
                                </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="copyright">
                            <p>
                            © copyright {new Date().getFullYear()} by{" "}
                            TED<span style={{textTransform:"lowercase"}}>x</span> IIT Bhubaneswar {'\u00A0'}|{'\u00A0'}  Designed and developed by Wissenaire Web Team {'\u00A0'}|{'\u00A0'}<br/> This independent TEDx event is operated under license from TED.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer