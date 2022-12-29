import React, { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks } from '../data/index';
import { Col, Container, Row } from "react-bootstrap";
import { MenuContext } from "../context/menu-context";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

const HeaderOne = () =>{
    const [sticky, setSticky] = useState(false);
    const { menuStatus, updateMenuStatus } = useContext(MenuContext);
    const handleMenuClick = (e) => {
        e.preventDefault();
        updateMenuStatus(!menuStatus);
      };
    
      const handleScroll = () => {
        if (window.scrollY > 70) {
          setSticky(true);
        } else if (window.scrollY < 70) {
          setSticky(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [sticky]);

      return (
        <header
          className={`header_01 ${
            true === sticky ? "fixedHeader animated flipInX" : null
          }`}
          id="header"
          >

          <Container fluid>
            <Row className="justify-content-between">
              <Col className="col-6" lg={2} md={3} sm={3}>
                <div className="logo">
                    
                  <LinkR to="/">
                      <img src={LogoImage.light} alt="" />
                  </LinkR>
                    
                </div>
              </Col>
              <Col lg={8} sm={8} md={7} className="d-none d-lg-block ">
                <nav className="mainmenu text-center">
                  <ul>

                       <li key="0" className="">
                          
                          <LinkS to={NavLinks[0].url} spy={true} smooth={true} offset={0} duration={500}>
                              {NavLinks[0].name}
                          </LinkS>
                            
                       </li>
                       <li key="1" className="">
                            
                          <LinkS to={NavLinks[1].url} spy={true} smooth={true} offset={-20} duration={500}>
                              {NavLinks[1].name}
                          </LinkS>
                            
                       </li>
                       <li key="2" className="">
                            
                          <LinkS to={NavLinks[2].url} spy={true} smooth={true} offset={0} duration={500}>
                              {NavLinks[2].name}
                          </LinkS>
                            
                       </li>
                       <li key="3" className="">
                            
                          <LinkS to={NavLinks[3].url} spy={true} smooth={true} offset={-120} duration={500}>
                              {NavLinks[3].name}
                          </LinkS>
                            
                       </li>
                       <li key="4" className="">
                          
                          <LinkR to={NavLinks[4].url}>
                              {NavLinks[4].name}
                          </LinkR>
                            
                       </li>
                       <li key="5" className="">
                            
                          <LinkS to={NavLinks[5].url} spy={true} smooth={true} offset={-120} duration={500}>
                              {NavLinks[5].name}
                          </LinkS>
                            
                       </li>
                  </ul>
                </nav>
              </Col>
              <Col lg={2} md={2} sm={4} className="col-6">
                <div className="navigator text-right">
                  <a
                    href="/#"
                    className="menu mobilemenu d-none d-md-none d-lg-none"
                  >
                    <i className="mei-menu"></i>
                  </a>
                  <a
                    id="open-overlay-nav"
                    className="menu hamburger"
                    onClick={handleMenuClick}
                    href="/#"
                  >
                    <i className="mei-menu"></i>
                  </a>

                </div>
              </Col>
            </Row>
          </Container>
        </header>
      );
};

export default HeaderOne